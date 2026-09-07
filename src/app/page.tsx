import { RedirectToForm } from "@/components/RedirectToForm";
import { getGoogleFormUrl } from "@/config/site";

export default function HomePage() {
  return <RedirectToForm href={getGoogleFormUrl()} />;
}
