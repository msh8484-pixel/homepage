// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#FFFFFF",
    cardBg: "#F8F8F8",
    text: "#111111",
    textMuted: "#666666",
    accentColor: "#A06A20", // Brown/Bronze
    border: "#E5E5E5",
    buttonBg: "#111111",
    buttonText: "#FFFFFF",
  },
};

const DEFAULT_CASE_STUDIES = [
  {
    id: 1,
    title: "Fashion Brand",
    company: "StyleHub",
    category: "패션",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Beauty Product",
    company: "Glow Beauty",
    category: "뷰티",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Kitchen Supplies",
    company: "Chef's Choice",
    category: "주방용품",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Lifestyle Store",
    company: "Daily Life Co",
    category: "라이프스타일",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface CaseStudy {
  id: number;
  title: string;
  company: string;
  category: string;
  image: string;
}

interface ImwebMeTestimonial2Props {
  mode?: "light" | "dark";
  title?: string;
  caseStudies?: CaseStudy[];
}

export default function ImwebMeTestimonial2({
  mode = "light",
  title = "성공한 브랜드 사례",
  caseStudies = DEFAULT_CASE_STUDIES,
}: ImwebMeTestimonial2Props) {
  const colors = COLORS.light;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? caseStudies.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === caseStudies.length - 1 ? 0 : prev + 1
    );
  };

  const currentCase = caseStudies[currentIndex];
  const nextCase = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <section
      className="w-full py-20 md:py-32"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{ color: colors.text }}
          >
            {title}
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Main Case Study */}
          <motion.div
            key={currentCase.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="flex-1 rounded-2xl overflow-hidden relative group cursor-pointer"
          >
            <div className="relative h-96 md:h-[500px]">
              <Image
                src={currentCase.image}
                alt={currentCase.title}
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    color: "#FFFFFF",
                  }}
                >
                  {currentCase.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {currentCase.title}
                </h3>
                <p className="text-white/80">{currentCase.company}</p>
              </div>
            </div>
          </motion.div>

          {/* Controls and Preview */}
          <div className="flex-1 space-y-8">
            {/* Preview of Next Case */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden border-2"
              style={{ borderColor: colors.border }}
            >
              <div className="relative h-40 md:h-48">
                <Image
                  src={nextCase.image}
                  alt={nextCase.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="p-4" style={{ backgroundColor: colors.cardBg }}>
                <p
                  className="text-xs font-medium mb-1"
                  style={{ color: colors.accentColor }}
                >
                  {nextCase.category}
                </p>
                <p className="font-semibold" style={{ color: colors.text }}>
                  {nextCase.title}
                </p>
              </div>
            </motion.div>

            {/* Navigation Controls */}
            <div className="flex gap-4">
              <button
                onClick={goToPrevious}
                className="flex-1 py-3 rounded-lg border-2 font-semibold transition-all hover:bg-opacity-10"
                style={{
                  borderColor: colors.accentColor,
                  color: colors.accentColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.accentColor;
                  e.currentTarget.style.color = colors.buttonText;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = colors.accentColor;
                }}
              >
                <ChevronLeft className="w-5 h-5 inline mr-2" />
                이전
              </button>
              <button
                onClick={goToNext}
                className="flex-1 py-3 rounded-lg font-semibold transition-all"
                style={{
                  backgroundColor: colors.accentColor,
                  color: colors.buttonText,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.9";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
              >
                다음
                <ChevronRight className="w-5 h-5 inline ml-2" />
              </button>
            </div>

            {/* Keyboard Hint */}
            <p
              className="text-sm text-center"
              style={{ color: colors.textMuted }}
            >
              {currentIndex + 1} / {caseStudies.length}
            </p>
          </div>
        </div>

        {/* Dot Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mt-12"
        >
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="w-2 h-2 rounded-full transition-all"
              style={{
                backgroundColor:
                  index === currentIndex ? colors.accentColor : colors.border,
                width: index === currentIndex ? 24 : 8,
              }}
              aria-label={`Go to case study ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
