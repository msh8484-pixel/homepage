// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F5F5F5",
    cardBackground: "#FFFFFF",
    text: "#111111",
    textMuted: "#4C4C4C",
    borderColor: "#E5E5E5",
    buttonBackground: "#111111",
    buttonText: "#FFFFFF",
  },
  dark: {
    background: "#0F0F0F",
    cardBackground: "#1A1A1A",
    text: "#FFFFFF",
    textMuted: "#B3B3B3",
    borderColor: "#333333",
    buttonBackground: "#FFFFFF",
    buttonText: "#111111",
  },
} as const;

/**
 * 콘텐츠
 */
const CONTENT = {
  badge: "문의하기",
  heading: "질문이 있으신가요?",
  subheading: "언제든지 연락주세요",
  email: "contact@example.com",
  emailLabel: "Email",
  address: "서울시 강남구",
  addressLabel: "주소",
  mapUrl: "https://maps.google.com",
  form: {
    nameLabel: "이름",
    namePlaceholder: "이름을 입력해주세요",
    subjectLabel: "제목",
    subjectPlaceholder: "제목을 입력해주세요",
    emailLabel: "이메일",
    emailPlaceholder: "이메일을 입력해주세요",
    phoneLabel: "전화번호",
    phonePlaceholder: "전화번호를 입력해주세요",
    messageLabel: "문의사항",
    messagePlaceholder: "문의사항을 입력해주세요",
    submitButton: "보내기",
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useState } from "react";
import { MapPin, Mail, Send } from "lucide-react";

interface HookableAiContactProps {
  mode?: "light" | "dark";
  email?: string;
  address?: string;
  mapUrl?: string;
  onSubmit?: (data: {
    name: string;
    subject: string;
    email: string;
    phone: string;
    message: string;
  }) => void;
}

export default function HookableAiContact7({
  mode = "light",
  email = CONTENT.email,
  address = CONTENT.address,
  mapUrl = CONTENT.mapUrl,
  onSubmit,
}: HookableAiContactProps) {
  const colors = COLORS[mode];
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
    setFormData({
      name: "",
      subject: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section
      className="min-h-screen w-full py-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span
            className="inline-block rounded-full px-4 py-2 text-sm font-medium"
            style={{
              backgroundColor: colors.cardBackground,
              color: colors.text,
            }}
          >
            {CONTENT.badge}
          </span>
          <h1
            className="mt-6 text-4xl font-bold lg:text-5xl"
            style={{ color: colors.text }}
          >
            {CONTENT.heading}
          </h1>
          <p
            className="mt-3 text-lg"
            style={{ color: colors.textMuted }}
          >
            {CONTENT.subheading}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Email Card */}
            <a
              href={`mailto:${email}`}
              className="group block"
            >
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-xl p-6 transition-all"
                style={{
                  backgroundColor: colors.cardBackground,
                  borderColor: colors.borderColor,
                  border: `1px solid ${colors.borderColor}`,
                }}
              >
                <div className="flex items-start gap-4">
                  <Mail
                    className="h-6 w-6 flex-shrink-0 mt-1"
                    style={{ color: colors.text }}
                  />
                  <div>
                    <p
                      className="text-sm font-medium"
                      style={{ color: colors.textMuted }}
                    >
                      {CONTENT.emailLabel}
                    </p>
                    <p
                      className="text-lg font-semibold mt-1"
                      style={{ color: colors.text }}
                    >
                      {email}
                    </p>
                  </div>
                </div>
              </motion.div>
            </a>

            {/* Address Card */}
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-xl p-6 transition-all"
                style={{
                  backgroundColor: colors.cardBackground,
                  borderColor: colors.borderColor,
                  border: `1px solid ${colors.borderColor}`,
                }}
              >
                <div className="flex items-start gap-4">
                  <MapPin
                    className="h-6 w-6 flex-shrink-0 mt-1"
                    style={{ color: colors.text }}
                  />
                  <div>
                    <p
                      className="text-sm font-medium"
                      style={{ color: colors.textMuted }}
                    >
                      {CONTENT.addressLabel}
                    </p>
                    <p
                      className="text-lg font-semibold mt-1"
                      style={{ color: colors.text }}
                    >
                      {address}
                    </p>
                  </div>
                </div>
              </motion.div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div
              className="rounded-xl p-8"
              style={{
                backgroundColor: colors.cardBackground,
                borderColor: colors.borderColor,
                border: `1px solid ${colors.borderColor}`,
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={CONTENT.form.namePlaceholder}
                    className="w-full rounded-lg px-4 py-3 text-sm font-medium transition-colors"
                    style={{
                      backgroundColor: colors.background,
                      color: colors.text,
                      borderColor: colors.borderColor,
                      border: `1px solid ${colors.borderColor}`,
                    }}
                  />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder={CONTENT.form.subjectPlaceholder}
                    className="w-full rounded-lg px-4 py-3 text-sm font-medium transition-colors"
                    style={{
                      backgroundColor: colors.background,
                      color: colors.text,
                      borderColor: colors.borderColor,
                      border: `1px solid ${colors.borderColor}`,
                    }}
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={CONTENT.form.emailPlaceholder}
                  className="w-full rounded-lg px-4 py-3 text-sm font-medium transition-colors"
                  style={{
                    backgroundColor: colors.background,
                    color: colors.text,
                    borderColor: colors.borderColor,
                    border: `1px solid ${colors.borderColor}`,
                  }}
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={CONTENT.form.phonePlaceholder}
                  className="w-full rounded-lg px-4 py-3 text-sm font-medium transition-colors"
                  style={{
                    backgroundColor: colors.background,
                    color: colors.text,
                    borderColor: colors.borderColor,
                    border: `1px solid ${colors.borderColor}`,
                  }}
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={CONTENT.form.messagePlaceholder}
                  rows={4}
                  className="w-full rounded-lg px-4 py-3 text-sm font-medium resize-none transition-colors"
                  style={{
                    backgroundColor: colors.background,
                    color: colors.text,
                    borderColor: colors.borderColor,
                    border: `1px solid ${colors.borderColor}`,
                  }}
                />

                <button
                  type="submit"
                  className="w-full rounded-lg px-6 py-3 font-medium transition-all flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: colors.buttonBackground,
                    color: colors.buttonText,
                  }}
                >
                  <Send className="h-4 w-4" />
                  {CONTENT.form.submitButton}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
