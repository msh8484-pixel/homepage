// @ts-nocheck
"use client";

import { motion } from "motion/react";

const COLORS = {
  light: {
    background: "#0A0A0A",
    textPrimary: "#FFFFFF",
    textSecondary: "#999999",
    border: "rgba(255, 255, 255, 0.1)",
  },
  dark: {
    background: "#0A0A0A",
    textPrimary: "#FFFFFF",
    textSecondary: "#999999",
    border: "rgba(255, 255, 255, 0.1)",
  },
} as const;

interface FooterColumn {
  title: string;
  links: Array<{ label: string; href: string }>;
}

interface RunwaymlComFooter7Props {
  mode?: "light" | "dark";
  companyName?: string;
  year?: number;
  columns?: FooterColumn[];
  legalLinks?: Array<{ label: string; href: string }>;
}

const defaultColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Research", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Docs", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Share2", href: "#" },
      { label: "Discord", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
];

export default function RunwaymlComFooter7({
  mode = "light",
  companyName = "Runway",
  year = new Date().getFullYear(),
  columns = defaultColumns,
  legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
}: RunwaymlComFooter7Props) {
  const colors = COLORS[mode];

  return (
    <footer
      className="w-full py-16 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12 pb-12 border-b"
          style={{ borderColor: colors.border }}
        >
          {columns.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3
                className="font-semibold text-sm mb-4 uppercase tracking-wide"
                style={{ color: colors.textPrimary }}
              >
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm hover:opacity-80 transition-opacity"
                      style={{ color: colors.textSecondary }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p style={{ color: colors.textSecondary }} className="text-sm">
              &copy; {year} {companyName}. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-4 mt-4 md:mt-0"
          >
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm hover:opacity-80 transition-opacity"
                style={{ color: colors.textSecondary }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
