// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#F97316",
    background: "#FDF6EE",
    text: "#1a1a1a",
    textMuted: "#6b7280",
  },
  dark: {
    accent: "#FB923C",
    background: "#1C1917",
    text: "#f5f5f5",
    textMuted: "#9ca3af",
  },
} as const;

const SECURITY_FEATURES = [
  {
    icon: "shield",
    title: "데이터 통신 암호화",
    description: "모든 데이터 통신은 TLS/SSL 암호화로 보호됩니다.",
  },
  {
    icon: "cloud",
    title: "Zero-trust on AWS",
    description: "VPN, IdP, MFA 등 다층 보안 체제로 데이터를 보호합니다.",
  },
  {
    icon: "lock",
    title: "비밀 유지 서약",
    description: "모든 직원은 엄격한 NDA(비밀유지서약)에 서명합니다.",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Shield, Cloud, Lock } from "lucide-react";

interface BoltaIoTrust6Props {
  mode?: "light" | "dark";
}

export default function BoltaIoTrust6({ mode = "light" }: BoltaIoTrust6Props) {
  const colors = COLORS[mode];

  const getIcon = (type: string) => {
    switch (type) {
      case "shield":
        return <Shield className="w-8 h-8" />;
      case "cloud":
        return <Cloud className="w-8 h-8" />;
      case "lock":
        return <Lock className="w-8 h-8" />;
      default:
        return null;
    }
  };

  return (
    <section
      className="w-full py-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{ color: colors.text }}
          >
            고객 데이터를 최우선으로
            <br />
            <span style={{ color: colors.accent }}>보호합니다</span>
          </h2>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SECURITY_FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="flex justify-center mb-6"
                whileHover={{ scale: 1.1 }}
              >
                <div
                  className="p-4 rounded-full"
                  style={{ backgroundColor: colors.accent + "20" }}
                >
                  <div style={{ color: colors.accent }}>
                    {getIcon(feature.icon)}
                  </div>
                </div>
              </motion.div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: colors.text }}
              >
                {feature.title}
              </h3>
              <p
                className="text-base"
                style={{ color: colors.textMuted }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
