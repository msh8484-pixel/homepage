// @ts-nocheck
"use client";

import { motion } from "motion/react";

interface TrackitSoFeature4Props {
  mode?: "light" | "dark";
}

const features = [
  {
    title: "조직도 기반 데이터 접근 권한 제어",
    description: "역할 기반으로 정교한 권한 관리",
    bullets: ["계층별 권한 설정", "데이터 접근 제어", "감사 로그"],
    image: "/images/feature-org.png",
  },
  {
    title: "모바일 CRM 관리",
    description: "언제 어디서나 고객을 관리하세요",
    bullets: ["실시간 알림", "음성 메모", "명함 스캔", "연락처 연결"],
    image: "/images/feature-mobile.png",
  },
];

export default function TrackitSoFeature4({ mode = "dark" }: TrackitSoFeature4Props) {
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Content */}
              <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-lg mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-3 text-white"
                    >
                      <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image placeholder */}
              <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                <div className="bg-gray-800 rounded-2xl p-12 flex items-center justify-center min-h-[300px]">
                  <div className="text-white/50">이미지</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
