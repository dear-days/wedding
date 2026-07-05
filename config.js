/**
 * Modern Minimal Wedding Invitation Configuration
 *
 * Edit the values below to customize your wedding invitation.
 * Image files should be placed in the corresponding images/ subfolders
 * using numeric filenames (1.jpg, 2.png, ...).
 * The code auto-detects images from 1 to the configured max number.
 * Supported image formats: jpg, png.
 *
 * Image folder conventions:
 *   images/hero/1.*       - Main wedding photo (single file)
 *   images/story/1.*, ... - Story section photos (auto-detected)
 *   images/gallery/1.*, . - Gallery photos (auto-detected)
 *   images/location/1.*   - Venue/map image (single file)
 *   images/og/1.*         - Kakao share thumbnail (single file)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 섹션 표시 여부 ──
  sections: {
    story: false,    // 우리의 이야기 섹션 표시 여부
    gallery: true  // 갤러리 섹션 표시 여부
  },

  // ── 이미지 탐색 ──
  imageSearch: {
    maxImages: 30
  },

  // ── 메인 (히어로) ──
  groom: {
    name: "이민우",
    nameEn: "Minwoo",
    father: "이유광",
    mother: "김재선",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "최정아",
    nameEn: "Jeongah",
    father: "최진이",
    mother: "이선미",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-11-07",
    time: "13:00",
    venue: "엘블레스 다이아몬드홀",
    // hall: "다이아몬드홀 (B1)",
    address: "서울시 서초구 강남대로 213",
    mapLinks: {
      kakao: "https://place.map.kakao.com/607282159",
      naver: "https://naver.me/xnh0dHNR"
    }
  },

  // ── 인사말 ──
  invitation: {
    title: "소중한 분들을 초대합니다",
    message: "기쁜 날, 귀한 걸음으로 함께하시어\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "이민우", bank: "OO은행", number: "000-000-000000" },
      { role: "아버지", name: "이유광", bank: "OO은행", number: "000-000-000000" },
      { role: "어머니", name: "김재선", bank: "OO은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "최정아", bank: "국민", number: "9-25128971-54" },
      { role: "아버지", name: "최진이", bank: "국민", number: "789425-94-120469" },
      { role: "어머니", name: "이선미", bank: "신한", number: "110-024-434941" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  kakaoShare: {
    jsKey: "",
    title: "이민우 & 최정아",
    description: "2026년 11월 7일 토요일 오후 2시 / 양재 엘블레스"
  }
};
