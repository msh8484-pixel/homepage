// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION - Edit these values to customize the component for your project
// ============================================================================

const COLORS = {
  light: {
    background: "#B5443A",
    text: "#ffffff",
    textMuted: "rgba(255, 255, 255, 0.8)",
  },
  dark: {
    background: "#B5443A",
    text: "#ffffff",
    textMuted: "rgba(255, 255, 255, 0.8)",
  },
} as const;

const IMAGES = {
  newsletter: {
    path: "/scraped/antler-co-2025-12-15/images/image-1.avif",
    alt: "Team collaboration",
    prompt: "Professional team collaborating in modern office, diverse group, warm lighting",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface AntlerCoCta9Props {
  mode?: "light" | "dark";
}

export default function AntlerCoCta9({
  mode = "light",
}: AntlerCoCta9Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6"
              style={{ color: colors.text }}
            >
              Antler insights delivered to your inbox
            </h2>
            <p
              className="text-base md:text-lg mb-8 max-w-lg"
              style={{ color: colors.textMuted }}
            >
              Subscribe to our community newsletter and stay updated with the latest news
              from our global network of builders and investors.
            </p>
            <motion.a
              href="#subscribe"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-gray-900 font-medium transition-colors bg-white hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
            >
              Subscribe
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={IMAGES.newsletter.path}
                alt={IMAGES.newsletter.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
