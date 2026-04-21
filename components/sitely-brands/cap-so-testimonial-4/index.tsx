// @ts-nocheck
"use client";

import { motion } from "motion/react";

const CONTENT = {
  headline: "Loved by creators and teams",
  testimonials: [
    {
      quote: "Cap has the most polished interface I've seen for screen recording. It's a joy to use.",
      author: "Sarah Chen",
      role: "Product Designer",
      image: "SC",
    },
    {
      quote: "The open source nature combined with great features makes Cap a no-brainer for our team.",
      author: "Alex Rodriguez",
      role: "Developer",
      image: "AR",
    },
    {
      quote: "Cap gives Loom some real competition. Better privacy, local editing, and competitive pricing.",
      author: "Jordan Park",
      role: "Content Creator",
      image: "JP",
    },
    {
      quote: "Instant Mode is a game changer. Record and share in seconds. Exactly what we needed.",
      author: "Emma Wilson",
      role: "Marketing Manager",
      image: "EW",
    },
    {
      quote: "Studio Mode gives me full control over my recordings. The editing capabilities are impressive.",
      author: "Marcus Johnson",
      role: "Video Producer",
      image: "MJ",
    },
    {
      quote: "AI features like auto-generated titles and transcripts save me hours of work every week.",
      author: "Lisa Martinez",
      role: "Course Creator",
      image: "LM",
    },
  ],
} as const;

interface CapSoTestimonialProps {
  mode?: "light" | "dark";
}

export default function CapSoTestimonial({ mode = "light" }: CapSoTestimonialProps) {
  return (
    <section className="w-full py-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">{CONTENT.headline}</h2>
        </div>

        {/* Desktop Layout - Overlapping Cards */}
        <div className="hidden md:flex justify-center items-center relative h-96 perspective">
          {CONTENT.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="absolute w-96 bg-white rounded-xl p-6 border border-gray-200 shadow-lg"
              style={{
                transform: `rotate(${(index - 2.5) * 5}deg) translateY(${Math.abs(index - 2.5) * 30}px)`,
                zIndex: 10 - Math.abs(index - 2.5),
              }}
            >
              <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Layout - Vertical Stack */}
        <div className="md:hidden space-y-6">
          {CONTENT.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg"
            >
              <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
