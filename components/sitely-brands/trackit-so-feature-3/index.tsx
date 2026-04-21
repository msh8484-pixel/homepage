// @ts-nocheck
"use client";

import { motion } from "motion/react";

interface TrackitSoFeature3Props {
  mode?: "light" | "dark";
}

const features = [
  {
    title: "영업 기회 관리",
    description: "파이프라인 시각화, 드래그앤드롭, 전환율 지표",
    image: "/images/feature-sales.png",
  },
  {
    title: "고객 상호작용 타임라인",
    description: "이메일, 미팅, 통화, 메모, 작업을 한 곳에서 관리",
    image: "/images/feature-timeline.png",
  },
];

export default function TrackitSoFeature3({ mode = "dark" }: TrackitSoFeature3Props) {
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          고객 관리를 위한 다양한 기능
        </motion.h2>

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
              {/* Text on left/right alternately */}
              <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-lg mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {["기능 1", "기능 2", "기능 3"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image placeholder */}
              <div className={`order-${index % 2 === 0 ? 2 : 1}`}>
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
