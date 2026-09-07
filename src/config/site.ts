export type Locale = "ko" | "en";

export const locales = ["ko", "en"] as const;

export const siteConfig = {
  name: "NUAMI",
  productName: "NUAMI",
  url: "https://form.nuami.kr",
  themeColor: "#1F5AF6",
  gaMeasurementId: "G-QJVGQDPKGD",
} as const;

export const localeContent = {
  root: {
    title: "뉴아미 사용성 테스트 참여자 모집 | NUAMI Usability Test",
    description:
      "한국 거주 외국인 유학생을 대상으로 뉴아미 AI 서비스 사용성 테스트 참여자를 모집합니다. 참여 혜택은 현금 3만원입니다. NUAMI is recruiting international students living in Korea for a usability test.",
    ogDescription:
      "한국 거주 외국인 유학생 대상, 뉴아미 AI 서비스 사용성 테스트 참여자를 모집합니다. 참여 혜택 현금 3만원. International students living in Korea are welcome to apply.",
    twitterDescription:
      "한국 거주 외국인 유학생 대상 사용성 테스트, 참여 혜택 현금 3만원. Usability test for international students living in Korea, KRW 30,000 reward.",
    ogImageAlt:
      "뉴아미 사용성 테스트 참여자 모집, NUAMI Usability Test Participants Wanted",
    twitterImageAlt: "뉴아미 사용성 테스트 참여자 모집, NUAMI Usability Test",
    ogImagePath: "/og-usability-test-ko.jpg",
    ogLocale: "ko_KR",
    alternateLocale: "en_US",
  },
  ko: {
    title: "뉴아미 사용성 테스트 참여자 모집 | NUAMI",
    description:
      "한국 거주 외국인 유학생을 대상으로 뉴아미 AI 서비스 사용성 테스트 참여자를 모집합니다. 참여 혜택은 현금 3만원입니다.",
    ogDescription:
      "한국 거주 외국인 유학생 대상, 뉴아미 AI 서비스 사용성 테스트 참여자를 모집합니다. 참여 혜택 현금 3만원.",
    twitterDescription:
      "한국 거주 외국인 유학생 대상 사용성 테스트, 참여 혜택 현금 3만원.",
    ogImageAlt: "뉴아미 사용성 테스트 참여자 모집",
    twitterImageAlt: "뉴아미 사용성 테스트 참여자 모집",
    ogImagePath: "/og-usability-test-ko.jpg",
    ogLocale: "ko_KR",
    alternateLocale: "en_US",
    redirecting: "뉴아미 사용성 테스트 신청 페이지로 이동하고 있습니다.",
    fallback: "자동으로 이동하지 않는 경우",
    openForm: "신청서 열기",
  },
  en: {
    title: "NUAMI Usability Test | Recruiting Participants",
    description:
      "NUAMI is recruiting international students living in Korea for a usability test. Participants receive KRW 30,000.",
    ogDescription:
      "International students living in Korea are welcome to apply for the NUAMI AI usability test. KRW 30,000 reward.",
    twitterDescription:
      "Usability test for international students living in Korea, KRW 30,000 reward.",
    ogImageAlt: "NUAMI Usability Test Participants Wanted",
    twitterImageAlt: "NUAMI Usability Test",
    ogImagePath: "/og-usability-test-en.jpg",
    ogLocale: "en_US",
    alternateLocale: "ko_KR",
    redirecting: "Redirecting to the NUAMI usability test application form.",
    fallback: "If you are not redirected automatically,",
    openForm: "open the application form.",
  },
} as const;

/**
 * Korean Google Form. Override with GOOGLE_FORM_URL_KO.
 */
export const DEFAULT_GOOGLE_FORM_URL_KO =
  "https://docs.google.com/forms/d/e/1FAIpQLScE2fw2xO5QzLsRfL3BDnBZkWQAXoyJ9Fen_JHyV8HcNx_kMQ/viewform?fbzx=6808152056679439250";

/**
 * English Google Form. Override with GOOGLE_FORM_URL_EN.
 */
export const DEFAULT_GOOGLE_FORM_URL_EN =
  "https://docs.google.com/forms/d/e/1FAIpQLSfY7qk9seivpiXf0vr3J4FVme9iIlhx7cz2dtJUgTNBhxvPEg/viewform";

export function getGoogleFormUrl(locale: Locale): string {
  if (locale === "en") {
    return (
      process.env.GOOGLE_FORM_URL_EN?.trim() || DEFAULT_GOOGLE_FORM_URL_EN
    );
  }

  return (
    process.env.GOOGLE_FORM_URL_KO?.trim() ||
    process.env.GOOGLE_FORM_URL?.trim() ||
    DEFAULT_GOOGLE_FORM_URL_KO
  );
}

export function isLocale(value: string): value is Locale {
  return value === "ko" || value === "en";
}
