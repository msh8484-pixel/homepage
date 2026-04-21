// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#1A1A1A",
    cardBg: "#FFFFFF",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
  },
  dark: {
    background: "#1A1A1A",
    cardBg: "#FFFFFF",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight, Globe } from "lucide-react";

interface Logo {
  name: string;
  category: "code" | "no-code";
  icon?: string;
}

interface DatafaStLogoCloud5Props {
  mode?: "light" | "dark";
  headline?: string;
  logos?: Logo[];
  ctaText?: string;
  ctaHref?: string;
  trialText?: string;
}

const defaultLogos: Logo[] = [
  { name: "Next.js", category: "code" },
  { name: "FastAPI", category: "code" },
  { name: "Caddy", category: "code" },
  { name: "express", category: "code" },
  { name: "Vue.js", category: "code" },
  { name: "React Router", category: "code" },
  { name: "Shopify", category: "no-code" },
  { name: "Webflow", category: "no-code" },
  { name: "WordPress", category: "no-code" },
];

export default function DatafaStLogoCloud5({
  mode = "dark",
  headline = "Works with your favorite tools",
  logos = defaultLogos,
  ctaText = "Add my website",
  ctaHref = "#",
  trialText = "14-day free trial. No card required",
}: DatafaStLogoCloud5Props) {
  const colors = COLORS[mode];
  const codeLogos = logos.filter((l) => l.category === "code");
  const noCodeLogos = logos.filter((l) => l.category === "no-code");

  return (
    <section
      className="w-full py-16 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center text-3xl font-bold md:text-4xl"
          style={{ color: colors.textPrimary }}
        >
          {headline}
        </motion.h2>

        {/* Logo Grids */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Code Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-4 text-center text-sm font-medium tracking-wider text-gray-500">
              CODE
            </div>
            <div
              className="grid grid-cols-2 gap-3 rounded-xl border border-gray-700/50 p-4"
              style={{ backgroundColor: colors.cardBg }}
            >
              {codeLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2 rounded-lg bg-gray-100 px-2 py-3 text-center text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200"
                >
                  <span>{logo.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* No-Code Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="mb-4 text-center text-sm font-medium tracking-wider text-gray-500">
              NO-CODE
            </div>
            <div
              className="grid grid-cols-2 gap-3 rounded-xl border border-gray-700/50 p-4"
              style={{ backgroundColor: colors.cardBg }}
            >
              {noCodeLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2 rounded-lg bg-gray-100 px-2 py-3 text-center text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200"
                >
                  <span>{logo.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex items-center overflow-hidden rounded-lg border border-gray-700">
            <div className="flex items-center bg-gray-800 px-3 py-3">
              <Globe className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="website.com"
              className="w-48 bg-gray-800 px-3 py-3 text-white placeholder-gray-500 outline-none"
            />
          </div>
          <a
            href={ctaHref}
            className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold text-white transition-all hover:opacity-90 w-64"
            style={{ backgroundColor: colors.accent }}
          >
            {ctaText}
            <ArrowRight className="h-4 w-4" />
          </a>
          <p style={{ color: colors.textSecondary }}>{trialText}</p>
        </motion.div>
      </div>
    </section>
  );
}
