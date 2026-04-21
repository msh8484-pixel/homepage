// @ts-nocheck
"use client";

import { useState } from "react";
import { motion } from "motion/react";

const CONTENT = {
  logo: "Cap",
  navigation: [
    { label: "Product", href: "/product" },
    { label: "Download", href: "/download" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Help", href: "/help" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "/pricing" },
  ],
  cta: {
    github: { label: "GitHub", href: "https://github.com/CapSoftware" },
    login: { label: "Login", href: "/login" },
    signup: { label: "Sign Up", href: "/signup" },
  },
} as const;

interface CapSoHeaderProps {
  mode?: "light" | "dark";
}

export default function CapSoHeader({ mode = "light" }: CapSoHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="m-4 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-5 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="font-bold text-xl text-gray-900">
            {CONTENT.logo}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {CONTENT.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={CONTENT.cta.github.href}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              {CONTENT.cta.github.label}
            </a>
            <a
              href={CONTENT.cta.login.href}
              className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              {CONTENT.cta.login.label}
            </a>
            <a
              href={CONTENT.cta.signup.href}
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              {CONTENT.cta.signup.label}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <motion.div animate={{ rotate: mobileMenuOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-gray-200"
          >
            <div className="px-5 py-4 space-y-4">
              {CONTENT.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <a
                  href={CONTENT.cta.login.href}
                  className="block px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                >
                  {CONTENT.cta.login.label}
                </a>
                <a
                  href={CONTENT.cta.signup.href}
                  className="block px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium text-center"
                >
                  {CONTENT.cta.signup.label}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
