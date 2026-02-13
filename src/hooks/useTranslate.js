import { useLocale } from "../contexts/LocaleContext";

const dict = {
  ko: {
    // 버튼
    "confirm button": "확인",
    "cancel button": "취소",
    "edit button": "수정",
    "delete button": "삭제",
    "create button": "추가하기",
    "load more": "더보기",
    "submit button": "작성",

    // 정렬
    "sort by latest": "최신순",
    "sort by calorie": "칼로리순",

    // 모달 제목
    "edit calorie title": "칼로리 수정하기",
    "create calorie title": "칼로리 기록하기",

    // 입력 필드 플레이스홀더
    "review title placeholder": "음식 이름",
    "review calorie placeholder": "칼로리(Kcal)",
    "review content placeholder": "내용을 입력해 주세요.",
    search: "검색어를 입력하세요",

    // 언어 선택
    language: "한국어",

    // 에러 메시지
    "locale provider error": "반드시 LocaleProvider 안에서 사용해야 합니다",

    // 푸터
    "terms of service": "서비스 이용약관",
    "privacy policy": "개인정보 처리방침",
  },

  en: {
    // Buttons
    "confirm button": "OK",
    "cancel button": "Cancel",
    "edit button": "Edit",
    "delete button": "Delete",
    "create button": "Create",
    "load more": "Load More",
    "submit button": "Submit",

    // Sorting
    "sort by latest": "Latest",
    "sort by calorie": "Highest",

    // Modal titles
    "edit calorie title": "Edit Calorie",
    "create calorie title": "Record Calorie",

    // Input field placeholders
    "review title placeholder": "Enter food",
    "review calorie placeholder": "Enter calorie",
    "review content placeholder": "Enter content",
    search: "Search",

    // Language selection
    language: "English",

    // Error messages
    "locale provider error": "Must be used within LocaleProvider",

    // Footer
    "terms of service": "Terms of Service",
    "privacy policy": "Privacy Policy",
  },
};

function useTranslate() {
  const locale = useLocale();
  const translate = (key) => dict[locale][key] || "";
  return translate;
}

export default useTranslate;
