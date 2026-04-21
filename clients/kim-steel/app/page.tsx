"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Building2, Package, ShieldCheck, MessageSquare } from "lucide-react";

const NAV_CARDS = [
  {
    href: "/about",
    en: "ABOUT",
    ko: "회사소개",
    desc: "1995년 설립, 30년 업력의 철강 전문기업",
    icon: Building2,
  },
  {
    href: "/products",
    en: "PRODUCTS",
    ko: "사업분야",
    desc: "스틸 파이프·형강·철판·환봉·각관·평철",
    icon: Package,
  },
  {
    href: "/quality",
    en: "QUALITY",
    ko: "품질관리",
    desc: "정품 인증·품질 보증 납품 체계",
    icon: ShieldCheck,
  },
  {
    href: "/contact",
    en: "CONTACT",
    ko: "견적문의",
    desc: "화성·오산 두 거점 — 신속 납품",
    icon: MessageSquare,
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      {/* 페이지 링크 카드 */}
      <section style={{ backgroundColor: "#0a1228", padding: "80px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.25em",
                color: "#c9a227",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              KIM STEEL — 주식회사 김스틸
            </p>
            <h2
              style={{
                fontSize: "42px",
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1.2,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              30년간 현장을 지켜온
              <br />
              대한민국 철강 파트너
            </h2>
          </div>

          <div
            className="grid-4-col"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              borderTop: "1px solid rgba(201,162,39,0.25)",
              borderLeft: "1px solid rgba(201,162,39,0.25)",
            }}
          >
            {NAV_CARDS.map(({ href, en, ko, desc, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "block",
                  padding: "52px 32px",
                  borderRight: "1px solid rgba(201,162,39,0.25)",
                  borderBottom: "1px solid rgba(201,162,39,0.25)",
                  textDecoration: "none",
                  transition: "background-color 0.25s ease",
                  backgroundColor: "transparent",
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#0f2347";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                }}
              >
                <Icon
                  size={40}
                  style={{ color: "rgba(201,162,39,0.7)", marginBottom: "20px", display: "block" }}
                />
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "#c9a227",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  {en}
                </p>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 800,
                    color: "#ffffff",
                    marginBottom: "12px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {ko}
                </h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                  {desc}
                </p>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "56px" }}>
            <Link
              href="/contact"
              style={{
                backgroundColor: "#c9a227",
                color: "#0a1228",
                padding: "16px 52px",
                fontWeight: 800,
                fontSize: "14px",
                letterSpacing: "0.1em",
                textDecoration: "none",
                textTransform: "uppercase",
                display: "inline-block",
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#d9b230";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#c9a227";
              }}
            >
              견적 문의하기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
