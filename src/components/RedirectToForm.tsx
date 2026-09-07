"use client";

import { useEffect } from "react";

export function RedirectToForm({ href }: { href: string }) {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.replace(href);
    }, 500);

    return () => window.clearTimeout(timer);
  }, [href]);

  return (
    <p>
      <a href={href}>Google Form으로 이동</a>
    </p>
  );
}
