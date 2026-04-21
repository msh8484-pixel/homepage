import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sitely — 중소기업 AI 홈페이지 플랫폼",
  description: "AI로 만드는 기업 홈페이지. 메뉴 선택부터 디자인, 배포까지 자동으로.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={geist.className}>
      <body className="bg-white text-[#0a0a0a] antialiased">{children}</body>
    </html>
  );
}
