"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    title: "강철 같은 신뢰,\n정직한 공급",
    sub: "1995년 설립 이래 30년간 철강 자재 유통의 기준을 세워왔습니다.\n고객의 현장에 가장 빠르고 정확하게 납품합니다.",
  },
  {
    title: "스틸 파이프 & 형강\n전문 유통기업",
    sub: "Steel Pipe · Round Bar · H-Beam · I-Beam · C-Channel · Angle · Flat-Bar\n다양한 규격의 철강 자재를 신속하게 공급합니다.",
  },
  {
    title: "화성 · 오산 거점\n안정적인 공급망",
    sub: "경기도 화성·오산 두 거점을 통해 수도권 전역에\n안정적이고 신속한 물류 서비스를 제공합니다.",
  },
];

const VIDEOS = [
  "https://videos.pexels.com/video-files/6579400/6579400-hd_1920_1080_25fps.mp4",   // 파이프 절단 기계 (픽스)
  "https://videos.pexels.com/video-files/33658263/14301164_1920_1080_30fps.mp4",    // 파이프 절단 산업현장
];

// 각 영상 노출 시간 (ms) — 전환 시작 기준
const VIDEO_DURATIONS = [24000, 15000];
const CROSSFADE_MS = 2500;

const FADE_DURATION = 800;
const SLIDE_INTERVAL = 9000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [front, setFront] = useState(0); // 0 = 첫 번째 영상이 앞, 1 = 두 번째 영상이 앞

  const go = useCallback((next: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent((next + SLIDES.length) % SLIDES.length);
      setVisible(true);
    }, FADE_DURATION);
  }, []);

  useEffect(() => {
    const t = setInterval(() => go(current + 1), SLIDE_INTERVAL);
    return () => clearInterval(t);
  }, [current, go]);

  // 영상 crossfade 타이머
  useEffect(() => {
    const t = setTimeout(() => {
      setFront((f) => 1 - f);
    }, VIDEO_DURATIONS[front]);
    return () => clearTimeout(t);
  }, [front]);

  const videoStyle = (isFront: boolean): React.CSSProperties => ({
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
    opacity: isFront ? 1 : 0,
    transition: `opacity ${CROSSFADE_MS}ms ease`,
  });

  return (
    <section style={{ position: "relative", width: "100%", height: "100vh", minHeight: "640px", overflow: "hidden" }}>

      {/* 배경 영상 A */}
      <video autoPlay muted playsInline loop style={videoStyle(front === 0)}>
        <source src={VIDEOS[0]} type="video/mp4" />
      </video>
      {/* 배경 영상 B */}
      <video autoPlay muted playsInline loop style={videoStyle(front === 1)}>
        <source src={VIDEOS[1]} type="video/mp4" />
      </video>

      {/* 오버레이 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.72) 100%)",
          zIndex: 1,
        }}
      />

      {/* 텍스트 영역 */}
      <div
        className="hero-text"
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 120px",
          maxWidth: "860px",
        }}
      >
        <div
          style={{
            opacity: visible ? 1 : 0,
            transition: `opacity ${FADE_DURATION}ms ease`,
          }}
        >
          <p
            style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.25em",
              color: "#c9a227",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            KIM STEEL — 주식회사 김스틸
          </p>
          <h1
            style={{
              fontSize: "clamp(42px, 5.5vw, 76px)",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "28px",
              whiteSpace: "pre-line",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              textShadow: "0 2px 24px rgba(0,0,0,0.5)",
            }}
          >
            {SLIDES[current].title}
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.9,
              whiteSpace: "pre-line",
              maxWidth: "520px",
            }}
          >
            {SLIDES[current].sub}
          </p>
        </div>
      </div>

      {/* 화살표 — 우측 하단 */}
      <button
        className="hero-arrow-prev"
        onClick={() => go(current - 1)}
        style={{
          position: "absolute",
          right: "72px",
          bottom: "112px",
          zIndex: 20,
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.25)",
          color: "white",
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "background 0.2s",
        }}
        onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(201,162,39,0.5)"; }}
        onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => go(current + 1)}
        style={{
          position: "absolute",
          right: "20px",
          bottom: "112px",
          zIndex: 20,
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.25)",
          color: "white",
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "background 0.2s",
        }}
        onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(201,162,39,0.5)"; }}
        onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}
      >
        <ChevronRight size={20} />
      </button>

      {/* 하단 도트 — 왼쪽 */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "120px",
          zIndex: 20,
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            style={{
              width: i === current ? "36px" : "8px",
              height: "3px",
              backgroundColor: i === current ? "#c9a227" : "rgba(255,255,255,0.35)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.4s ease",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* SCROLL 인디케이터 */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          right: "40px",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.45)",
            writingMode: "vertical-rl",
            textTransform: "uppercase",
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: "1px",
            height: "48px",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.45), transparent)",
          }}
        />
      </div>
    </section>
  );
}
