// @ts-nocheck
"use client";

import { motion } from "motion/react";

const COLORS = {
  light: {
    background: "#FFFFFF",
    textPrimary: "#000000",
    accentBg: "#84cc16",
  },
  dark: {
    background: "#0A0A0A",
    textPrimary: "#FFFFFF",
    accentBg: "#84cc16",
  },
} as const;

interface Tool {
  name: string;
  icon: React.ReactNode;
}

interface ShipfaStLogoCloud4Props {
  mode?: "light" | "dark";
  heading?: string;
  subheading?: string;
  tools?: Tool[];
}

const ZapIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0110 2v5H6a1 1 0 0-.82 1.573l2.5 3.75H6V17a1 1 0 001.82.573l2.5-3.75H14a1 1 0 00.82-1.573l-2.5-3.75H14V2a1 1 0 00-2.7-.954z" clipRule="evenodd" />
  </svg>
);

const defaultTools: Tool[] = [
  { name: "GitHub Copilot", icon: <span className="text-lg">🤖</span> },
  { name: "Cursor", icon: <span className="text-lg">⌨️</span> },
  { name: "Claude", icon: <span className="text-lg">✨</span> },
  { name: "OpenAI", icon: <span className="text-lg">🧠</span> },
  { name: "Windsurf", icon: <span className="text-lg">🌊</span> },
  { name: "Gemini", icon: <span className="text-lg">💎</span> },
  { name: "Grok", icon: <span className="text-lg">🚀</span> },
  { name: "DeepSeek", icon: <span className="text-lg">🔍</span> },
];

export default function ShipfaStLogoCloud4({
  mode = "light",
  heading = "ShipFast + AI Tools",
  subheading = "Supercharge your development with the best AI coding assistants",
  tools = defaultTools,
}: ShipfaStLogoCloud4Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="py-20 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: colors.accentBg }}
            >
              <ZapIcon />
            </div>
            <h2
              className="text-4xl font-bold"
              style={{ color: colors.textPrimary }}
            >
              {heading}
            </h2>
          </div>
          <p
            className="text-lg opacity-70"
            style={{ color: colors.textPrimary }}
          >
            {subheading}
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05 },
            },
          }}
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-3 p-4 rounded-lg border-2 hover:shadow-lg transition-all"
              style={{
                borderColor: colors.accentBg,
              }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl">{tool.icon}</div>
              <span
                className="text-xs font-semibold text-center"
                style={{ color: colors.textPrimary }}
              >
                {tool.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
