// 서비스 데이터
const services = [
  {
    id: 1,
    name: "민원\n안내",
    subText: "민원안내",
    icon: "images/icon31.png",
    category: ["all", "popular"],
  },
  {
    id: 2,
    name: "3D\n청사",
    subText: "3D청사안내",
    icon: "images/icon_2.png",
    category: ["all"],
  },
  {
    id: 3,
    name: "오시\n는길",
    subText: "오시는길",
    icon: "images/icon_3.png",
    category: ["all"],
  },
  {
    id: 4,
    name: "일정\n안내",
    subText: "일정안내",
    icon: "images/icon22.png",
    category: ["all"],
  },
  {
    id: 5,
    name: "민원\n신고",
    subText: "민원신고",
    icon: "images/icon21.png",
    category: ["all"],
  },
  {
    id: 6,
    name: "비리\n신고",
    subText: "비리신고",
    icon: "images/icon35.png",
    category: ["all"],
  },
  {
    id: 7,
    name: "주차\n장",
    subText: "주차장",
    icon: "images/icon34.png",
    category: ["all"],
  },
  {
    id: 8,
    name: "전자\n민원",
    subText: "전자민원",
    icon: "images/icon23.png",
    category: ["all"],
  },
  {
    id: 9,
    name: "여권\n발급",
    subText: "여권발급",
    icon: "images/icon32.png",
    category: ["all"],
  },
  {
    id: 10,
    name: "청사\n안내",
    subText: "청사안내",
    icon: "images/icon33.png",
    category: ["all"],
  },
  { id: 11, name: "민원상담", icon: "icon36.png" },
  { id: 12, name: "수수료안내", icon: "icon37.png" },
  { id: 13, name: "시설물안내", icon: "icon38.png" },
  { id: 14, name: "민원신청", icon: "icon39.png" },
  { id: 15, name: "서류발급", icon: "icon40.png" },
];

const quickMenuItems = [
  {
    id: "phone",
    icon: "images/icon_1.png",
    title: "전화번호안내",
    action: () => {
      alert("민원실 대표번호: 000-000-0000");
    },
  },
  {
    id: "building",
    icon: "images/icon_2.png",
    title: "3D청사안내",
    action: () => {
      window.location.href = "/building-guide";
    },
  },
  {
    id: "location",
    icon: "images/icon_3.png",
    title: "오시는길",
    action: () => {
      window.location.href = "/location";
    },
  },
];

// 민원 서비스 아이콘
const additionalServices = [];

// 검색 제안 데이터
const searchSuggestions = [
  "민원신청 방법",
  "주차장 이용시간",
  "증명서 발급 절차",
  "휴일 근무 시간",
  "민원실 위치",
  "여권 발급",
  "주민등록 등본",
  "가족관계증명서",
  "토지대장 열람",
  "공시지가 확인",
];
