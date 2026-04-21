// @ts-nocheck
"use client";

import { motion } from "motion/react";

interface TrackitSoFeature5Props {
  mode?: "light" | "dark";
}

const INTEGRATIONS = [
  { name: "Kakao", logo: "🔔" },
  { name: "Telegram", logo: "✈️" },
  { name: "Google", logo: "🔍" },
  { name: "Naver", logo: "🏢" },
  { name: "Toss", logo: "💳" },
  { name: "Notion", logo: "📝" },
  { name: "Google Calendar", logo: "📅" },
  { name: "Slack", logo: "💬" },
];

export default function TrackitSoFeature5({ mode = "dark" }: TrackitSoFeature5Props) {
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
            <span className="text-xs font-semibold text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full">
              외부 시스템 연동
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            원하는 시스템과 연결하세요
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            이메일, 캘린더, 카카오톡, 내부 시스템 등 다양한 외부 시스템과 연동됩니다.
          </p>
        </motion.div>

        {/* Integration Circle */}
        <div className="relative w-full max-w-md mx-auto aspect-square">
          {/* Center logo */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-3xl">✓</span>
            </div>
          </motion.div>

          {/* Concentric circles */}
          {[1, 2, 3].map((circle) => (
            <div
              key={circle}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-700 rounded-full"
              style={{
                width: `${100 * circle}%`,
                height: `${100 * circle}%`,
              }}
            />
          ))}

          {/* Integration icons in circle */}
          {INTEGRATIONS.map((integration, index) => {
            const angle = (index / INTEGRATIONS.length) * 2 * Math.PI;
            const radius = 150;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <div className="w-14 h-14 bg-gray-800 rounded-lg flex items-center justify-center text-2xl border border-gray-700 hover:border-cyan-400 transition-colors">
                  {integration.logo}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
