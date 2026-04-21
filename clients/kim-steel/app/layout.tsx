import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "주식회사 김스틸 | KIM STEEL",
  description: "스틸 파이프, 형강, 철판, 환봉 전문 유통 — 1995년 설립, 화성·오산 거점",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>{children}</body>
    </html>
  );
}
