// @ts-nocheck
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const COLORS = {
  light: {
    bg: "#FFFFFF",
    text: "#1a1a1a",
    textMuted: "#666666",
    border: "#E5E5E5",
  },
  dark: {
    bg: "#1a1a1a",
    text: "#FFFFFF",
    textMuted: "#a0a0a0",
    border: "#333333",
  },
} as const;

interface SuperbillingIoFooter8Props {
  mode?: "light" | "dark";
}

export default function SuperbillingIoFooter8({
  mode = "dark",
}: SuperbillingIoFooter8Props) {
  const colors = COLORS[mode];
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <footer
      className="py-12 border-t"
      style={{ backgroundColor: colors.bg, borderColor: colors.border }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <h3
                className="font-bold text-lg mb-4"
                style={{ color: colors.text }}
              >
                슈퍼빌링
              </h3>
              <div
                className="space-y-2 text-sm"
                style={{ color: colors.textMuted }}
              >
                <p>사업자등록번호: 240-01-02321</p>
                <p>
                  주소: 경기도 안양시 만안구 안양로 123<br />
                  파크핸 빌딩 5층
                </p>
                <p>이메일: lead@awesome.dev</p>
              </div>
            </div>

            {/* Terms */}
            <div>
              <button
                onClick={() => setTermsOpen(!termsOpen)}
                className="flex items-center justify-between w-full mb-4 font-semibold"
                style={{ color: colors.text }}
              >
                약관 및 정책
                <ChevronDown
                  className="w-5 h-5 transition-transform"
                  style={{
                    transform: termsOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              {termsOpen && (
                <div
                  className="text-sm space-y-2"
                  style={{ color: colors.textMuted }}
                >
                  <p>이용약관</p>
                  <p>개인정보처리방침</p>
                  <p>환불정책</p>
                </div>
              )}
            </div>
          </div>

          {/* Copyright */}
          <div
            className="text-center text-sm pt-8 border-t"
            style={{ color: colors.textMuted, borderColor: colors.border }}
          >
            <p>Copyright 2025 SuperBilling. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
