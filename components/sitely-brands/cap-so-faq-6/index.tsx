// @ts-nocheck
"use client";

import { useState } from "react";
import { motion } from "motion/react";

const CONTENT = {
  headline: "Frequently Asked Questions",
  faqs: [
    {
      question: "Is Cap free to use?",
      answer: "Yes! Cap is completely free for personal use with unlimited local recordings. We also offer Cap Pro for teams who need cloud storage, advanced AI features, and collaboration tools.",
    },
    {
      question: "How does Cap compare to Loom?",
      answer: "Cap is the open source alternative to Loom. We offer similar features but with more control over your data, better privacy, and competitive pricing.",
    },
    {
      question: "Can I self-host Cap?",
      answer: "Absolutely! Cap is open source, so you can self-host it on your own infrastructure for complete control.",
    },
    {
      question: "What platforms does Cap support?",
      answer: "Cap is available for macOS and Windows. We offer native applications that integrate seamlessly with your operating system.",
    },
    {
      question: "Is my data secure with Cap?",
      answer: "We take security seriously. You can store recordings locally, use your own S3 bucket, or use our cloud infrastructure with enterprise-grade encryption.",
    },
    {
      question: "Can teams collaborate using Cap?",
      answer: "Yes! Cap Pro includes team collaboration features like comments, reactions, transcripts, and sharing controls for seamless async communication.",
    },
  ],
} as const;

interface CapSoFaq6Props {
  mode?: "light" | "dark";
}

export default function CapSoFaq6({ mode = "light" }: CapSoFaq6Props) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-[150px] lg:py-[200px] bg-white">
      <div className="w-full max-w-[800px] mx-auto px-5">
        <h2 className="text-4xl font-medium text-gray-900 text-center mb-12">{CONTENT.headline}</h2>
        <div className="space-y-4">
          {CONTENT.faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-medium text-gray-900 text-left">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 ml-4"
                >
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </motion.div>
              </button>
              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-6 py-4 border-t border-gray-200 bg-white"
                >
                  <p className="text-base text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
