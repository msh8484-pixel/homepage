// @ts-nocheck
"use client";

import { motion } from "motion/react";

interface SuperbillingIoHowItWorks1Props {
  mode?: "light" | "dark";
}

const steps = [
  {
    number: "01",
    title: "요금제 생성",
    description: "대시보드에서 간단하게 요금제를 생성하세요",
    image: "/images/step1.png",
  },
  {
    number: "02",
    title: "PG사 연동",
    description: "토스페이먼츠, 아임포트 등 여러 PG사 지원",
    image: "/images/step2.png",
  },
  {
    number: "03",
    title: "코드 한 줄로 구독 기능 구현",
    description: "SDK를 통해 간단하게 통합하세요",
    image: "/images/step3.png",
  },
];

export default function SuperbillingIoHowItWorks1({
  mode = "dark",
}: SuperbillingIoHowItWorks1Props) {
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold text-blue-400 bg-blue-950 px-3 py-1 rounded-full">
              CONCEPT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            3분만에 시작하세요
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              {/* Image */}
              <div className="bg-gray-800 rounded-2xl p-8 mb-6 flex-1 flex items-center justify-center min-h-[250px]">
                <div className="text-white/50">이미지</div>
              </div>

              {/* Content */}
              <div>
                <div className="text-4xl font-bold text-white/20 mb-2">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
