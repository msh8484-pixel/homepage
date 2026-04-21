// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const COLORS = {
  light: {
    background: "#FFFFFF",
    textPrimary: "#000000",
    textSecondary: "#666666",
    accentBg: "#F0F9FF",
    borderColor: "#E5E7EB",
  },
  dark: {
    background: "#0A0A0A",
    textPrimary: "#FFFFFF",
    textSecondary: "#CCCCCC",
    accentBg: "#1F2937",
    borderColor: "#374151",
  },
} as const;

interface FAQItem {
  question: string;
  answer: string;
}

interface ShipfaStFaq7Props {
  mode?: "light" | "dark";
  title?: string;
  description?: string;
  faqItems?: FAQItem[];
  contactEmail?: string;
  contactTwitter?: string;
}

const defaultFAQItems: FAQItem[] = [
  {
    question: "What is ShipFast?",
    answer: "ShipFast is a Next.js boilerplate designed to help you launch your startup in days, not weeks.",
  },
  {
    question: "Does ShipFast include email setup?",
    answer: "Yes, ShipFast comes with pre-configured email integration using Resend or Mailgun.",
  },
  {
    question: "Can I use ShipFast with TypeScript?",
    answer: "Absolutely! ShipFast is built with TypeScript and includes full type safety.",
  },
  {
    question: "What payment options are included?",
    answer: "ShipFast includes Stripe and LemonSqueezy integration for handling payments.",
  },
  {
    question: "Is there a database included?",
    answer: "Yes, ShipFast supports both MongoDB and Supabase for your database needs.",
  },
];

export default function ShipfaStFaq7({
  mode = "light",
  title = "Frequently Asked Questions",
  description = "Have questions? We're here to help.",
  faqItems = defaultFAQItems,
  contactEmail = "support@shipfast.com",
  contactTwitter = "https://twitter.com/shipfast",
}: ShipfaStFaq7Props) {
  const colors = COLORS[mode];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section
      className="py-20 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: colors.textPrimary }}
            >
              {title}
            </h2>
            <p
              className="text-lg mb-8"
              style={{ color: colors.textSecondary }}
            >
              {description}
            </p>
            <p style={{ color: colors.textSecondary }}>
              Still have questions? Contact us via{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="underline hover:opacity-80"
              >
                email
              </a>{" "}
              or{" "}
              <a
                href={contactTwitter}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80"
              >
                Share2
              </a>
              .
            </p>
          </motion.div>

          {/* Right Column - FAQ Accordion */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border rounded-lg overflow-hidden"
                style={{ borderColor: colors.borderColor }}
              >
                <button
                  onClick={() =>
                    setExpandedIndex(
                      expandedIndex === index ? null : index
                    )
                  }
                  className="w-full px-6 py-4 flex items-center justify-between transition-colors"
                  style={{
                    backgroundColor:
                      expandedIndex === index ? colors.accentBg : "transparent",
                  }}
                  aria-expanded={expandedIndex === index}
                >
                  <span
                    className="font-semibold text-left"
                    style={{ color: colors.textPrimary }}
                  >
                    {item.question}
                  </span>
                  <motion.div
                    animate={{
                      rotate: expandedIndex === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown
                      className="w-5 h-5"
                      style={{ color: colors.textSecondary }}
                    />
                  </motion.div>
                </button>

                <motion.div
                  animate={{
                    height: expandedIndex === index ? "auto" : 0,
                    opacity: expandedIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div
                    className="px-6 py-4"
                    style={{ color: colors.textSecondary }}
                  >
                    {item.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
