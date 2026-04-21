// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#F5F5F5",
    textPrimary: "#09090B",
    textSecondary: "#71717A",
    accent: "#E07B39",
  },
  dark: {
    background: "#1A1A1A",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  website: string;
  quote: string;
  rating: number;
  avatar?: string;
  highlight?: string;
}

interface DatafaStTestimonial3Props {
  mode?: "light" | "dark";
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    website: "sarahchen.com",
    quote: "DataFast helped me understand exactly which marketing channels drive paying customers. My ROI increased by 340% in 3 months.",
    rating: 5,
    highlight: "which marketing channels drive paying customers",
  },
  {
    name: "Alex Thompson",
    website: "alexthompson.io",
    quote: "As a SaaS founder, I needed analytics that actually made sense. DataFast delivers insights I can act on immediately.",
    rating: 5,
    highlight: "insights I can act on immediately",
  },
  {
    name: "Maria Rodriguez",
    website: "mariar.dev",
    quote: "Finally, an analytics tool that doesn't overwhelm me with useless metrics. DataFast is beautifully simple and incredibly powerful.",
    rating: 5,
    highlight: "beautifully simple and incredibly powerful",
  },
];

export default function DatafaStTestimonial3({
  mode = "dark",
  testimonials = defaultTestimonials,
}: DatafaStTestimonial3Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="w-full py-16 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="rounded-xl border p-6"
              style={{
                borderColor: mode === "dark" ? "#374151" : "#E5E7EB",
                backgroundColor: mode === "dark" ? "#242424" : "#FFFFFF",
              }}
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5"
                    fill={colors.accent}
                    style={{ color: colors.accent }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="mb-6 text-sm leading-relaxed"
                style={{ color: colors.textSecondary }}
              >
                {testimonial.highlight ? (
                  <>
                    {testimonial.quote.split(testimonial.highlight).map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span
                            style={{
                              backgroundColor: `${colors.accent}20`,
                              color: colors.accent,
                            }}
                            className="px-1"
                          >
                            {testimonial.highlight}
                          </span>
                        )}
                      </span>
                    ))}
                  </>
                ) : (
                  testimonial.quote
                )}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600"
                />
                <div>
                  <div className="font-semibold" style={{ color: colors.textPrimary }}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm" style={{ color: colors.textSecondary }}>
                    {testimonial.website}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
