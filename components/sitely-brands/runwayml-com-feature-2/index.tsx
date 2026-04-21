// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const COLORS = {
  light: {
    background: "#FFFFFF",
    textPrimary: "#000000",
    textSecondary: "#666666",
  },
  dark: {
    background: "#0A0A0A",
    textPrimary: "#FFFFFF",
    textSecondary: "#CCCCCC",
  },
} as const;

interface Feature {
  title: string;
  description: string;
  image: {
    path: string;
    alt: string;
  };
  buttonText?: string;
  buttonLink?: string;
}

interface RunwaymlComFeature2Props {
  mode?: "light" | "dark";
  sectionTitle?: string;
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    title: "Gen-4.5 Video Generation",
    description: "Generate cinematic videos with AI",
    image: {
      path: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop",
      alt: "Video generation",
    },
    buttonText: "Learn more",
    buttonLink: "#",
  },
  {
    title: "GWM Robotics",
    description: "AI-powered robotic manipulation",
    image: {
      path: "https://images.unsplash.com/photo-1531746790731-6c087fecd65b?w=400&h=300&fit=crop",
      alt: "Robotics",
    },
    buttonText: "Learn more",
    buttonLink: "#",
  },
  {
    title: "GWM Worlds",
    description: "Explorable interactive environments",
    image: {
      path: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      alt: "Worlds",
    },
    buttonText: "Learn more",
    buttonLink: "#",
  },
  {
    title: "GWM Avatars",
    description: "Conversational AI characters",
    image: {
      path: "https://images.unsplash.com/photo-1618005182384-a83a8e7b9000?w=400&h=300&fit=crop",
      alt: "Avatars",
    },
    buttonText: "Learn more",
    buttonLink: "#",
  },
];

export default function RunwaymlComFeature2({
  mode = "light",
  sectionTitle = "Our Features",
  features = defaultFeatures,
}: RunwaymlComFeature2Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="py-20 w-full"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12"
          style={{ color: colors.textPrimary }}
        >
          {sectionTitle}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col h-full"
            >
              <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                <Image
                  src={feature.image.path}
                  alt={feature.image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: colors.textPrimary }}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm mb-4 flex-grow"
                style={{ color: colors.textSecondary }}
              >
                {feature.description}
              </p>
              {feature.buttonLink && (
                <a
                  href={feature.buttonLink}
                  className="inline-flex items-center gap-2 font-semibold text-sm hover:opacity-80"
                  style={{ color: colors.textPrimary }}
                >
                  {feature.buttonText}
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
