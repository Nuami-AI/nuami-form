# NUAMI Form

`form.nuami.kr`에 접속하면 Google Form으로 바로 이동합니다.

이 저장소는 `nuami.kr`, `app.nuami.kr`, `press.nuami.kr`과 분리된 독립 프로젝트입니다. 페이지 UI는 없고 **리다이렉트만** 합니다.

## 로컬 실행

요구 사항: Node.js 20 이상, npm

```bash
npm install
cp .env.example .env.local
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 열면 Google Form으로 리다이렉트됩니다.

| 명령 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드 결과 실행 |
| `npm run lint` | ESLint |

## 환경변수

| 이름 | 필수 | 설명 |
| --- | --- | --- |
| `GOOGLE_FORM_URL` | 아니오 | 리다이렉트 대상 Google Form URL |

값이 없으면 `src/config/site.ts`의 `DEFAULT_GOOGLE_FORM_URL`을 사용합니다.

## Vercel 배포

1. [Vercel](https://vercel.com)에서 이 저장소를 Import합니다. Framework Preset은 **Next.js**입니다.
2. Root Directory는 저장소 루트를 그대로 사용합니다.
3. 환경변수 `GOOGLE_FORM_URL`을 필요하면 Production / Preview에 등록합니다.
4. Deploy 후 `*.vercel.app` 미리보기 URL이 Google Form으로 가는지 확인합니다.

## form.nuami.kr 연결

`nuami.kr`과 별도 프로젝트이므로 Vercel에서 **이 프로젝트에만** 서브도메인을 붙입니다.

1. Vercel 프로젝트 → **Settings → Domains** → `form.nuami.kr` 추가
2. 가비아 DNS에서 `form` 레코드를 추가합니다.
   - 권장: `CNAME` `form` → `cname.vercel-dns.com`
   - Vercel이 A/AAAA를 안내하면 그 값을 따릅니다.
3. SSL 인증서는 Vercel이 발급합니다. DNS 전파 후 `https://form.nuami.kr`이 Google Form으로 이동하는지 확인합니다.

`nuami.kr`, `app.nuami.kr`, `press.nuami.kr`의 기존 DNS·Vercel 프로젝트는 변경하지 않습니다.
