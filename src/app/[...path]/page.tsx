import { RedirectToForm } from "@/components/RedirectToForm";
import { getGoogleFormUrl } from "@/config/site";

export default function CatchAllPage() {
  return <RedirectToForm href={getGoogleFormUrl()} />;
}
