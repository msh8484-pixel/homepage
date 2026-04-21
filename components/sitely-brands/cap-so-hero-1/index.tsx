// @ts-nocheck
"use client";

import { motion } from "motion/react";

const CONTENT = {
  headline: "Beautiful, shareable screen recordings",
  description: "Cap is the open source alternative to Loom. Record, edit, and share your screen with one click.",
  cta: {
    primary: { label: "Download for free", href: "/download" },
    secondary: { label: "Upgrade to Cap Pro", href: "/pricing" },
  },
  platforms: ["macOS", "Windows"],
  social: "Trusted by 20,000+ teams, builders and creators.",
  logos: [
    { name: "Microsoft", url: "https://logo.clearbit.com/microsoft.com" },
    { name: "Amazon", url: "https://logo.clearbit.com/amazon.com" },
    { name: "Google", url: "https://logo.clearbit.com/google.com" },
    { name: "Meta", url: "https://logo.clearbit.com/meta.com" },
  ],
} as const;

interface CapSoHeroProps {
  mode?: "light" | "dark";
}

export default function CapSoHero({ mode = "light" }: CapSoHeroProps) {
  return (
    <section className="w-full pt-32 pb-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">{CONTENT.headline}</h1>
            <p className="text-xl text-gray-600">{CONTENT.description}</p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href={CONTENT.cta.primary.href}
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-center"
              >
                {CONTENT.cta.primary.label}
              </a>
              <a
                href={CONTENT.cta.secondary.href}
                className="px-6 py-3 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors font-medium text-center"
              >
                {CONTENT.cta.secondary.label}
              </a>
            </div>

            {/* Platforms */}
            <div className="flex items-center gap-4 mt-4">
              <p className="text-sm text-gray-600">Available on:</p>
              <div className="flex gap-4">
                {CONTENT.platforms.map((platform) => (
                  <span key={platform} className="text-sm text-gray-600">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Video/Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="w-full aspect-video rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-gray-400">Video Preview</div>
            </div>
          </motion.div>
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 pt-12 border-t border-gray-200"
        >
          <p className="text-center text-gray-600 mb-8">{CONTENT.social}</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {CONTENT.logos.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center h-12">
                <span className="text-gray-400 text-sm font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
