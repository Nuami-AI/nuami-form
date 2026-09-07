"use client";

import { useEffect } from "react";
import { HtmlLang } from "@/components/HtmlLang";
import { localeContent, type Locale } from "@/config/site";

export function RedirectToForm({
  href,
  locale,
}: {
  href: string;
  locale: Locale;
}) {
  const copy = localeContent[locale];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.replace(href);
    }, 500);

    return () => window.clearTimeout(timer);
  }, [href]);

  return (
    <>
      <HtmlLang lang={locale} />
      <main lang={locale}>
        <p>{copy.redirecting}</p>
        <p>
          {copy.fallback} <a href={href}>{copy.openForm}</a>
        </p>
      </main>
    </>
  );
}
