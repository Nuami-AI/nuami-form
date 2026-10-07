import { RedirectToForm } from "@/components/RedirectToForm";
import { getGoogleFormUrl } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("root", "/busan");

export default function BusanFormPage() {
  return <RedirectToForm locale="ko" href={getGoogleFormUrl()} />;
}
