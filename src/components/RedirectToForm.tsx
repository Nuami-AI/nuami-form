"use client";

import { useEffect } from "react";
import { HtmlLang } from "@/components/HtmlLang";
import type { Locale } from "@/config/site";

export function RedirectToForm({
  href,
  locale,
}: {
  href: string;
  locale: Locale;
}) {
  useEffect(() => {
    window.location.replace(href);
  }, [href]);

  return <HtmlLang lang={locale} />;
}
