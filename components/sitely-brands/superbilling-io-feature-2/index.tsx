// @ts-nocheck
"use client";

import { motion } from "motion/react";
import { Zap, Puzzle, Lock } from "lucide-react";

interface SuperbillingIoFeature2Props {
  mode?: "light" | "dark";
}

const features = [
  {
    icon: Zap,
    title: "Speed",
    description: "3분만에 만드는 구독결제",
    detail: "vs. 2-3개월 직접 구현",
  },
  {
    icon: Puzzle,
    title: "Usability",
    description: "효율적인 노코드 운영",
    detail: "연동 후 전부 자동 관리",
  },
  {
    icon: Lock,
    title: "Security",
    description: "안전한 결제 데이터 관리",
    detail: "PCI-DSS 준수",
  },
];

export default function SuperbillingIoFeature2({
  mode = "dark",
}: SuperbillingIoFeature2Props) {
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Why SuperBilling?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-pink-500" />
              <h3 className="text-xl font-bold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-white/80 mb-2">{feature.description}</p>
              <p className="text-sm text-white/60">{feature.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
