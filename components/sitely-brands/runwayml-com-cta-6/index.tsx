// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    textPrimary: "#000000",
    textSecondary: "#666666",
    buttonBg: "#000000",
    buttonHoverBg: "#333333",
    overlayBg: "rgba(0, 0, 0, 0.4)",
  },
  dark: {
    textPrimary: "#FFFFFF",
    textSecondary: "#CCCCCC",
    buttonBg: "#FFFFFF",
    buttonHoverBg: "#EEEEEE",
    overlayBg: "rgba(0, 0, 0, 0.6)",
  },
} as const;

const VIDEO = {
  src: "https://d3phaj0sisr2ct.cloudfront.net/site/images/research/gwm/Main_Hero_Compressed-v1.mp4",
  poster: "/registry/runwayml-com-cta-6/video-poster.png",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

interface RunwaymlComCta6Props {
  mode?: "light" | "dark";
  heading?: string;
  subheading?: string;
  buttonText?: string;
  buttonLink?: string;
  videoSrc?: string;
  videoPoster?: string;
}

export default function RunwaymlComCta6({
  mode = "light",
  heading = "We are building AI to simulate the world through merging art and science",
  subheading = "Join us on this mission",
  buttonText = "Get Started",
  buttonLink = "#",
  videoSrc = VIDEO.src,
  videoPoster = VIDEO.poster,
}: RunwaymlComCta6Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section className="relative w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 object-cover w-full h-full"
          playsInline
          loop
          muted
          autoPlay
          poster={videoPoster}
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: colors.overlayBg }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[600px] px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ color: colors.textPrimary }}
          >
            {heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl mb-8"
            style={{ color: colors.textSecondary }}
          >
            {subheading}
          </motion.p>

          <motion.a
            href={buttonLink}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
            style={{
              backgroundColor: colors.buttonBg,
              color: isDark ? "#000000" : "#FFFFFF",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.buttonHoverBg;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.buttonBg;
            }}
          >
            {buttonText}
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
