// @ts-nocheck
"use client";

import { motion } from "motion/react";

const CONTENT = {
  headline: "전 세계, 누적 채널 217,259 이상",
  description: "전 세계 기업들이 Channel.io를 사용 중입니다",
  logos: [
    { name: "LG Electronics", id: "lg" },
    { name: "Toss", id: "toss" },
    { name: "Coach", id: "coach" },
    { name: "Samsung", id: "samsung" },
    { name: "Coupang", id: "coupang" },
    { name: "Naver", id: "naver" },
    { name: "Kakao", id: "kakao" },
    { name: "Hyundai", id: "hyundai" },
    { name: "SK Telecom", id: "sk" },
    { name: "CJ", id: "cj" },
    { name: "GS", id: "gs" },
    { name: "Lotte", id: "lotte" },
    { name: "Daewoo", id: "daewoo" },
    { name: "Shinhan", id: "shinhan" },
    { name: "KIA", id: "kia" },
    { name: "Hanwha", id: "hanwha" },
  ],
} as const;

const COLORS = {
  light: {
    accent: "#7B68EE",
  },
  dark: {
    accent: "#9D8FFF",
  },
};

interface ChannelIoLogoCloudProps {
  mode?: "light" | "dark";
}

export default function ChannelIoLogoCloud({ mode = "light" }: ChannelIoLogoCloudProps) {
  const colors = mode === "dark" ? COLORS.dark : COLORS.light;

  return (
    <section className="w-full py-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{CONTENT.headline}</h2>
          <p className="text-xl text-gray-600">{CONTENT.description}</p>
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-8">
          {CONTENT.logos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                style={{ backgroundColor: colors.accent }}
              >
                {logo.name.slice(0, 2).toUpperCase()}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
