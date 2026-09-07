export const siteConfig = {
  name: "NUAMI",
  productName: "NUAMI Form",
  title: "NUAMI Form | 뉴아미",
  url: "https://form.nuami.kr",
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
