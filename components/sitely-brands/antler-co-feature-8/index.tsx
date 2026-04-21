// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION - Edit these values to customize the component for your project
// ============================================================================

const COLORS = {
  light: {
    background: "#ffffff",
    text: "#1a1a1a",
    textMuted: "#6b7280",
  },
  dark: {
    background: "#0a0a0a",
    text: "#f5f5f5",
    textMuted: "#9ca3af",
  },
} as const;

const LOCATIONS = [
  { name: "New York", x: 20, y: 25 },
  { name: "Amsterdam", x: 45, y: 20 },
  { name: "Berlin", x: 48, y: 25 },
  { name: "Seoul", x: 75, y: 35 },
  { name: "Oslo", x: 45, y: 15 },
  { name: "Sydney", x: 80, y: 70 },
  { name: "London", x: 42, y: 28 },
  { name: "Tokyo", x: 85, y: 40 },
  { name: "Jakarta", x: 70, y: 50 },
  { name: "Austin", x: 25, y: 35 },
  { name: "Lagos", x: 50, y: 50 },
  { name: "Sao Paulo", x: 35, y: 65 },
  { name: "Singapore", x: 75, y: 55 },
  { name: "Toronto", x: 20, y: 22 },
  { name: "Dubai", x: 55, y: 40 },
  { name: "Copenhagen", x: 46, y: 18 },
  { name: "Johannesburg", x: 52, y: 60 },
  { name: "Bangkok", x: 68, y: 42 },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface AntlerCoFeature8Props {
  mode?: "light" | "dark";
}

export default function AntlerCoFeature8({
  mode = "light",
}: AntlerCoFeature8Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight max-w-2xl"
            style={{ color: colors.text }}
          >
            Exceptional founders come from anywhere with any background.
          </h2>
        </motion.div>

        {/* World Map with Locations */}
        <motion.div
          className="bg-white rounded-3xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="aspect-video bg-gray-50 relative flex items-center justify-center">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 60"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Simplified world map outlines */}
              <text x="50" y="30" textAnchor="middle" fill="#e5e7eb" fontSize="12">
                Global Network Map
              </text>
            </svg>

            {/* Location Pins */}
            {LOCATIONS.map((location, index) => (
              <motion.div
                key={index}
                className="absolute"
                style={{ left: `${location.x}%`, top: `${location.y}%` }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg" />
                  <div className="text-xs bg-white px-2 py-1 rounded mt-1 whitespace-nowrap shadow">
                    {location.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
