// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    bg: "#FFFFFF",
    text: "#1F1F1F",
    textSec: "#6B7280",
    card: "#F5F5F5",
    cardHover: "#EBEBEB",
    border: "#E5E5E5",
    editorBg: "#FFFFFF",
    chromeBg: "#FAFAFA",
    ansiGreen: "#22C55E",
    ansiRed: "#EF4444",
  },
  dark: {
    bg: "#0A0A0A",
    text: "#E4E4E4",
    textSec: "#9CA3AF",
    card: "#1A1A1A",
    cardHover: "#262626",
    border: "#2A2A2A",
    editorBg: "#1E1E1E",
    chromeBg: "#171717",
    ansiGreen: "#4ADE80",
    ansiRed: "#F87171",
  },
} as const;

const IMAGES = {
  hero: {
    path: "https://cursor.com/marketing-static/_next/image?url=https%3A%2F%2Fptht05hbb1ssoooe.public.blob.vercel-storage.com%2Fassets%2Fmisc%2Fasset-cc24ca462279ca23250c.jpg&w=3840&q=70",
    alt: "Cursor IDE background",
  },
} as const;

const LOGO_VIDEOS = {
  dark: {
    mp4: "https://cursor.com/marketing-static/logo/logo-dark-theme.mp4",
    webm: "https://cursor.com/marketing-static/logo/logo-dark-theme.webm",
  },
  light: {
    mp4: "https://cursor.com/marketing-static/logo/logo-light-theme.mp4",
    webm: "https://cursor.com/marketing-static/logo/logo-light-theme.webm",
  },
} as const;

// ============================================================================

import { useState, useRef } from "react";
import { motion } from "motion/react";
import { ChevronDown, Menu, X, Download } from "lucide-react";

interface CursorComHero0Props {
  mode?: "light" | "dark";
}

const CursorLogo = ({ color = "currentColor" }: { color?: string }) => (
  <svg
    fill="none"
    className="w-[95px] lg:w-[96px]"
    viewBox="0 0 2193 545"
    xmlns="http://www.w3.org/2000/svg"
    overflow="visible"
  >
    <g fill={color}>
      <path d="m466.383 137.073-206.469-119.2034c-6.63-3.8287-14.811-3.8287-21.441 0l-206.4586 119.2034c-5.5734 3.218-9.0144 9.169-9.0144 15.615v240.375c0 6.436 3.441 12.397 9.0144 15.615l206.4686 119.203c6.63 3.829 14.811 3.829 21.441 0l206.468-119.203c5.574-3.218 9.015-9.17 9.015-15.615v-240.375c0-6.436-3.441-12.397-9.015-15.615zm-12.969 25.25-199.316 345.223c-1.347 2.326-4.904 1.376-4.904-1.319v-226.048c0-4.517-2.414-8.695-6.33-10.963l-195.7577-113.019c-2.3263-1.347-1.3764-4.905 1.3182-4.905h398.6305c5.661 0 9.199 6.136 6.368 11.041h-.009z" />
      <path d="m723.253 148.84h87.856v48.397h-84.881c-45.789 0-81.527 26.432-81.527 82.273s35.738 82.273 81.527 82.273h84.881v48.397h-91.578c-76.691 0-131.039-45.043-131.039-130.66 0-85.618 58.07-130.661 134.761-130.661z" />
      <path d="m855.781 148.84h54.348v159.7c0 39.828 18.242 58.448 61.056 58.448 42.815 0 61.055-18.61 61.055-58.448v-159.7h54.35v170.866c0 58.071-36.85 94.933-115.405 94.933-78.551 0-115.404-37.231-115.404-95.301z" />
      <path d="m1370.62 222.913c0 29.04-16.75 51.372-39.09 61.056v.746c23.45 3.354 35.37 20.103 35.73 42.814l1.12 82.641h-54.35l-1.11-73.705c-.37-16.381-10.06-26.432-29.41-26.432h-90.47v100.137h-54.34v-261.33h150.02c49.15 0 81.9 24.94 81.9 74.083zm-54.73 7.454c0-22.333-11.91-34.623-34.24-34.623h-88.61v69.236h89.34c20.47 0 33.51-12.281 33.51-34.623z" />
      <path d="m1576.09 333.85c0-18.61-11.91-26.432-29.77-27.915l-60.31-5.583c-52.12-4.837-79.3-25.318-79.3-74.83 0-49.511 33.51-76.69 81.53-76.69h133.27v46.904h-129.55c-18.61 0-30.52 9.683-30.52 28.294 0 18.61 12.28 27.547 30.9 29.04l61.42 5.214c46.54 4.091 77.06 25.318 77.06 75.198s-32.38 76.69-78.17 76.69h-139.23v-46.904h134.01c17.5 0 28.66-11.912 28.66-29.408z" />
      <path d="m1789.79 144.373c81.89 0 133.65 52.487 133.65 134.761 0 82.273-53.98 135.506-135.88 135.506s-133.65-53.233-133.65-135.506c0-82.274 53.98-134.761 135.88-134.761zm77.43 135.129c0-55.095-32.02-87.479-78.56-87.479-46.53 0-78.55 32.384-78.55 87.479 0 55.094 32.02 87.478 78.55 87.478 46.54 0 78.56-32.384 78.56-87.478z" />
      <path d="m2192.95 222.913c0 29.04-16.75 51.372-39.1 61.056v.746c23.46 3.354 35.37 20.103 35.74 42.814l1.12 82.641h-54.35l-1.12-73.705c-.36-16.381-10.05-26.432-29.4-26.432h-90.47v100.137h-54.35v-261.33h150.03c49.14 0 81.9 24.94 81.9 74.083zm-54.73 7.454c0-22.333-11.91-34.623-34.25-34.623h-88.6v69.236h89.34c20.47 0 33.51-12.281 33.51-34.623z" />
    </g>
  </svg>
);

export default function CursorComHero0({ mode = "dark" }: CursorComHero0Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const logoVideos = LOGO_VIDEOS[mode];

  const handleLogoHover = () => {
    setIsLogoHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <section style={{ backgroundColor: colors.bg, color: colors.text }}>
      {/* Header */}
      <header
        className="fixed left-0 top-0 z-50 w-full px-4 md:px-8"
        style={{ backgroundColor: colors.bg }}
      >
        <div className="container relative grid h-16 grid-cols-[1fr_auto_auto] items-center lg:grid-cols-[auto_1fr_auto]">
          {/* Logo */}
          <div className="col-start-1 col-end-2 row-start-1 row-end-2">
            <a
              href="/"
              className="relative inline-flex"
              aria-label="Homepage"
              onMouseEnter={handleLogoHover}
              onMouseLeave={() => setIsLogoHovered(false)}
            >
              <div className="relative top-[0.2rem] left-[-2px]">
                <div className="pointer-events-none absolute left-0 top-0 h-full">
                  <video
                    ref={videoRef}
                    className="h-full w-auto transition-opacity duration-500"
                    playsInline
                    muted
                    preload="auto"
                    style={{ opacity: isLogoHovered ? 1 : 0 }}
                  >
                    <source type="video/webm" src={logoVideos.webm} />
                    <source type="video/mp4" src={logoVideos.mp4} />
                  </video>
                </div>
                <CursorLogo color={colors.text} />
              </div>
              <span className="sr-only">Cursor</span>
            </a>
          </div>

          {/* Right Side Buttons */}
          <div className="col-start-2 col-end-3 row-start-1 row-end-2 flex items-center gap-3 justify-self-end lg:col-start-3">
            <a
              href="https://cursor.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-70 md:block"
              style={{ color: colors.textSec }}
            >
              Sign in
            </a>
            <a
              href="/download"
              className="hidden rounded-md px-4 py-1.5 text-sm font-medium sm:block"
              style={{
                backgroundColor: isDark ? colors.text : colors.bg,
                color: isDark ? colors.bg : colors.text,
                border: isDark ? "none" : `1px solid ${colors.border}`,
              }}
            >
              Download
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 md:px-8">
        {/* Hero Text */}
        <div className="mb-6 max-w-3xl text-left">
          <h1 className="mb-4 text-balance text-xl font-medium leading-tight md:text-2xl lg:text-3xl">
            Built to make you extraordinarily productive, Cursor is the best way
            to code with AI.
          </h1>
          <div className="flex items-center gap-4">
            <a
              href="https://api2.cursor.sh/updates/download/golden/darwin-arm64/cursor/2.2"
              className="hidden items-center gap-2 rounded-md px-4 py-2 text-sm font-medium md:inline-flex"
              style={{
                backgroundColor: isDark ? colors.text : colors.bg,
                color: isDark ? colors.bg : colors.text,
                border: isDark ? "none" : `1px solid ${colors.border}`,
              }}
            >
              Download for macOS
              <Download className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* IDE Demo Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-lg"
          style={{
            height: "min(780px, 70vh)",
            minHeight: "500px",
            background: `linear-gradient(135deg, ${colors.card} 0%, ${colors.bg} 100%)`,
          }}
        >
          {/* Background Image */}
          <img
            src={IMAGES.hero.path}
            alt={IMAGES.hero.alt}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ filter: isDark ? "brightness(0.6)" : "brightness(0.9)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}