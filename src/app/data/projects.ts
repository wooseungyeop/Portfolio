export const projects = [
  {
    title: "전지적 구직자 시점",
    descriptionLines: [
      "경력단절 여성이나 고령자처럼 일자리 정보에 접근이 어려운 사회적 약자들을 위해, 공공데이터 포털의 채용 정보를 기반으로 한 맞춤형 큐레이션 서비스를 개발했습니다.",
      "저는 프론트-백엔드 연동을 비롯해 게시판 CRUD, 검색 필터(자음 포함 검색 등), 최근 검색어, 채용공고 스크랩 기능 개발을 담당했습니다.",
    ],
    images: ["/omniscient1.png", "/omniscient2.png"],
    tech: ["Vue.js", "JavaScript", "Spring", "MySQL"],
    link: "https://github.com/Omniscient-Job-Project",
    period: "2024.09 - 2024.10",
    members: 6,
    roles: [
      "공공데이터 API 연동",
      "자유게시판, 자격증 백엔드 CRUD 구현",
      "토스 ES-Hangul API 활용 자음 검색어 필터 적용",
      "검색어와 유사한 자격증명 자동 포함 필터 적용",
      "자격증, 자유게시판 UI/UX 구현",
      "DB 설계 구조 및 MySQL를 활용한 DB 구축"
    ],
  },
  {
    title: "PickFit",
    descriptionLines: [
      "해외 쇼핑몰에서 빈번히 발생하는 반품 문제를 줄이기 위해, Virtual Try-On AI를 활용한 온라인 피팅 기능과 사용자 맞춤형 코디 추천 기능을 개발했습니다.",
      "저는 React 기반의 프론트와 Spring/MySQL 백엔드 연동을 통해 이미지 기반 착용 시뮬레이션 및 코디 데이터를 사용자와 매칭하는 기능을 구축했습니다.",
    ],
    images: ["/pickfit2.png", "/pickfit3.png", "/pickfit.png"],
    tech: ["React", "CSS3", "Spring", "MySQL", "Virtual Try On"],
    link: "https://github.com/Pick-Fit/Front-end",
    period: "2024.10 - 2024.12",
    members: 6,
    roles: [
      "프로젝트의 프론트엔드 전체 구조 설계 및 개발을 단독으로 수행",
      "트렌비(Trenbe) 사이트 크롤링을 통한 패션 이미지 자동 수집 및 전처리",
      "마이 페이지 백엔드 CRUD 구현",
      "프론트엔드 업로드 → 백엔드 → AI(머신러닝) 모델 → 결과 반환까지의 이미지 연동 시스템 구현"
    ],
  },
];
