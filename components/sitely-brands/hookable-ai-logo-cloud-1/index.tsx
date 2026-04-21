// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#FFFFFF",
    text: "#111111",
    textMuted: "#666666",
    divider: "#E5E5E5",
  },
  dark: {
    background: "#0F0F0F",
    text: "#FFFFFF",
    textMuted: "#999999",
    divider: "#333333",
  },
};

const DEFAULT_SPONSORS = [
  { name: "Google", width: 100, url: "#" },
  { name: "Microsoft", width: 120, url: "#" },
  { name: "Amazon", width: 110, url: "#" },
  { name: "Apple", width: 95, url: "#" },
  { name: "Meta", width: 105, url: "#" },
  { name: "Netflix", width: 115, url: "#" },
  { name: "Tesla", width: 100, url: "#" },
  { name: "Nvidia", width: 105, url: "#" },
  { name: "Adobe", width: 100, url: "#" },
  { name: "Figma", width: 100, url: "#" },
  { name: "Slack", width: 95, url: "#" },
  { name: "Notion", width: 105, url: "#" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useRef, useEffect, useState } from "react";

interface Sponsor {
  name: string;
  width: number;
  url: string;
}

interface HookableAiLogoCloud1Props {
  mode?: "light" | "dark";
  title?: string;
  logos?: Sponsor[];
}

export default function HookableAiLogoCloud1({
  mode = "light",
  title = "파트너사",
  logos = DEFAULT_SPONSORS,
}: HookableAiLogoCloud1Props) {
  const colors = COLORS[mode];
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="w-full py-12 md:py-16"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-lg md:text-xl font-semibold"
            style={{ color: colors.text }}
          >
            {title}
          </h2>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <div
              className="h-px flex-1 max-w-24"
              style={{ backgroundColor: colors.divider }}
            />
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: colors.textMuted }}
            />
            <div
              className="h-px flex-1 max-w-24"
              style={{ backgroundColor: colors.divider }}
            />
          </div>
        </motion.div>

        {/* Logo Carousel */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative overflow-hidden"
        >
          {/* Gradient Masks */}
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to right, ${colors.background}, transparent)`,
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to left, ${colors.background}, transparent)`,
            }}
          />

          {/* Carousel Container */}
          <motion.div
            className="flex gap-8"
            animate={{ x: isHovered ? 0 : [0, -100] }}
            transition={{
              x: isHovered
                ? { type: "spring", stiffness: 50 }
                : { duration: 20, repeat: Infinity, repeatType: "loop", ease: "linear" },
            }}
          >
            {/* Original logos */}
            {logos.map((sponsor, index) => (
              <motion.a
                key={`${sponsor.name}-${index}`}
                href={sponsor.url}
                className="flex-shrink-0 flex items-center justify-center px-4 py-2 rounded-lg border transition-all hover:bg-opacity-50"
                style={{
                  width: sponsor.width,
                  borderColor: colors.divider,
                  color: colors.textMuted,
                }}
              >
                <span className="text-sm font-medium">{sponsor.name}</span>
              </motion.a>
            ))}

            {/* Duplicated for infinite scroll */}
            {logos.map((sponsor, index) => (
              <motion.a
                key={`${sponsor.name}-${index}-dup`}
                href={sponsor.url}
                className="flex-shrink-0 flex items-center justify-center px-4 py-2 rounded-lg border transition-all hover:bg-opacity-50"
                style={{
                  width: sponsor.width,
                  borderColor: colors.divider,
                  color: colors.textMuted,
                }}
              >
                <span className="text-sm font-medium">{sponsor.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
