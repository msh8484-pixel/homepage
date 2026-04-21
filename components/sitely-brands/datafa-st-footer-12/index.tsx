// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#1A1A1A",
    cardBg: "#242424",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
    linkHover: "#FFFFFF",
  },
  dark: {
    background: "#1A1A1A",
    cardBg: "#242424",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
    linkHover: "#FFFFFF",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface DatafaStFooter12Props {
  mode?: "light" | "dark";
  brand?: {
    name: string;
    description: string;
    copyright: string;
    madeBy?: string;
    madeByLink?: string;
    builtWith?: string;
  };
  sections?: FooterSection[];
}

const defaultSections: FooterSection[] = [
  {
    title: "LINKS",
    links: [
      { label: "Log in", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Documentation", href: "#" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Terms of services", href: "#" },
      { label: "Privacy policy", href: "#" },
    ],
  },
];

const defaultBrand = {
  name: "DataFast",
  description: "DataFast is the best web analytics tool to discover which marketing channels drive revenue and grow your business, fast.",
  copyright: "Copyright 2025 - All rights reserved",
  madeBy: "Marc",
  madeByLink: "#",
  builtWith: "ShipFast",
};

export default function DatafaStFooter12({
  mode = "dark",
  brand = defaultBrand,
  sections = defaultSections,
}: DatafaStFooter12Props) {
  const colors = COLORS[mode];

  return (
    <footer
      className="w-full border-t border-gray-800 py-12 lg:py-16"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Logo */}
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <div className="flex gap-0.5">
                  <div className="h-4 w-1 rounded-sm bg-orange-500" />
                  <div className="h-5 w-1 rounded-sm bg-orange-400" />
                </div>
              </div>
              <span className="text-lg font-bold" style={{ color: colors.textPrimary }}>
                {brand.name}
              </span>
            </div>

            {/* Description */}
            <p
              className="mb-4 text-sm leading-relaxed"
              style={{ color: colors.textSecondary }}
            >
              {brand.description}
            </p>

            {/* Copyright */}
            <p className="text-sm" style={{ color: colors.textSecondary }}>
              {brand.copyright}
            </p>
          </motion.div>

          {/* Link Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <h4
                className="mb-4 text-sm font-medium tracking-wider"
                style={{ color: colors.textSecondary }}
              >
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: colors.textSecondary }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
}
