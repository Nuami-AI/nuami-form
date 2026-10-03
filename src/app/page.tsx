import { RedirectToForm } from "@/components/RedirectToForm";
import { getGoogleFormUrl } from "@/config/site";

export default function HomePage() {
  return <RedirectToForm locale="ko" href={getGoogleFormUrl()} />;
}

/*
 * Language gate (browser language → /ko or /en) — restore if needed later.
 *
 * import { LocaleGate } from "@/components/LocaleGate";
 *
 * export default function HomePage() {
 *   return <LocaleGate />;
 * }
 */
