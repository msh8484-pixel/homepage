"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section style={{ backgroundColor: "#ffffff", paddingTop: "48px", paddingBottom: "56px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 80px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center" style={{ gap: "60px" }}>
          {/* Left: Image with overlay */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative", width: "100%", paddingBottom: "100%" }}>
              <Image
                src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=800&q=80"
                alt="Steel factory warehouse"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            {/* Address overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "rgba(15, 35, 71, 0.9)",
                color: "#ffffff",
                padding: "24px",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "14px", fontWeight: 500, letterSpacing: "0.05em", margin: 0 }}>
                화성본점 — 경기도 화성시 팔탄면 버들로 1485
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            {/* Label */}
            <p
              style={{
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "#c9a227",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              About Us
            </p>

            {/* Title */}
            <h2
              style={{
                fontSize: "40px",
                fontWeight: 700,
                color: "#0f2347",
                marginBottom: "16px",
                lineHeight: 1.2,
                
              }}
            >
              주식회사 김스틸
            </h2>

            {/* Underline */}
            <div
              style={{
                width: "80px",
                height: "4px",
                backgroundColor: "#c9a227",
                marginBottom: "32px",
              }}
            />

            {/* Description paragraphs */}
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.8,
                color: "#555555",
                marginBottom: "20px",
                
              }}
            >
              1995년 설립 이래 30년간 신뢰와 품질로 한국 철강산업을 선도해온 주식회사 김스틸입니다.
              스틸 파이프, 형강, 철판, 환봉, 각관, 평철 등 다양한 철강 자재를 취급하며, 국내 최고의 건설사, 제조사,
              가공업체들의 든든한 파트너로 자리잡았습니다.
            </p>

            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.8,
                color: "#555555",
                marginBottom: "40px",
                
              }}
            >
              화성본점과 오산지점에서 최고의 서비스와 신속한 배송으로 고객 만족을 실현하고 있습니다.
              최신 설비와 숙련된 인력을 갖춘 우리는 언제나 고객의 성공을 함께합니다.
            </p>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px", marginBottom: "40px" }}>
              <div>
                <p
                  style={{
                    fontSize: "36px",
                    fontWeight: 700,
                    color: "#c9a227",
                    marginBottom: "8px",
                  }}
                >
                  1995
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#777777",
                    
                  }}
                >
                  설립연도
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "36px",
                    fontWeight: 700,
                    color: "#c9a227",
                    marginBottom: "8px",
                  }}
                >
                  30+
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#777777",
                    
                  }}
                >
                  년 업력
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "36px",
                    fontWeight: 700,
                    color: "#c9a227",
                    marginBottom: "8px",
                  }}
                >
                  2
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#777777",
                    
                  }}
                >
                  개 거점
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                backgroundColor: "#c9a227",
                color: "#ffffff",
                padding: "16px 40px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                borderRadius: "4px",
                transition: "all 0.3s ease",
                border: "none",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#a97c1f";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#c9a227";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              견적 문의하기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
