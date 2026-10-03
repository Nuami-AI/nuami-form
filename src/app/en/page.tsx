import { RedirectToForm } from "@/components/RedirectToForm";
import { getGoogleFormUrl } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("root");

export default function EnglishFormPage() {
  return <RedirectToForm locale="ko" href={getGoogleFormUrl()} />;
}

/*
 * English-only form page — restore if needed later.
 *
 * export const metadata = createPageMetadata("en");
 *
 * export default function EnglishFormPage() {
 *   return <RedirectToForm locale="en" href={getGoogleFormUrl("en")} />;
 * }
 */
