// @ts-nocheck
"use client";

import { motion } from "motion/react";

const COLORS = {
  light: {
    background: "#FFFFFF",
    cardBg: "#F9FAFB",
    textPrimary: "#000000",
    textSecondary: "#666666",
    accentBg: "#84cc16",
  },
  dark: {
    background: "#0A0A0A",
    cardBg: "#1F2937",
    textPrimary: "#FFFFFF",
    textSecondary: "#CCCCCC",
    accentBg: "#84cc16",
  },
} as const;

interface ShipfaStTestimonial1Props {
  mode?: "light" | "dark";
  quote?: string;
  author?: string;
  mrrAmount?: string;
}

const QuoteIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5C5.5 2 3 7 3 9.972C3 16.15 3 21 3 21z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5c-4.5 0-6.5 5-6.5 7.972C15.5 16.15 15 21 15 21z" />
  </svg>
);

const HackerNewsLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0v24h24V0H0zm6.94 5h2.743v9.352H10.36V5h2.743V3.727H6.94V5zm9.41 4.083c0-1.38 1.08-2.346 2.605-2.346 1.526 0 2.606.966 2.606 2.346 0 1.38-1.08 2.346-2.606 2.346-1.525 0-2.605-.966-2.605-2.346zm3.083 5.917h2.744v-5.15h1.04l1.04 5.15h2.744l-1.555-5.7c.888-.558 1.435-1.558 1.435-2.607 0-2.16-1.668-3.727-4.08-3.727h-5.248v9.034z" />
  </svg>
);

const ProductHuntLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 10h4v4H7v-4z" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4.5V15H12V9h5v4z" />
  </svg>
);

const TwitterLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 8-2 8-2z" />
  </svg>
);

const RedditLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="9" cy="10" r="1" />
    <circle cx="15" cy="10" r="1" />
    <path d="M9 14c0 1.5 1.5 2.5 3 2.5s3-1 3-2.5" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export default function ShipfaStTestimonial1({
  mode = "light",
  quote = "Without ShipFast I might have never launched my SaaS and I would still be at $0 MRR.",
  author = "Jack Friks",
  mrrAmount = "$25,000/mo",
}: ShipfaStTestimonial1Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="py-20 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Main Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl p-12 mb-12"
          style={{ backgroundColor: colors.cardBg }}
        >
          <div className="mb-6 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: colors.accentBg }}>
                ★
              </span>
            ))}
          </div>

          <div className="mb-8 flex items-start gap-4">
            <div style={{ color: colors.accentBg }}>
              <QuoteIcon />
            </div>
            <p
              className="text-2xl font-semibold leading-relaxed"
              style={{ color: colors.textPrimary }}
            >
              {quote}
            </p>
          </div>

          {/* Author Info */}
          <div className="flex items-center justify-between mb-8 border-t pt-8" style={{ borderColor: colors.textSecondary }}>
            <div>
              <p
                className="font-semibold text-lg"
                style={{ color: colors.textPrimary }}
              >
                {author}
              </p>
              <p
                className="text-sm"
                style={{ color: colors.textSecondary }}
              >
                ShipFast founder • MRR: {mrrAmount}
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop"
              alt={author}
              className="w-12 h-12 rounded-full"
            />
          </div>

          {/* Screenshot */}
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
            alt="Revenue screenshot"
            className="w-full rounded-lg mb-8"
          />
        </motion.div>

        {/* Featured On Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <p
            className="text-sm font-semibold uppercase tracking-wide mb-6"
            style={{ color: colors.textSecondary }}
          >
            Featured on
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <a
              href="#"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              style={{ color: colors.textPrimary }}
            >
              <HackerNewsLogo />
              <span className="text-sm font-medium">Hacker News</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              style={{ color: colors.textPrimary }}
            >
              <ProductHuntLogo />
              <span className="text-sm font-medium">Product Hunt</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              style={{ color: colors.textPrimary }}
            >
              <TwitterLogo />
              <span className="text-sm font-medium">Share2</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              style={{ color: colors.textPrimary }}
            >
              <RedditLogo />
              <span className="text-sm font-medium">Reddit</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
