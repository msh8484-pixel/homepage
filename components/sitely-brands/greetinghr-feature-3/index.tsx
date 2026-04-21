// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#2C93F2",
    accentHover: "#1A7ED9",
    border: "#E4E4E7",
    textPrimary: "#09090B",
    textSecondary: "#A1A1AA",
    background: "#FFFFFF",
    cardBackground: "#F4F4F5",
  },
  dark: {
    accent: "#60A5FA",
    accentHover: "#3B82F6",
    border: "#27272A",
    textPrimary: "#FAFAFA",
    textSecondary: "#71717A",
    background: "#09090B",
    cardBackground: "#18181B",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Tab {
  id: string;
  label: string;
  title: string;
  description: string;
}

interface GreetinghrFeature3Props {
  mode?: "light" | "dark";
  badgeText?: string;
  heading?: string;
  tabs?: Tab[];
}

const defaultTabs: Tab[] = [
  {
    id: "career-site",
    label: "채용 홈페이지 빌더",
    title: "지원자를 사로잡는 첫인상, 채용 홈페이지로부터",
    description: "그리팅 채용 사이트 빌더로 차별화된 채용 홈페이지 기획부터 디자인까지 손쉽게 완성하세요.",
  },
  {
    id: "direct-sourcing",
    label: "다이렉트 소싱",
    title: "기다리는 채용을 넘어 먼저 찾아가는 인재 영입으로",
    description: "인재를 직접 찾아 지원까지 유도하는 다이렉트 소싱으로 최적의 인재를 확보하세요.",
  },
  {
    id: "talent-pool",
    label: "인재풀 구축",
    title: "지금 필요한 인재, 준비된 인재풀에서 빠르게",
    description: "전용 인재풀로 핵심 직무부터 잦은 충원이 필요한 포지션까지 원하는 시점에 바로 채용하세요.",
  },
];

export default function GreetinghrFeature3({
  mode = "light",
  badgeText = "유연한 모집 전략",
  heading = "성과를 만드는 인재,\n전략에 구애받지 말고 확보하세요",
  tabs = defaultTabs,
}: GreetinghrFeature3Props) {
  const colors = COLORS[mode];
  const [activeTab, setActiveTab] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -30% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex(
            (ref) => ref === entry.target
          );
          if (index !== -1) {
            setActiveTab(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        {/* Header */}
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <div
            className="mb-4 inline-flex items-center rounded-md border px-3 py-1.5"
            style={{
              borderColor: colors.border,
              backgroundColor: colors.background,
            }}
          >
            <span
              className="text-sm font-medium"
              style={{ color: colors.textPrimary }}
            >
              {badgeText}
            </span>
          </div>

          {/* Main Heading */}
          <h2
            className="whitespace-pre-line text-2xl font-semibold leading-tight md:text-3xl lg:text-4xl"
            style={{ color: colors.textPrimary }}
          >
            {heading}
          </h2>
        </motion.div>

        {/* Content Area */}
        <div className="relative flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Left: Tab Menu */}
          <div className="lg:sticky lg:top-24 lg:h-fit lg:w-[240px] lg:flex-shrink-0">
            <nav className="flex flex-row gap-2 overflow-x-auto pb-4 lg:flex-col lg:gap-1 lg:overflow-x-visible lg:pb-0">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(index)}
                  className="group flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors lg:w-full"
                  style={{
                    color:
                      activeTab === index
                        ? colors.accent
                        : colors.textSecondary,
                  }}
                >
                  <span>{tab.label}</span>
                  <ArrowRight
                    className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
                    style={{
                      opacity: activeTab === index ? 1 : undefined,
                      color: colors.accent,
                    }}
                  />
                </button>
              ))}
            </nav>
          </div>

          {/* Right: Content Sections */}
          <div className="flex-1 space-y-8 lg:space-y-16">
            {tabs.map((tab, index) => (
              <motion.div
                key={tab.id}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {/* Section Header */}
                <div className="mb-6">
                  <h3
                    className="whitespace-pre-line text-xl font-semibold leading-snug md:text-2xl mb-2"
                    style={{ color: colors.textPrimary }}
                  >
                    {tab.title}
                  </h3>
                  <p
                    className="max-w-xl text-sm leading-relaxed md:text-base"
                    style={{ color: colors.textSecondary }}
                  >
                    {tab.description}
                  </p>
                </div>

                {/* Placeholder */}
                <div
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] border"
                  style={{
                    borderColor: colors.border,
                    backgroundColor: colors.cardBackground,
                  }}
                >
                  <div className="h-full w-full flex items-center justify-center text-gray-500">
                    Video Content
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
