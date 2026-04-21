// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { Play } from "lucide-react";

const COLORS = {
  light: {
    background: "#181818",
    textPrimary: "#FFFFFF",
    textSecondary: "#CCCCCC",
    accentBg: "#F59E0B",
  },
  dark: {
    background: "#181818",
    textPrimary: "#FFFFFF",
    textSecondary: "#CCCCCC",
    accentBg: "#F59E0B",
  },
} as const;

interface ShipfaStShowcase5Props {
  mode?: "light" | "dark";
  authorName?: string;
  title?: string;
  description?: string;
  videoUrl?: string;
  testimonialAuthor?: string;
  testimonialRole?: string;
}

export default function ShipfaStShowcase5({
  mode = "dark",
  authorName = "Marc Lou",
  title = "How I shipped 16 startups in 2 years",
  description = "Learn how Marc Lou built ShipFast and went from failing startups to making $45,000/month. See the strategies, tools, and mindset that made the difference.",
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ",
  testimonialAuthor = "Yifan Goh",
  testimonialRole = "Built an AI tool",
}: ShipfaStShowcase5Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="py-24 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Author Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p
            className="text-sm font-semibold uppercase tracking-wide mb-2"
            style={{ color: colors.accentBg }}
          >
            {authorName}
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: colors.textPrimary }}
          >
            {title}
          </h2>
          <p
            className="text-lg max-w-2xl"
            style={{ color: colors.textSecondary }}
          >
            {description}
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-16 rounded-xl overflow-hidden aspect-video bg-gray-900"
        >
          <iframe
            className="w-full h-full"
            src={videoUrl}
            title="ShipFast Showcase"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="absolute inset-0 flex items-center justify-center group cursor-pointer">
            <motion.div
              className="w-16 h-16 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
              style={{ backgroundColor: colors.accentBg }}
            >
              <Play className="w-6 h-6 ml-1" style={{ color: colors.background }} />
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-l-4 pl-6 py-4"
          style={{ borderColor: colors.accentBg }}
        >
          <p
            className="text-lg italic mb-4"
            style={{ color: colors.textSecondary }}
          >
            "ShipFast is a game changer. It saves a ton of time and lets me focus on building the actual product instead of setting up the boring stuff."
          </p>
          <div>
            <p
              className="font-semibold"
              style={{ color: colors.textPrimary }}
            >
              {testimonialAuthor}
            </p>
            <p
              className="text-sm"
              style={{ color: colors.textSecondary }}
            >
              {testimonialRole}
            </p>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row gap-8 pt-8 border-t"
          style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
        >
          <div>
            <p
              className="text-3xl font-bold"
              style={{ color: colors.accentBg }}
            >
              135,000+
            </p>
            <p style={{ color: colors.textSecondary }}>People trust Marc on Share2</p>
          </div>
          <div>
            <p
              className="text-3xl font-bold"
              style={{ color: colors.accentBg }}
            >
              7,890
            </p>
            <p style={{ color: colors.textSecondary }}>Indie makers use ShipFast</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
