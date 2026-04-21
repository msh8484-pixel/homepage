// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION - Edit these values to customize the component for your project
// ============================================================================

const COLORS = {
  light: {
    background: "#F5F0E8",
    text: "#1a1a1a",
    textMuted: "#6b7280",
  },
  dark: {
    background: "#0a0a0a",
    text: "#f5f5f5",
    textMuted: "#9ca3af",
  },
} as const;

const IMAGES = {
  logo: {
    path: "/scraped/antler-co-2025-12-15/images/image-50.avif",
    alt: "Airalo logo",
  },
  avatar: {
    path: "/scraped/antler-co-2025-12-15/images/image-51.avif",
    alt: "Bahadir Ozdemir",
  },
} as const;

const TESTIMONIAL = {
  company: "Airalo",
  quote: "Joining Antler offered something far more valuable than funding alone. It gave us the opportunity to surround ourselves with people who see potential, take risks, and build.",
  author: "Bahadir Ozdemir",
  role: "Founder & CEO",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface AntlerCoTestimonial3Props {
  mode?: "light" | "dark";
}

export default function AntlerCoTestimonial3({
  mode = "light",
}: AntlerCoTestimonial3Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Company Logo */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={IMAGES.logo.path}
            alt={IMAGES.logo.alt}
            className="h-12 object-contain"
          />
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p
            className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-6"
            style={{ color: colors.text }}
          >
            &ldquo;{TESTIMONIAL.quote}&rdquo;
          </p>
        </motion.blockquote>

        {/* Author */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Avatar */}
          <div className="mb-4 w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
            <img
              src={IMAGES.avatar.path}
              alt={IMAGES.avatar.alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name and Role */}
          <p
            className="text-lg font-medium"
            style={{ color: colors.text }}
          >
            {TESTIMONIAL.author}
          </p>
          <p
            className="text-sm"
            style={{ color: colors.textMuted }}
          >
            {TESTIMONIAL.role}, {TESTIMONIAL.company}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
