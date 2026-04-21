# Sitely — Claude 작업 규칙

## 프로젝트 개요
- **서비스명**: Sitely
- **목적**: 중소기업 AI 홈페이지 제작 플랫폼 (B2B)
- **로컬 경로**: `C:\Users\Moon\homepage`
- **GitHub**: `msh8484-pixel/homepage`
- **Vercel**: `https://homepage-eight-kohl.vercel.app` (team: msh8484-pixels-projects)

## 기술 스택
- Next.js 16 (App Router) + TypeScript + Tailwind CSS 4
- Supabase (Mindly와 같은 프로젝트 공유: `fhcezidnvsyrzvylbico`)
- Vercel 배포

## Supabase 네이밍 규칙 ⚠️ 필수
Mindly와 같은 Supabase 프로젝트를 공유하므로 **모든 Sitely 관련 리소스에 `sitely_` 접두사 필수**

- 테이블: `sitely_orders`, `sitely_inquiries`, `sitely_projects` ...
- 파일: `lib/sitely-client.ts`, `lib/sitely-queries.ts` ...
- 타입: `SitelyOrder`, `SitelyInquiry` ...

## 개발 단계
- **Phase 1** (현재): 쇼케이스 사이트 (로그인 없음)
- **Phase 2**: 에디터 — 색상/이미지/텍스트 커스터마이징
- **Phase 3**: PIN 기반 접근 잠금

## 배포
```bash
vercel --prod --force   # 강제 새 빌드 (캐시 문제 시)
```
> `vercel.json` 있어야 빌드 정상 작동함 (없으면 빈 빌드됨)

## Git
- 브랜치: `master`
- 푸시: `git push origin master`
