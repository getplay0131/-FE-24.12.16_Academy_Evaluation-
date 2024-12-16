// DOM 요소 선택을 함수로 래핑하여 안전하게 처리
function initializeDOM() {
  const elements = {
    servicesGrid: document.querySelector(".services-grid"),
    searchInput: document.querySelector(".search-input"),
    searchIcon: document.querySelector(".search-icon"),
    quickItems: document.querySelectorAll(".quick-item"),
    keywordTags: document.querySelectorAll(".keyword-tag"),
  };

  return elements;
}

// 반응형 그리드 조정 함수 수정
function handleResponsive() {
  const grid = document.querySelector(".services-grid");
  if (!grid) return; // 요소가 없으면 함수 종료

  const width = window.innerWidth;
  if (width <= 480) {
    grid.style.gridTemplateColumns = "repeat(2, 1fr)";
  } else if (width <= 768) {
    grid.style.gridTemplateColumns = "repeat(3, 1fr)";
  } else {
    grid.style.gridTemplateColumns = "repeat(5, 1fr)";
  }
}

// 서비스 그리드 렌더링 함수 수정
function renderServices(elements) {
  if (!elements.servicesGrid) return; // 요소가 없으면 함수 종료

  elements.servicesGrid.innerHTML = "";
  services.slice(0, 10).forEach((service) => {
    const serviceItem = document.createElement("a");
    serviceItem.href = "#";
    serviceItem.className = "service-item";
    serviceItem.innerHTML = `
            <img src="${service.icon}" alt="" class="service-icon">
            <div class="service-name">${service.name}</div>
        `;
    serviceItem.addEventListener("click", (e) => {
      e.preventDefault();
      handleServiceClick(service);
    });
    elements.servicesGrid.appendChild(serviceItem);
  });
}

// 이벤트 리스너 설정 함수
function setupEventListeners(elements) {
  if (elements.searchInput && elements.searchIcon) {
    let searchTimeout;
    elements.searchInput.addEventListener("input", () => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => handleSearch(elements), 300);
    });

    elements.searchIcon.addEventListener("click", () => handleSearch(elements));
    elements.searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        handleSearch(elements);
      }
    });
  }

  if (elements.quickItems.length) {
    elements.quickItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const serviceType = item.dataset.service;
        const menuItem = quickMenuItems.find((menu) => menu.id === serviceType);
        if (menuItem && menuItem.action) {
          menuItem.action();
        }
      });
    });
  }

  if (elements.keywordTags.length) {
    elements.keywordTags.forEach((tag) => {
      tag.addEventListener("click", (e) => {
        e.preventDefault();
        if (elements.searchInput) {
          const keyword = tag.textContent.replace("#", "");
          elements.searchInput.value = keyword;
          handleSearch(elements);
        }
      });
    });
  }
}

// 검색 처리 함수 수정
function handleSearch(elements) {
  if (!elements.searchInput || !elements.servicesGrid) return;

  const searchTerm = elements.searchInput.value.trim().toLowerCase();
  if (!searchTerm) {
    renderServices(elements);
    return;
  }

  const filteredServices = services.filter(
    (service) =>
      service.name.toLowerCase().includes(searchTerm) ||
      service.subText.toLowerCase().includes(searchTerm)
  );

  renderFilteredServices(filteredServices, elements.servicesGrid);
}

// 필터링된 서비스 렌더링 함수 수정
function renderFilteredServices(filteredServices, grid) {
  if (!grid) return;

  grid.innerHTML = "";
  if (filteredServices.length === 0) {
    grid.innerHTML = `
            <div class="no-results">
                검색 결과가 없습니다.<br>
                다른 검색어를 입력해주세요.
            </div>
        `;
    return;
  }

  filteredServices.forEach((service) => {
    const serviceItem = document.createElement("a");
    serviceItem.href = "#";
    serviceItem.className = "service-item";
    serviceItem.innerHTML = `
            <img src="${service.icon}" alt="" class="service-icon">
            <div class="service-name">${service.name}</div>
        `;
    grid.appendChild(serviceItem);
  });
}

// 초기화 함수
function initialize() {
  const elements = initializeDOM();
  renderServices(elements);
  setupEventListeners(elements);
  handleResponsive();

  // 윈도우 리사이즈 이벤트
  window.addEventListener("resize", handleResponsive);
}

// DOM 로드 완료 시 초기화
document.addEventListener("DOMContentLoaded", initialize);
