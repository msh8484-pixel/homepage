// @ts-nocheck
"use client";

import { motion } from "motion/react";

interface TrackitSoFeature6Props {
  mode?: "light" | "dark";
}

const securityFeatures = [
  {
    title: "암호화된 저장소",
    description: "AES-256 암호화로 보호되는 데이터",
  },
  {
    title: "민감 정보 마스킹",
    description: "주민번호와 계좌번호는 화면에서 숨김",
  },
  {
    title: "이중 인증",
    description: "비밀번호와 인증 코드로 이중 보호",
  },
  {
    title: "자동 로그아웃",
    description: "일정 시간 미사용 시 자동 로그아웃",
  },
  {
    title: "IP 접근 제한",
    description: "사전 등록된 IP에서만 로그인 가능",
  },
  {
    title: "접근 로깅",
    description: "관리자 및 사용자 활동 기록",
  },
];

export default function TrackitSoFeature6({ mode = "dark" }: TrackitSoFeature6Props) {
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
            <span className="text-xs font-semibold text-red-400 bg-red-950 px-3 py-1 rounded-full">
              강력한 보안
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            보안을 최우선으로
          </h2>
          <p className="text-white/70">
            Trackit은 당신의 데이터 보안을 최우선으로 생각합니다.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-red-500/50 transition-colors"
            >
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
