// @ts-nocheck
"use client";

import { motion } from "motion/react";

const CONTENT = {
  headline: "Ready to upgrade how you communicate?",
  description: "Cap is the open source alternative to Loom.",
  cta: {
    primary: { label: "Download for free", href: "/download/apple-silicon" },
    secondary: { label: "Upgrade to Cap Pro", href: "/pricing" },
  },
  backgroundImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop",
} as const;

interface CapSoCta7Props {
  mode?: "light" | "dark";
}

export default function CapSoCta7({ mode = "light" }: CapSoCta7Props) {
  return (
    <section className="w-full py-[150px] lg:py-[250px] bg-white">
      <div className="w-full max-w-[1000px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col gap-6 items-center justify-center w-full p-[150px] lg:p-[250px] rounded-[20px] border border-gray-200 bg-cover bg-center"
          style={{ backgroundImage: `url(${CONTENT.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/30 rounded-[20px]" />
          <div className="relative z-10 flex flex-col gap-6 items-center justify-center text-center">
            <h2 className="text-4xl lg:text-5xl font-medium text-white">{CONTENT.headline}</h2>
            <p className="text-lg text-gray-100 max-w-[500px]">{CONTENT.description}</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href={CONTENT.cta.primary.href}
                className="transition-colors duration-200 rounded-full px-5 bg-gray-900 hover:bg-gray-800 border border-gray-900 text-white text-md h-12 flex justify-center items-center font-medium"
              >
                {CONTENT.cta.primary.label}
              </a>
              <a
                href={CONTENT.cta.secondary.href}
                className="transition-colors duration-200 rounded-full font-medium px-5 bg-blue-600 text-white border border-blue-800 shadow-[0_1.50px_0_0_rgba(255,255,255,0.20)_inset] hover:bg-blue-700 text-md h-12 flex items-center"
              >
                {CONTENT.cta.secondary.label}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
