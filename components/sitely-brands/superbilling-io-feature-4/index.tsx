// @ts-nocheck
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface SuperbillingIoFeature4Props {
  mode?: "light" | "dark";
}

const tabs = [
  {
    id: "subscription",
    title: "구독 관리",
    description: "구독 상태, 결제일, 결제수단 관리",
    image: "/images/subscription.png",
  },
  {
    id: "history",
    title: "결제 내역",
    description: "지난 거래 기록 확인",
    image: "/images/history.png",
  },
  {
    id: "invoice",
    title: "청구서 관리",
    description: "세금계산서, 영수증 관리",
    image: "/images/invoice.png",
  },
  {
    id: "widget",
    title: "위젯 내장",
    description: "웹사이트에 바로 내장 가능",
    image: "/images/widget.png",
  },
];

const colors = [
  { bg: "bg-blue-50", border: "border-blue-200" },
  { bg: "bg-purple-50", border: "border-purple-200" },
  { bg: "bg-pink-50", border: "border-pink-200" },
  { bg: "bg-green-50", border: "border-green-200" },
];

export default function SuperbillingIoFeature4({
  mode = "dark",
}: SuperbillingIoFeature4Props) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
        >
          노코드 결제 UI
        </motion.h2>
        <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
          개발자 없이도 결제 UI를 구축할 수 있습니다.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === index
                  ? "bg-white text-gray-950 ring-2 ring-white"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {tab.title}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-bold text-white">
              {tabs[activeTab].title}
            </h3>
            <p className="text-white/70 text-lg">
              {tabs[activeTab].description}
            </p>
          </motion.div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`rounded-2xl p-8 ${colors[activeTab].bg} ${colors[activeTab].border} border-2`}
            style={{ minHeight: "300px" }}
          />
        </div>
      </div>
    </section>
  );
}
