"use client";

import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const BRANCHES = [
  {
    name: "화성 본점",
    address: "경기도 화성시 팔탄면 버들로 1485",
    phone: "031-366-5661",
    hours: "평일 09:00 ~ 18:00",
    mapUrl: "https://map.naver.com/v5/search/경기도 화성시 팔탄면 버들로 1485",
    primary: true,
  },
  {
    name: "오산 지점",
    address: "경기도 오산시",
    phone: "031-667-7211",
    hours: "평일 09:00 ~ 18:00",
    mapUrl: "https://map.naver.com/v5/search/경기도 오산시",
    primary: false,
  },
];

export default function Location() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "48px 80px 56px", borderTop: "1px solid #f0f0f0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
            Location
          </p>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 700,
              color: "#0f2347",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            오시는 길
          </h2>
          <div style={{ width: "60px", height: "4px", backgroundColor: "#c9a227", margin: "0 auto" }} />
        </div>

        {/* Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "32px", marginBottom: "48px" }}>
          {BRANCHES.map((branch) => (
            <div
              key={branch.name}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: branch.primary
                  ? "0 4px 20px rgba(15, 35, 71, 0.12)"
                  : "0 2px 8px rgba(0,0,0,0.07)",
                border: branch.primary ? "2px solid #c9a227" : "1px solid #e8e8e8",
              }}
            >
              {/* Card Header */}
              <div
                style={{
                  backgroundColor: branch.primary ? "#0f2347" : "#1a3a6b",
                  padding: "20px 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <MapPin size={20} color="#c9a227" />
                  <span
                    style={{
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "18px",
                    }}
                  >
                    {branch.name}
                  </span>
                </div>
                {branch.primary && (
                  <span
                    style={{
                      backgroundColor: "#c9a227",
                      color: "#ffffff",
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "3px 10px",
                      borderRadius: "12px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    본점
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div style={{ padding: "28px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <MapPin size={16} color="#c9a227" style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p style={{ fontSize: "12px", color: "#999", fontWeight: 600, marginBottom: "4px" }}>주소</p>
                      <p style={{ fontSize: "14px", color: "#333", lineHeight: 1.5 }}>{branch.address}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <Phone size={16} color="#c9a227" style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p style={{ fontSize: "12px", color: "#999", fontWeight: 600, marginBottom: "4px" }}>전화번호</p>
                      <a
                        href={`tel:${branch.phone.replace(/-/g, "")}`}
                        style={{ fontSize: "14px", color: "#0f2347", fontWeight: 600, textDecoration: "none" }}
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <Clock size={16} color="#c9a227" style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p style={{ fontSize: "12px", color: "#999", fontWeight: 600, marginBottom: "4px" }}>운영시간</p>
                      <p style={{ fontSize: "14px", color: "#333" }}>{branch.hours}</p>
                    </div>
                  </div>
                </div>

                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    marginTop: "24px",
                    padding: "12px",
                    backgroundColor: "#f8f9fa",
                    border: "1px solid #e0e0e0",
                    borderRadius: "6px",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#0f2347",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#0f2347";
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.borderColor = "#0f2347";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#f8f9fa";
                    e.currentTarget.style.color = "#0f2347";
                    e.currentTarget.style.borderColor = "#e0e0e0";
                  }}
                >
                  <Navigation size={14} />
                  네이버 지도로 보기
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Notice */}
        <div
          style={{
            backgroundColor: "#0f2347",
            borderRadius: "8px",
            padding: "28px 36px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              backgroundColor: "#c9a227",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Phone size={20} color="#ffffff" />
          </div>
          <div>
            <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "16px", marginBottom: "6px" }}>
              빠른 상담이 필요하신가요?
            </p>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: 1.6 }}>
              전화 문의 시 즉시 상담 가능합니다. 화성본점{" "}
              <a href="tel:0313665661" style={{ color: "#c9a227", fontWeight: 700, textDecoration: "none" }}>
                031-366-5661
              </a>
              {" "}/ 오산점{" "}
              <a href="tel:0316677211" style={{ color: "#c9a227", fontWeight: 700, textDecoration: "none" }}>
                031-667-7211
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
