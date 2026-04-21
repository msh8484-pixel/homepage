// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { Star, Play } from "lucide-react";

const COLORS = {
  light: {
    background: "#FFFFFF",
    cardBg: "#F9FAFB",
    textPrimary: "#000000",
    textSecondary: "#666666",
    accentBg: "#F59E0B",
    borderColor: "#E5E7EB",
  },
  dark: {
    background: "#0A0A0A",
    cardBg: "#1F2937",
    textPrimary: "#FFFFFF",
    textSecondary: "#CCCCCC",
    accentBg: "#F59E0B",
    borderColor: "#374151",
  },
} as const;

interface Testimonial {
  type: "video" | "text" | "tweet";
  poster?: string;
  title?: string;
  content?: string;
  author?: string;
  role?: string;
  avatar?: string;
  verified?: boolean;
  likes?: number;
  replies?: number;
}

interface ShipfaStTestimonial8Props {
  mode?: "light" | "dark";
  title?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    type: "video",
    poster: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop",
    title: "ShipFast Changed Everything",
  },
  {
    type: "text",
    title: "Amazing Time Saver",
    content: "I launched my first SaaS in just 2 weeks using ShipFast. Couldn't have done it without these templates!",
    author: "Sarah Chen",
    role: "Founder",
  },
  {
    type: "tweet",
    content: "Just hit $10k MRR thanks to ShipFast. Finally have more time to focus on product instead of boilerplate code.",
    author: "Alex Johnson",
    verified: true,
  },
  {
    type: "video",
    poster: "https://images.unsplash.com/photo-1516321318423-f06f70674e90?w=500&h=300&fit=crop",
    title: "From Idea to Launch",
  },
  {
    type: "text",
    title: "Best Investment Ever",
    content: "The documentation is incredible. Saved me weeks of configuration and setup time.",
    author: "Mike Wong",
    role: "Developer",
  },
  {
    type: "tweet",
    content: "ShipFast is the ultimate indie hacker's toolkit. Highly recommend to anyone building SaaS.",
    author: "Emma Davis",
    verified: true,
  },
  {
    type: "video",
    poster: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    title: "Scaling with ShipFast",
  },
  {
    type: "text",
    title: "Incredible Community",
    content: "Not just the code, but the community support is amazing. Everyone is so helpful!",
    author: "Lisa Park",
    role: "Entrepreneur",
  },
  {
    type: "tweet",
    content: "Went from 0 to $50k ARR in 3 months with ShipFast. The boilerplate alone is worth it.",
    author: "Tom Anderson",
    verified: true,
  },
  {
    type: "video",
    poster: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=300&fit=crop",
    title: "Real Results",
  },
  {
    type: "text",
    title: "Game Changer",
    content: "Finally launched the product I've been thinking about for years. ShipFast made it possible.",
    author: "Chris Brown",
    role: "Product Manager",
  },
  {
    type: "tweet",
    content: "If you're thinking about buying ShipFast, just do it. Best $299 I ever spent.",
    author: "Rachel Green",
    verified: true,
  },
];

export default function ShipfaStTestimonial8({
  mode = "light",
  title = "Join thousands of makers building with ShipFast",
  testimonials = defaultTestimonials,
}: ShipfaStTestimonial8Props) {
  const colors = COLORS[mode];

  // Distribute testimonials across columns
  const columns = [[], [], [], []] as Testimonial[][];
  testimonials.forEach((testimonial, index) => {
    columns[index % 4].push(testimonial);
  });

  return (
    <section
      className="py-24 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          style={{ color: colors.textPrimary }}
        >
          {title}
        </motion.h2>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-6">
              {column.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: (colIndex * 0.1 + index * 0.05),
                  }}
                  className="rounded-xl p-6 h-full flex flex-col"
                  style={{ backgroundColor: colors.cardBg }}
                >
                  {testimonial.type === "video" && (
                    <>
                      <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-gray-700 group cursor-pointer">
                        <img
                          src={testimonial.poster}
                          alt={testimonial.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                          <Play
                            className="w-12 h-12 text-white opacity-75 group-hover:opacity-100 transition-opacity"
                            fill="white"
                          />
                        </div>
                      </div>
                      <p
                        className="font-semibold"
                        style={{ color: colors.textPrimary }}
                      >
                        {testimonial.title}
                      </p>
                    </>
                  )}

                  {testimonial.type === "text" && (
                    <>
                      <p
                        className="font-semibold mb-3"
                        style={{ color: colors.textPrimary }}
                      >
                        {testimonial.title}
                      </p>
                      <p
                        className="mb-4 flex-grow"
                        style={{ color: colors.textSecondary }}
                      >
                        {testimonial.content}
                      </p>
                      <div className="border-t pt-4" style={{ borderColor: colors.borderColor }}>
                        <p
                          className="font-semibold text-sm"
                          style={{ color: colors.textPrimary }}
                        >
                          {testimonial.author}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: colors.textSecondary }}
                        >
                          {testimonial.role}
                        </p>
                      </div>
                    </>
                  )}

                  {testimonial.type === "tweet" && (
                    <>
                      <div className="flex items-center gap-2 mb-4">
                        <img
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop"
                          alt={testimonial.author}
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-grow">
                          <div className="flex items-center gap-2">
                            <p
                              className="font-semibold text-sm"
                              style={{ color: colors.textPrimary }}
                            >
                              {testimonial.author}
                            </p>
                            {testimonial.verified && (
                              <span style={{ color: colors.accentBg }}>✓</span>
                            )}
                          </div>
                          <p
                            className="text-xs"
                            style={{ color: colors.textSecondary }}
                          >
                            @{testimonial.author?.toLowerCase().replace(" ", "")}
                          </p>
                        </div>
                      </div>
                      <p
                        className="mb-4"
                        style={{ color: colors.textSecondary }}
                      >
                        {testimonial.content}
                      </p>
                      <div className="flex gap-4 text-xs" style={{ color: colors.textSecondary }}>
                        <button className="hover:opacity-80 transition-opacity">
                          Reply
                        </button>
                        <button className="hover:opacity-80 transition-opacity">
                          Retweet
                        </button>
                        <button className="hover:opacity-80 transition-opacity flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {testimonial.likes || 123}
                        </button>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Heart = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
