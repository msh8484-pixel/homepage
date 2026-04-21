// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#3366FF",
  },
  dark: {
    accent: "#4D7AFF",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface RelateKrFooter9Props {
  mode?: "light" | "dark";
}

export default function RelateKrFooter9({
  mode = "light",
}: RelateKrFooter9Props) {
  const isDark = mode === "dark";
  const colors = COLORS[mode];

  return (
    <footer
      className={`py-16 ${isDark ? "bg-gray-900" : "bg-gray-100"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3
              className={`font-semibold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Relate
            </h3>
            <p
              className={`text-sm ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              풀스택 B2B 세일즈 플랫폼
            </p>
          </div>

          {/* Product */}
          <div>
            <h4
              className={`text-sm font-semibold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              {["Features", "Pricing"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className={`${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4
              className={`text-sm font-semibold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Learn
            </h4>
            <ul className="space-y-2 text-sm">
              {["Blog", "Docs"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className={`${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className={`text-sm font-semibold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {["About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className={`${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`pt-8 border-t text-sm text-center ${
            isDark ? "border-gray-800 text-gray-500" : "border-gray-300 text-gray-600"
          }`}
        >
          <p>Copyright 2024 Relate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
