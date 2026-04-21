// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FF6B35",
    accentHover: "#E55A2B",
  },
  dark: {
    accent: "#FF6B35",
    accentHover: "#FF8555",
  },
} as const;

// Integration logos
const INTEGRATIONS = [
  { name: "Webhooks", icon: "webhook" },
  { name: "Supabase", icon: "supabase" },
  { name: "Clerk", icon: "clerk" },
  { name: "Zapier", icon: "zapier" },
  { name: "Census", icon: "census" },
  { name: "Framer", icon: "framer" },
  { name: "Make", icon: "make" },
  { name: "Segment", icon: "segment" },
  { name: "Webflow", icon: "webflow" },
  { name: "Bubble", icon: "bubble" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useState } from "react";

interface LoopsSoFeature2Props {
  mode?: "light" | "dark";
}

export default function LoopsSoFeature2({
  mode = "light",
}: LoopsSoFeature2Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";
  const [activeTab, setActiveTab] = useState("Create contact");

  const tabs = [
    "Create contact",
    "Update contact",
    "Delete contact",
    "Send event",
    "Send email",
  ];

  const codeExample = `{
  "email": "alice@example.com",
  "firstName": "Alice",
  "lastName": "Smith",
  "source": "app",
  "subscribed": true,
  "userGroup": "paying",
  "userId": "004"
}`;

  return (
    <section
      className={`relative w-full py-20 ${isDark ? "bg-gray-950" : "bg-white"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
          >
            Developers
          </span>
          <h2
            className={`mt-2 text-3xl font-semibold tracking-tight sm:text-4xl ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Simple integration with your stack
          </h2>
        </motion.div>

        {/* API Code Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`mb-8 overflow-hidden rounded-2xl border ${
            isDark ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"
          }`}
        >
          {/* Tabs */}
          <div
            className={`flex gap-6 border-b px-6 ${
              isDark ? "border-gray-800" : "border-gray-100"
            }`}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative py-4 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? isDark
                      ? "text-white"
                      : "text-gray-900"
                    : isDark
                    ? "text-gray-500 hover:text-gray-300"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Code Block */}
          <div className="p-6">
            <div
              className={`rounded-lg p-4 ${
                isDark ? "bg-blue-950" : "bg-blue-50"
              }`}
            >
              <pre
                className={`text-sm ${
                  isDark ? "text-blue-200" : "text-blue-900"
                }`}
              >
                <code>{codeExample}</code>
              </pre>
            </div>
          </div>
        </motion.div>

        {/* Integrations Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3
            className={`text-xl font-semibold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Integrations
          </h3>
          <p
            className={`mx-auto mt-2 max-w-lg text-sm ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Loops integrates with thousands of other platforms so you can sync
            contacts and trigger emails from around the internet.
          </p>
        </motion.div>

        {/* Integration Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 grid grid-cols-5 gap-4"
        >
          {INTEGRATIONS.map((integration) => (
            <div
              key={integration.name}
              className={`flex flex-col items-center justify-center rounded-xl border p-6 transition-shadow hover:shadow-lg ${
                isDark
                  ? "border-gray-800 bg-gray-900"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                  isDark ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <svg
                  className={`h-5 w-5 ${isDark ? "text-gray-400" : "text-gray-500"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span
                className={`mt-3 text-sm ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {integration.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
