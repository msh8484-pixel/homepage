// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#2C93F2",
    accentLight: "#EBF5FF",
    border: "#E4E4E7",
    textPrimary: "#09090B",
    textSecondary: "#A1A1AA",
    cardBg: "#F4F4F5",
    white: "#FFFFFF",
  },
  dark: {
    accent: "#2C93F2",
    accentLight: "#1E3A5F",
    border: "#374151",
    textPrimary: "#F9FAFB",
    textSecondary: "#9CA3AF",
    cardBg: "#1F2937",
    white: "#111827",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

interface Tab {
  id: string;
  label: string;
  title: string;
  description: string;
}

interface GreetinghrFeature5Props {
  mode?: "light" | "dark";
}

const CONTENT = {
  badge: "데이터 기반 운영 · 최적화",
  headline: "지원자 여정을 최적화하고\n성공적으로 인재를 영입하세요",
  tabs: [
    {
      id: "interview",
      label: "면접 일정 조율",
      title: "이메일 핑퐁은 그만,\n단순해지는 면접 일정 조율",
      description: "몇 번의 클릭으로 면접관 일정 확인부터 지원자 일정 확정까지 간편하게 완료하세요.",
    },
    {
      id: "communication",
      label: "지원자 연락",
      title: "소통 창구는 하나로,\n메시지는 지원자마다 다르게",
      description: "지원자 소통 창구를 통합 관리하고, 개인화 메시지로 긍정적인 지원자 경험을 만드세요.",
    },
    {
      id: "analytics",
      label: "채용 데이터 분석",
      title: "데이터 기반으로 의사결정과\n채용 문제 해결을 명확하게",
      description: "채용 전환율과 리드타임 등 데이터를 한눈에 보고, 병목 지점을 빠르게 파악해 개선하세요.",
    },
  ],
} as const;

export default function GreetinghrFeature5({
  mode = "light",
}: GreetinghrFeature5Props) {
  const colors = COLORS[mode];
  const [activeTab, setActiveTab] = useState(CONTENT.tabs[0].id);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveTab(CONTENT.tabs[index].id);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section
      className="relative w-full py-20 lg:py-32"
      style={{ backgroundColor: colors.white }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div
            className="inline-block px-4 py-1.5 rounded-md text-sm mb-6"
            style={{
              backgroundColor: colors.white,
              border: `1px solid ${colors.border}`,
              color: colors.textPrimary,
            }}
          >
            {CONTENT.badge}
          </div>

          {/* Headline */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold whitespace-pre-line leading-tight"
            style={{ color: colors.textPrimary }}
          >
            {CONTENT.headline}
          </h2>
        </motion.div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">
          {/* Left: Sticky Tab Menu */}
          <div className="lg:w-48 shrink-0 lg:sticky lg:top-32">
            <nav className="flex lg:flex-col gap-2">
              {CONTENT.tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    scrollToSection(index);
                  }}
                  className="text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
                  style={{
                    color:
                      activeTab === tab.id
                        ? colors.accent
                        : colors.textSecondary,
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right: Scrollable Content */}
          <div className="flex-1 space-y-24">
            {CONTENT.tabs.map((tab, index) => (
              <motion.div
                key={tab.id}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Title + Arrow */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3
                      className="text-xl lg:text-2xl font-bold whitespace-pre-line leading-snug"
                      style={{ color: colors.textPrimary }}
                    >
                      {tab.title}
                    </h3>
                    <p
                      className="mt-3 text-sm lg:text-base max-w-lg"
                      style={{ color: colors.textSecondary }}
                    >
                      {tab.description}
                    </p>
                  </div>
                  <button
                    className="shrink-0 w-8 h-8 rounded flex items-center justify-center transition-colors hover:bg-gray-100"
                    style={{ color: colors.textPrimary }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Mockup */}
                <div
                  className="mt-8 p-8 lg:p-12 rounded-2xl"
                  style={{
                    backgroundColor: colors.cardBg,
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  <div className="text-center text-gray-500">Content Area</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
