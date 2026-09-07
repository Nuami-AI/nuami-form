import { RedirectToForm } from "@/components/RedirectToForm";
import { getGoogleFormUrl } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("ko");

export default function KoreanFormPage() {
  return <RedirectToForm locale="ko" href={getGoogleFormUrl("ko")} />;
}
