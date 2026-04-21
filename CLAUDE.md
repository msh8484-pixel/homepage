# Sitely — Claude 작업 규칙

## 프로젝트 개요
- **서비스명**: Sitely
- **목적**: 중소기업 AI 홈페이지 제작 플랫폼 (B2B)
  - 클라이언트가 갤러리에서 스타일 선택 → 내가 받아서 커스터마이징 후 납품
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

## 컴포넌트 구조
```
components/
  sitely-brands/          # monet-registry에서 가져온 203개 브랜드 컴포넌트
    {brand}-{section}/
      index.tsx
  sitely-hero/            # 직접 제작 또는 AI 생성 히어로 컴포넌트 (11개)
  ui/
    button.tsx            # shadcn button shim

lib/
  sitely-brands-registry.ts  # 203개 dynamic import 레지스트리
```

### 브랜드 세트 (21개, 각 7~11개 섹션)
antler-co, bolta-io, cap-so, channel-io, clerk-com, codefa-st,
coderabbit-ai, cursor-com, datafa-st, greetinghr, hookable-ai,
imweb-me, lanorx-com, loops-so, relate-kr, runwayml-com, shipfa-st,
superbilling-io, trackit-so, vooster-ai-ko, whattime

한국 서비스: channel-io, imweb-me, relate-kr, vooster-ai-ko

## 갤러리 라우트
```
/gallery                        # 브랜드 패키지 카드 목록 (21종)
/gallery/brand/[brand]          # 브랜드별 전체 섹션 목록 + 미리보기
/gallery/preview/[name]         # 개별 컴포넌트 미리보기 (iframe용, client component)
/gallery/hero/[id]              # 구형 히어로 단독 미리보기 (sitely-hero 용)
```

## AI 컴포넌트 생성
- 에이전트: `.claude/agents/img-to-component.md`
- 스크립트: `scripts/create-registry-component.py`
- 입력 이미지: `agent-input/` 폴더에 넣고 에이전트 실행
- 출력: `components/sitely-{category}/{name}/index.tsx`

## 개발 단계
- **Phase 1** (완료): 갤러리 쇼케이스 — 21개 브랜드 패키지 선택 UI
- **Phase 2** (다음): 주문/문의 플로우 — 클라이언트가 스타일 선택 후 제출
  - Supabase `sitely_orders` 테이블에 저장
  - 관리자(나)에게 알림
- **Phase 3**: 에디터 — 색상/이미지/텍스트 커스터마이징
- **Phase 4**: PIN 기반 접근 잠금 (클라이언트별 전용 페이지)

## 배포
```bash
vercel --prod --force   # 강제 새 빌드 (캐시 문제 시)
```
> `vercel.json` 있어야 빌드 정상 작동함 (없으면 빈 빌드됨)

## Git
- 브랜치: `master`
- 푸시: `git push origin master`

## 알려진 이슈 & 해결법
- lucide-react에 `Facebook`, `Twitter`, `Instagram`, `Linkedin`, `Youtube` 없음
  → 각각 `Globe`, `Share2`, `Link`, `ExternalLink`, `Play`로 대체됨
- monet 컴포넌트 일부가 `import`를 `const` 뒤에 배치 → parse error
  → `"use client"` 바로 뒤로 import 이동
- 외부 컴포넌트 TypeScript 타입 에러 → `// @ts-nocheck`로 해결
