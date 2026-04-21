// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#1A1A1A",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
  },
  dark: {
    background: "#1A1A1A",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface DatafaStBiography6Props {
  mode?: "light" | "dark";
  author?: string;
  title?: string;
  location?: string;
  badge?: string;
  greeting?: string;
  biography?: string[];
  twitterFollowers?: number;
  videoUrl?: string;
  avatarUrl?: string;
}

const defaultBiography = [
  "I've spent the last 10 years studying how businesses grow. What I discovered is simple: most companies focus on vanity metrics like page views and traffic volume.",
  "The reality? Revenue is what matters. That's why I built DataFast - to help entrepreneurs focus on metrics that actually impact their bottom line.",
];

export default function DatafaStBiography6({
  mode = "dark",
  author = "Marc",
  title = "Founder & CEO at DataFast",
  location = "San Francisco, USA",
  badge = "AI Enthusiast",
  greeting = "Hi, I'm Marc 👋",
  biography = defaultBiography,
  twitterFollowers = 12000,
  videoUrl = "https://example.com/video.mp4",
  avatarUrl = "https://example.com/avatar.jpg",
}: DatafaStBiography6Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="w-full py-16 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-4xl px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-4 inline-block px-3 py-1 rounded-full border text-sm"
              style={{
                backgroundColor: "transparent",
                borderColor: colors.accent,
                color: colors.accent,
              }}
            >
              {badge}
            </motion.span>

            {/* Greeting */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-2 text-4xl font-bold"
              style={{ color: colors.textPrimary }}
            >
              {greeting}
            </motion.h1>

            {/* Location */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 text-lg"
              style={{ color: colors.textSecondary }}
            >
              {location}
            </motion.p>

            {/* Biography */}
            <div className="space-y-4 mb-8">
              {biography.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-base leading-relaxed"
                  style={{ color: colors.textSecondary }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Share2 Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3"
            >
              <span
                className="text-2xl font-bold"
                style={{ color: colors.textPrimary }}
              >
                {twitterFollowers.toLocaleString()}
              </span>
              <span style={{ color: colors.textSecondary }}>
                followers on Share2
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column - Media */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {/* Avatar */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-700">
              <img
                src={avatarUrl}
                alt={author}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Video */}
            <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-700">
              <video
                src={videoUrl}
                controls
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
