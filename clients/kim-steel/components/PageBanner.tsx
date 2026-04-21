interface PageBannerProps {
  en: string;
  ko: string;
}

export default function PageBanner({ en, ko }: PageBannerProps) {
  return (
    <div
      className="page-banner"
      style={{
        backgroundColor: "#0a1228",
        borderBottom: "1px solid rgba(201,162,39,0.2)",
        padding: "76px 80px 0",
      }}
    >
      <div style={{ maxWidth: 1200, width: "100%" }}>
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.3em",
            color: "#c9a227",
            textTransform: "uppercase",
            marginBottom: "6px",
          }}
        >
          {en}
        </p>
        <h1
          style={{
            fontSize: "36px",
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.1,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          {ko}
        </h1>
      </div>
    </div>
  );
}
