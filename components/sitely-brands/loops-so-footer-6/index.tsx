// @ts-nocheck
"use client";

import { Share2, ExternalLink } from "lucide-react";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FF6B35",
  },
  dark: {
    accent: "#FF6B35",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================


interface LoopsSoFooter6Props {
  mode?: "light" | "dark";
}

export default function LoopsSoFooter6({
  mode = "light",
}: LoopsSoFooter6Props) {
  const isDark = mode === "dark";
  const colors = COLORS[mode];

  return (
    <footer
      className={`py-16 border-t ${
        isDark
          ? "bg-gray-950 border-gray-800"
          : "bg-white border-gray-200"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div
              className="w-8 h-8 rounded-lg mb-4"
              style={{ backgroundColor: colors.accent }}
            />
            <h3
              className={`font-semibold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Loops
            </h3>
          </div>

          {/* Links */}
          {[
            { title: "Product", links: ["Features", "Pricing"] },
            { title: "Company", links: ["About", "Blog"] },
            { title: "Legal", links: ["Privacy", "Terms"] },
          ].map((section) => (
            <div key={section.title}>
              <h4
                className={`text-sm font-semibold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          className={`flex justify-between items-center pt-8 border-t ${
            isDark ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <p
            className={`text-sm ${
              isDark ? "text-gray-500" : "text-gray-600"
            }`}
          >
            Copyright 2024 Loops. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Share2 className="w-5 h-5" />
            <ExternalLink className="w-5 h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
