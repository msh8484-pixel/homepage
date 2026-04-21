// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#F97316",
    badgeBg: "#FFF7ED",
    badgeText: "#F97316",
  },
  dark: {
    accent: "#FB923C",
    badgeBg: "#431407",
    badgeText: "#FDBA74",
  },
} as const;

const CONTENT = {
  badge: "고객 사례",
  title: "6,000개가 넘는 기업이",
  titleHighlight: "6,000개",
  description: "볼타로 업무 변화를 경험하고 있습니다.",
};

const TESTIMONIALS = [
  {
    company: "SPARTA",
    companyLogo: "https://via.placeholder.com/120x40?text=SPARTA",
    quote: "10분 걸리던 일이 1분 만에 끝나니 업무 효율이 2배 이상 높아졌어요.",
    author: "팀스파르타 재무회계팀",
    image: "https://via.placeholder.com/400x300?text=SPARTA",
  },
  {
    company: "채널톡",
    companyLogo: "https://via.placeholder.com/120x40?text=ChannelTalk",
    quote: "볼타는 세금계산서 발행 관리 서비스를 넘어 채널톡 업무 필수 툴이에요.",
    author: "채널톡 콜린님",
    image: "https://via.placeholder.com/400x300?text=ChannelTalk",
  },
  {
    company: "brandazine",
    companyLogo: "https://via.placeholder.com/120x40?text=Brandazine",
    quote: "이젠 볼타가 없으면 출근하고 싶지 않다. 생각될 정도로 잘 쓰고 있어요.",
    author: "인에디트 엄창엽님",
    image: "https://via.placeholder.com/400x300?text=Brandazine",
  },
];

const LOGOS = [
  { name: "SPARTA", image: "https://via.placeholder.com/100x30?text=SPARTA" },
  { name: "채널톡", image: "https://via.placeholder.com/100x30?text=ChannelTalk" },
  { name: "F1 studio", image: "https://via.placeholder.com/100x30?text=F1" },
  { name: "마이닭", image: "https://via.placeholder.com/100x30?text=Mydak" },
  { name: "GroupBy", image: "https://via.placeholder.com/100x30?text=GroupBy" },
  { name: "대전창조경제혁신센터", image: "https://via.placeholder.com/100x30?text=Daejeon" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface BoltaIoTestimonial2Props {
  mode?: "light" | "dark";
}

export default function BoltaIoTestimonial2({
  mode = "light",
}: BoltaIoTestimonial2Props) {
  const colors = COLORS[mode];

  return (
    <section className="w-full py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: colors.badgeBg, color: colors.badgeText }}
          >
            {CONTENT.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 whitespace-pre-line leading-relaxed"
          >
            <span style={{ color: colors.accent }}>{CONTENT.titleHighlight}</span>가 넘는 기업이
            <br />
            {CONTENT.description}
          </motion.h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.company} testimonial`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="h-8 mb-4 bg-gray-200 rounded">
                  <img
                    src={testimonial.companyLogo}
                    alt={testimonial.company}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <p className="text-gray-700 text-lg font-bold leading-relaxed mb-12">
                  {testimonial.quote}
                </p>
                <p className="text-sm text-gray-500">{testimonial.author}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8"
        >
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {LOGOS.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-8 opacity-70 hover:opacity-100 transition-opacity"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-full w-auto object-contain max-w-[100px]"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
