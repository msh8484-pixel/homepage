// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

const COLORS = {
  light: {
    background: "#FFFFFF",
    textPrimary: "#000000",
    textSecondary: "#666666",
    buttonBg: "#000000",
    buttonHoverBg: "#333333",
  },
  dark: {
    background: "#0A0A0A",
    textPrimary: "#FFFFFF",
    textSecondary: "#CCCCCC",
    buttonBg: "#FFFFFF",
    buttonHoverBg: "#EEEEEE",
  },
} as const;

interface ResearchArea {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

interface RunwaymlComFeature3Props {
  mode?: "light" | "dark";
  sectionLabel?: string;
  heading?: string;
  researchAreas?: ResearchArea[];
}

const defaultResearchAreas: ResearchArea[] = [
  {
    title: "GWM-1",
    description: "Our state-of-the-art General World Model",
    buttonText: "Learn more",
    buttonLink: "#",
  },
  {
    title: "Gen-4.5",
    description: "The world's top-rated video generation model",
    buttonText: "Learn more",
    buttonLink: "#",
  },
  {
    title: "General World Models",
    description: "Building the foundation for AI simulation",
    buttonText: "Learn more",
    buttonLink: "#",
  },
];

export default function RunwaymlComFeature3({
  mode = "light",
  sectionLabel = "Research",
  heading = "Building the Future of AI",
  researchAreas = defaultResearchAreas,
}: RunwaymlComFeature3Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className="py-24 w-full"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: colors.textSecondary }}
            >
              {sectionLabel}
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: colors.textPrimary }}
            >
              {heading}
            </h2>
          </motion.div>

          {/* Right Column - Research Items */}
          <div className="space-y-6">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="pb-6 border-b border-gray-200 dark:border-gray-800 last:border-b-0"
              >
                <h3
                  className="text-2xl font-semibold mb-2"
                  style={{ color: colors.textPrimary }}
                >
                  {area.title}
                </h3>
                <p
                  className="mb-4"
                  style={{ color: colors.textSecondary }}
                >
                  {area.description}
                </p>
                {area.buttonLink && (
                  <a
                    href={area.buttonLink}
                    className="inline-flex items-center gap-2 font-semibold text-sm hover:opacity-80 transition-opacity"
                    style={{ color: colors.textPrimary }}
                  >
                    {area.buttonText}
                    <ChevronRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
