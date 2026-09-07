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
    <main>
      <p>뉴아미 사용성 테스트 신청 페이지로 이동하고 있습니다.</p>
      <p>Redirecting to the NUAMI usability test application form.</p>
      <p>
        자동으로 이동하지 않는 경우 <a href={href}>신청서 열기</a>
      </p>
      <p>
        If you are not redirected automatically,{" "}
        <a href={href}>open the application form.</a>
      </p>
    </main>
  );
}
