export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a1228", padding: "40px 80px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "40px", flexWrap: "wrap", marginBottom: "28px" }}>

          {/* 로고 + 슬로건 */}
          <div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <span style={{ color: "#ffffff", fontWeight: 900, fontSize: "20px", letterSpacing: "0.15em" }}>KIM</span>
              <span style={{ color: "#c9a227", fontWeight: 900, fontSize: "20px", letterSpacing: "0.15em", marginLeft: "4px" }}>STEEL</span>
            </div>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: 280 }}>
              1995년 설립 이래 30년간 철강 자재 유통의<br />신뢰를 지켜온 주식회사 김스틸
            </p>
            <p style={{ fontSize: "13px", color: "#c9a227", fontStyle: "italic", marginTop: "8px" }}>
              "30년 신뢰, 최고의 철강 파트너"
            </p>
          </div>

          {/* 연락처 */}
          <div>
            <h4 style={{ color: "#ffffff", fontWeight: 700, fontSize: "13px", marginBottom: "12px", letterSpacing: "0.05em" }}>연락처</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)" }}>화성: 031-366-5661</p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)" }}>오산: 031-667-7211</p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)" }}>kimsteel88@naver.com</p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>경기도 화성시 팔탄면 버들로 1485</p>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "20px", textAlign: "center" }}>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
            © 2024 주식회사 김스틸. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
