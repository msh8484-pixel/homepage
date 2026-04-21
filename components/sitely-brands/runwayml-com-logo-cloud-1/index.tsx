// @ts-nocheck
"use client";

import { motion } from "motion/react";

const COLORS = {
  light: {
    background: "#FFFFFF",
    text: "#000000",
  },
  dark: {
    background: "#0A0A0A",
    text: "#FFFFFF",
  },
} as const;

interface Logo {
  name: string;
  icon: React.ReactNode;
}

interface RunwaymlComLogoCloud1Props {
  mode?: "light" | "dark";
  heading?: string;
  logos?: Logo[];
}

const AllstatesLogo = ({ color }: { color: string }) => (
  <svg viewBox="0 0 100 100" fill={color} className="w-12 h-12">
    <text x="50" y="50" textAnchor="middle" dy="0.3em" fontSize="20" fontWeight="bold">
      A
    </text>
  </svg>
);

const AMCLogo = ({ color }: { color: string }) => (
  <svg viewBox="0 0 100 100" fill={color} className="w-12 h-12">
    <text x="50" y="50" textAnchor="middle" dy="0.3em" fontSize="18" fontWeight="bold">
      AMC
    </text>
  </svg>
);

const GutLogo = ({ color }: { color: string }) => (
  <svg viewBox="0 0 100 100" fill={color} className="w-12 h-12">
    <text x="50" y="50" textAnchor="middle" dy="0.3em" fontSize="20" fontWeight="bold">
      G
    </text>
  </svg>
);

const LegendaryLogo = ({ color }: { color: string }) => (
  <svg viewBox="0 0 100 100" fill={color} className="w-12 h-12">
    <text x="50" y="50" textAnchor="middle" dy="0.3em" fontSize="16" fontWeight="bold">
      LEG
    </text>
  </svg>
);

const LionsgatedLogo = ({ color }: { color: string }) => (
  <svg viewBox="0 0 100 100" fill={color} className="w-12 h-12">
    <text x="50" y="50" textAnchor="middle" dy="0.3em" fontSize="14" fontWeight="bold">
      LG
    </text>
  </svg>
);

const UbisoftLogo = ({ color }: { color: string }) => (
  <svg viewBox="0 0 100 100" fill={color} className="w-12 h-12">
    <text x="50" y="50" textAnchor="middle" dy="0.3em" fontSize="18" fontWeight="bold">
      UBI
    </text>
  </svg>
);

const defaultLogos: Logo[] = [
  { name: "Allstate", icon: <AllstatesLogo color="currentColor" /> },
  { name: "AMC", icon: <AMCLogo color="currentColor" /> },
  { name: "Gut", icon: <GutLogo color="currentColor" /> },
  { name: "Legendary", icon: <LegendaryLogo color="currentColor" /> },
  { name: "Lionsgate", icon: <LionsgatedLogo color="currentColor" /> },
  { name: "Ubisoft", icon: <UbisoftLogo color="currentColor" /> },
];

export default function RunwaymlComLogoCloud1({
  mode = "light",
  heading = "Trusted by leading companies",
  logos = defaultLogos,
}: RunwaymlComLogoCloud1Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="py-20 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl md:text-3xl font-semibold mb-12"
          style={{ color: colors.text }}
        >
          {heading}
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-8 md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.4 }}
            >
              <div
                className="hover:opacity-80 transition-opacity"
                style={{ color: colors.text }}
              >
                {logo.icon}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
