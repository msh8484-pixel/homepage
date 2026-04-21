// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#171717",
  },
  dark: {
    accent: "#FAFAFA",
  },
} as const;

const IMAGES = {} as const;

const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Security", href: "#" },
  ],
  company: [
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
} as const;

const BRAND = {
  name: "Lanorx",
  description: "Launch your landing page in minutes",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface LanorxComFooter7Props {
  mode?: "light" | "dark";
}

export default function LanorxComFooter7({
  mode = "light",
}: LanorxComFooter7Props) {
  const isDark = mode === "dark";

  return (
    <footer
      className={`py-16 border-t ${
        isDark
          ? "bg-neutral-950 border-neutral-800"
          : "bg-white border-neutral-200"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3
              className={`font-medium mb-2 ${
                isDark ? "text-white" : "text-neutral-900"
              }`}
            >
              {BRAND.name}
            </h3>
            <p
              className={`text-sm font-light ${
                isDark ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              {BRAND.description}
            </p>
          </div>

          {/* Product */}
          <div>
            <h4
              className={`text-sm font-medium mb-4 ${
                isDark ? "text-white" : "text-neutral-900"
              }`}
            >
              Product
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-sm font-light hover:opacity-75 transition ${
                      isDark ? "text-neutral-400" : "text-neutral-600"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className={`text-sm font-medium mb-4 ${
                isDark ? "text-white" : "text-neutral-900"
              }`}
            >
              Company
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-sm font-light hover:opacity-75 transition ${
                      isDark ? "text-neutral-400" : "text-neutral-600"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              className={`text-sm font-medium mb-4 ${
                isDark ? "text-white" : "text-neutral-900"
              }`}
            >
              Legal
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-sm font-light hover:opacity-75 transition ${
                      isDark ? "text-neutral-400" : "text-neutral-600"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`pt-8 border-t text-sm font-light text-center ${
            isDark ? "border-neutral-800 text-neutral-500" : "border-neutral-200 text-neutral-600"
          }`}
        >
          <p>Copyright 2024 {BRAND.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
