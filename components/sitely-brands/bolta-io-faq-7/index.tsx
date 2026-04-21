// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#F97316",
    background: "#ffffff",
    text: "#1a1a1a",
    textMuted: "#6b7280",
    border: "#e5e7eb",
  },
  dark: {
    accent: "#FB923C",
    background: "#0a0a0a",
    text: "#f5f5f5",
    textMuted: "#9ca3af",
    border: "#262626",
  },
} as const;

const CONTENT = {
  title: "Frequently Asked Questions",
  description: "Get answers to common questions about Bolta",
  contactTitle: "Still have questions?",
  contactDescription: "Can't find the answer you're looking for? Please chat with our friendly team.",
  contactButton: "Contact us",
};

const FAQS = [
  {
    question: "Is Bolta available on MacOS?",
    answer: "Yes, Bolta is fully compatible with MacOS and can be accessed through any modern web browser.",
  },
  {
    question: "Can I integrate Bolta with HomeTax?",
    answer: "Yes, Bolta supports integration with popular tax software including HomeTax for seamless workflows.",
  },
  {
    question: "How can I request new features?",
    answer: "You can submit feature requests through our feedback portal or contact our support team directly.",
  },
  {
    question: "Is Bolta available for sole proprietors?",
    answer: "Yes, Bolta is designed for businesses of all sizes, including sole proprietors and freelancers.",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface BoltaIoFaq7Props {
  mode?: "light" | "dark";
}

export default function BoltaIoFaq7({ mode = "light" }: BoltaIoFaq7Props) {
  const colors = COLORS[mode];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="w-full py-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: colors.text }}
            >
              {CONTENT.title}
            </h2>
            <p
              className="text-base mb-8"
              style={{ color: colors.textMuted }}
            >
              {CONTENT.description}
            </p>

            {/* Contact Card */}
            <motion.div
              className="p-6 rounded-xl"
              style={{ backgroundColor: colors.accent + "15", border: `1px solid ${colors.accent}40` }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3
                className="font-bold mb-2"
                style={{ color: colors.text }}
              >
                {CONTENT.contactTitle}
              </h3>
              <p
                className="text-sm mb-4"
                style={{ color: colors.textMuted }}
              >
                {CONTENT.contactDescription}
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center px-4 py-2 rounded-full text-white text-sm font-medium"
                style={{ backgroundColor: colors.accent }}
                whileHover={{ opacity: 0.9 }}
              >
                {CONTENT.contactButton}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {FAQS.map((faq, index) => (
              <motion.div
                key={index}
                className="border rounded-lg overflow-hidden"
                style={{ borderColor: colors.border }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:opacity-75 transition-opacity"
                  style={{ color: colors.text }}
                >
                  <span className="font-medium text-left">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown
                      className="w-5 h-5"
                      style={{ color: colors.accent }}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t px-6 py-4"
                      style={{ borderColor: colors.border, color: colors.textMuted }}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
