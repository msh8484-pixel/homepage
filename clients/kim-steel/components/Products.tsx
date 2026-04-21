"use client";

import { Cylinder, Layers, Square, Circle, LayoutGrid, Minus } from "lucide-react";

const PRODUCTS = [
  { title: "스틸 파이프", en: "Steel Pipe",   desc: "원형·각형 배관·구조용",              icon: Cylinder   },
  { title: "H형강",      en: "H-Beam",        desc: "건축·교량 구조재 고강도 형강",        icon: Layers     },
  { title: "철판",       en: "Steel Plate",   desc: "열연·냉연 강판, 두께별 다양한 규격",  icon: Square     },
  { title: "환봉",       en: "Round Bar",     desc: "기계·가공용 원형 강봉",               icon: Circle     },
  { title: "각관",       en: "Square Tube",   desc: "가구·구조 프레임용 직사각형 강관",    icon: LayoutGrid },
  { title: "평철",       en: "Flat Bar",      desc: "강도 높은 연결재, 브라켓 지지용",     icon: Minus      },
];

export default function Products() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "48px 80px 56px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="grid-3-col"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}
        >
          {PRODUCTS.map((product, idx) => {
            const Icon = product.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: "#f8f9fa",
                  border: "1px solid #e8e8e8",
                  padding: "32px 24px",
                  textAlign: "center",
                  transition: "all 0.25s ease",
                  cursor: "default",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "#c9a227";
                  e.currentTarget.style.boxShadow = "0 2px 16px rgba(201,162,39,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "#e8e8e8";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Icon size={36} style={{ color: "#c9a227", margin: "0 auto 12px", display: "block" }} />
                <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", color: "#c9a227", textTransform: "uppercase", marginBottom: "6px" }}>
                  {product.en}
                </p>
                <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#0f2347", marginBottom: "8px" }}>
                  {product.title}
                </h3>
                <p style={{ fontSize: "13px", color: "#888", lineHeight: 1.6 }}>
                  {product.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
