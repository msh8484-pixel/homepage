# Sitely — Claude 작업 규칙

## 이 프로젝트의 두 가지 역할

### 1. 자동화 시스템 (내가 쓰는 작업 도구)
클라이언트 홈페이지를 빠르게 제작하기 위한 나만의 자동화 파이프라인.

**흐름:**
```
URL + 회사소개서(PDF/사진/텍스트)
        ↓
Claude가 정보 분석 + 템플릿 자동 추출
        ↓
참고 사이트 자동 스크린샷 (scripts/screenshot-url.js)
        ↓
homepage-builder 에이전트 실행
(.claude/agents/homepage-builder.md)
        ↓
컴포넌트 재현 + 클라이언트 정보 삽입
        ↓
GitHub repo 생성 → Vercel 배포
```

**시작 트리거:**
"홈페이지 만들자" 또는 "홈페이지 자동화 시작" 하면
Claude가 아래 체크리스트를 출력한다:

```
[ 참고 사이트 ]
URL: 

[ 회사 소개 자료 ]
파일: (PDF/사진을 agent-input/ 에 넣거나 텍스트로 붙여넣기)

[ 회사 정보 ] ← 소개서에 없는 것만 추가
회사명: 
슬로건: 
소개글: 
이메일: 
전화번호: 
주소: 
SNS: 

[ 브랜드 ]
로고 파일명: (agent-input/ 에 넣어두기)
메인 컬러: (없으면 참고 사이트에서 추출)

[ 도메인 ]
도메인: (없으면 공란)

[ Supabase ] ← 문의폼 저장 필요한 경우만
URL: 
anon key: 
service role key: 
```

**스크린샷 스크립트:**
```bash
node scripts/screenshot-url.js <URL>         # 섹션별 자동 분할
node scripts/screenshot-url.js <URL> --full  # 전체 페이지 한 장
```
→ agent-input/{domain}/ 폴더에 저장됨

**사진 자동화 규칙 (Unsplash):**
배경 이미지가 필요한 모든 섹션은 아래 절차를 따른다:

1. 업종 키워드 추출 (예: "steel pipe", "factory", "H-beam warehouse")
2. WebSearch로 `unsplash.com/photos/{keyword}` 검색 → 사진 페이지 URL 수집
3. WebFetch로 각 페이지에서 `images.unsplash.com/photo-{숫자ID}` 형식 CDN URL 추출
4. 추출된 URL에 `?w=100&q=80` 붙여 WebFetch로 404 여부 확인 (검증)
5. 검증된 URL만 컴포넌트에 사용

⚠️ `plus.unsplash.com/premium_photo-` 는 유료 — 사용 불가

**Tailwind CSS v4 주의:**
`mx-auto`, `px-*`, `gap-*` 등 간격 클래스가 일부 컴파일 안 되는 케이스 있음.
레이아웃 중심 컨테이너(헤더, 섹션 wrapper)는 inline style 병행 사용:
```tsx
style={{ maxWidth: 1200, margin: "0 auto", padding: "0 80px" }}
```
⚠️ Unsplash 페이지의 slug ID(`XmmL7iNeFWc`)는 CDN URL과 다름 — 반드시 WebFetch로 실제 CDN URL 확인

**페이지 구조 규칙:**
단일 스크롤 페이지 금지. 반드시 라우팅으로 분리:
```
/           ← 히어로 + 섹션 진입 카드
/about      ← 회사소개
/products   ← 사업분야/제품
/quality    ← 품질관리 또는 특장점
/contact    ← 견적문의 (Supabase 연동)
```
각 섹션은 독립 컴포넌트 + 독립 페이지로 구성한다.

**납품 구조:**
- 코드: 내 GitHub (private repo, 클라이언트별)
- 배포: 클라이언트 Vercel 계정 (토큰 받아서 연결) 또는 내 Vercel (초기)
- DB: 클라이언트 Supabase 계정

---

### 2. Sitely 갤러리 (클라이언트 보여주기용 쇼케이스)
클라이언트에게 "이런 스타일로 만들 수 있어요"를 보여주는 전시용 사이트.
복잡한 기능 없이 심플하게 유지.

- **GitHub:** msh8484-pixel/homepage
- **Vercel:** https://homepage-eight-kohl.vercel.app
- **스택:** Next.js 16 + Supabase + Vercel
- **로컬:** C:\Users\Moon\homepage

**구현 현황:**
- 21개 브랜드 패키지, 203개 섹션 컴포넌트 (components/sitely-brands/)
- 갤러리: /gallery → 브랜드 카드, /gallery/brand/[brand] → 섹션 목록
- 컴포넌트 출처: monet-registry (오픈소스) — 필요하면 추가로 긁어오기

**갤러리 라우트:**
```
/gallery                        # 브랜드 패키지 카드 목록 (21종)
/gallery/brand/[brand]          # 브랜드별 전체 섹션 목록
/gallery/preview/[name]         # 개별 컴포넌트 미리보기 (iframe용)
```

---

## 공통 기술 스택
- Next.js 16 (App Router) + TypeScript + Tailwind CSS 4
- Supabase (Mindly와 같은 프로젝트 공유: `fhcezidnvsyrzvylbico`)
- Vercel 배포

## Supabase 네이밍 규칙 ⚠️ 필수
Mindly와 같은 Supabase 프로젝트를 공유하므로 **모든 Sitely 관련 리소스에 `sitely_` 접두사 필수**

## 컴포넌트 구조
```
components/
  sitely-brands/          # monet-registry에서 가져온 203개 브랜드 컴포넌트
    {brand}-{section}/
      index.tsx
  ui/
    button.tsx            # shadcn button shim

lib/
  sitely-brands-registry.ts  # 203개 dynamic import 레지스트리

scripts/
  screenshot-url.js       # URL → 섹션별 스크린샷 자동화
  create-registry-component.py

agent-input/              # 스크린샷 및 클라이언트 자료 임시 보관
```

## 브랜드 세트 (21개)
antler-co, bolta-io, cap-so, channel-io, clerk-com, codefa-st,
coderabbit-ai, cursor-com, datafa-st, greetinghr, hookable-ai,
imweb-me, lanorx-com, loops-so, relate-kr, runwayml-com, shipfa-st,
superbilling-io, trackit-so, vooster-ai-ko, whattime

## 배포
```bash
vercel --prod --force
```
> `vercel.json` 있어야 빌드 정상 작동함

## Git
- 브랜치: `master`
- 푸시: `git push origin master`

## 알려진 이슈 & 해결법
- lucide-react에 `Facebook`, `Twitter`, `Instagram`, `Linkedin`, `Youtube` 없음
  → 각각 `Globe`, `Share2`, `Link`, `ExternalLink`, `Play`로 대체됨
- monet 컴포넌트 일부가 `import`를 `const` 뒤에 배치 → parse error
  → `"use client"` 바로 뒤로 import 이동
- 외부 컴포넌트 TypeScript 타입 에러 → `// @ts-nocheck`로 해결
