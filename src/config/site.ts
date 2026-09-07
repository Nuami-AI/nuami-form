export const siteConfig = {
  name: "NUAMI",
  productName: "NUAMI",
  title: "뉴아미 사용성 테스트 참여자 모집 | NUAMI Usability Test",
  description:
    "한국 거주 외국인 유학생을 대상으로 뉴아미 AI 서비스 사용성 테스트 참여자를 모집합니다. 참여 혜택은 현금 3만원입니다. NUAMI is recruiting international students living in Korea for a usability test.",
  ogDescription:
    "한국 거주 외국인 유학생 대상, 뉴아미 AI 서비스 사용성 테스트 참여자를 모집합니다. 참여 혜택 현금 3만원. International students living in Korea are welcome to apply.",
  twitterDescription:
    "한국 거주 외국인 유학생 대상 사용성 테스트, 참여 혜택 현금 3만원. Usability test for international students living in Korea, KRW 30,000 reward.",
  url: "https://form.nuami.kr",
  ogImagePath: "/og-usability-test.jpg",
  ogImageAlt:
    "뉴아미 사용성 테스트 참여자 모집, NUAMI Usability Test Participants Wanted",
  twitterImageAlt: "뉴아미 사용성 테스트 참여자 모집, NUAMI Usability Test",
  themeColor: "#1F5AF6",
  gaMeasurementId: "G-QJVGQDPKGD",
} as const;

/**
 * Default form.nuami.kr redirect target.
 * Override at runtime with GOOGLE_FORM_URL.
 */
export const DEFAULT_GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScE2fw2xO5QzLsRfL3BDnBZkWQAXoyJ9Fen_JHyV8HcNx_kMQ/viewform?fbzx=6808152056679439250";

export function getGoogleFormUrl(): string {
  const fromEnv = process.env.GOOGLE_FORM_URL?.trim();
  return fromEnv || DEFAULT_GOOGLE_FORM_URL;
}
