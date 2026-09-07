"use client";

import { useEffect } from "react";
import { HtmlLang } from "@/components/HtmlLang";

export function LocaleGate() {
  useEffect(() => {
    const language = navigator.language.toLowerCase();
    const locale = language.startsWith("ko") ? "ko" : "en";
    window.location.replace(`/${locale}`);
  }, []);

  return (
    <>
      <HtmlLang lang="ko" />
      <main>
        <p>뉴아미 사용성 테스트 신청 페이지로 이동하고 있습니다.</p>
        <p>Redirecting to the NUAMI usability test application form.</p>
        <p>
          <a href="/ko">한국어</a>
          {" · "}
          <a href="/en">English</a>
        </p>
      </main>
    </>
  );
}
