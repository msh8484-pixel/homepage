"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";

const POINTS = [
  "1995년 설립, 30년 업력의 철강 전문기업",
  "화성·오산 두 거점을 통한 빠른 납품 체계",
  "다양한 규격 재고 상시 보유",
  "정품 인증 및 품질 보증 납품",
  "소량 주문부터 대량 납품까지 유연 대응",
];

const STATS = [
  { number: "1995", label: "설립연도" },
  { number: "30+",  label: "년 업력"  },
  { number: "2",    label: "개 거점"  },
];

export default function Quality() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "48px 80px 56px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="grid-why grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "0", alignItems: "stretch" }}
        >
          {/* 왼쪽: 텍스트 */}
          <div style={{ padding: "0 48px 0 0" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", color: "#c9a227", textTransform: "uppercase", marginBottom: "8px" }}>
              Why Kim Steel
            </p>
            <h2 style={{ fontSize: "32px", fontWeight: 900, color: "#0f2347", lineHeight: 1.2, marginBottom: "16px" }}>
              왜 김스틸인가요?
            </h2>
            <div style={{ width: "40px", height: "3px", backgroundColor: "#c9a227", marginBottom: "20px" }} />
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "24px", fontSize: "14px" }}>
              30년간 현장에서 쌓은 신뢰와 노하우로 고객의 공사 일정과 예산에 맞는 최적의 철강 자재를 공급합니다.
            </p>
            <ul style={{ listStyle: "none", margin: "0 0 28px", padding: 0 }}>
              {POINTS.map((p) => (
                <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px" }}>
                  <CheckCircle size={18} style={{ color: "#c9a227", flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ color: "#444", fontSize: "14px", lineHeight: 1.6 }}>{p}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                border: "2px solid #c9a227",
                color: "#c9a227",
                padding: "10px 28px",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textDecoration: "none",
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#c9a227";
                (e.currentTarget as HTMLElement).style.color = "#ffffff";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLElement).style.color = "#c9a227";
              }}
            >
              견적 문의
            </Link>
          </div>

          {/* 오른쪽: 스탯 */}
          <div
            className="why-right"
            style={{ position: "relative", overflow: "hidden", minHeight: "320px" }}
          >
            <div style={{ position: "absolute", inset: 0, backgroundColor: "#0a1228" }} />
            <div style={{ position: "absolute", right: "-40px", top: 0, bottom: 0, width: "78%", backgroundColor: "#c9a227", clipPath: "polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)" }} />
            <div style={{ position: "relative", zIndex: 10, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px 40px 40px 80px", gap: "32px" }}>
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontSize: "60px", fontWeight: 900, color: "#fff", lineHeight: 1, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {stat.number}
                  </div>
                  <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)", marginTop: "4px" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
