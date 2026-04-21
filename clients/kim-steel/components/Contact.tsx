"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      setForm({ name: "", phone: "", company: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      style={{ backgroundColor: "#ffffff", padding: "48px 80px 56px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="text-center mb-16">
          <p className="text-[#c9a227] text-sm font-bold tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0f2347]">견적 문의</h2>
          <div className="w-12 h-1 bg-[#c9a227] mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* 연락처 정보 */}
          <div>
            <h3 className="text-xl font-black text-[#0f2347] mb-8">연락처 정보</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1a3a6b] flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-[#0f2347] text-sm">전화번호</p>
                  <p className="text-gray-600 text-sm mt-1">화성본점: 031-366-5661</p>
                  <p className="text-gray-600 text-sm">오산점: 031-667-7211</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1a3a6b] flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-[#0f2347] text-sm">이메일</p>
                  <p className="text-gray-600 text-sm mt-1">kimsteel88@naver.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1a3a6b] flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-[#0f2347] text-sm">주소</p>
                  <p className="text-gray-600 text-sm mt-1">경기도 화성시 팔탄면 버들로 1485</p>
                  <p className="text-gray-600 text-sm">경기도 오산시</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1a3a6b] flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-[#0f2347] text-sm">운영시간</p>
                  <p className="text-gray-600 text-sm mt-1">평일 09:00 ~ 18:00</p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-gray-50 p-6 border-l-4 border-[#c9a227]">
              <p className="text-sm text-gray-600 leading-relaxed">
                문의 접수 후 <strong>영업일 기준 1일 이내</strong> 담당자가 연락드립니다.
                긴급한 경우 전화로 직접 문의해 주세요.
              </p>
            </div>
          </div>

          {/* 문의 폼 */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-[#0f2347] mb-1">이름 *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#1a3a6b] transition-colors"
                  placeholder="홍길동"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0f2347] mb-1">연락처 *</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#1a3a6b] transition-colors"
                  placeholder="010-0000-0000"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-[#0f2347] mb-1">회사명</label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#1a3a6b] transition-colors"
                placeholder="(주)예시건설"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#0f2347] mb-1">문의 내용 *</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#1a3a6b] transition-colors resize-none"
                placeholder="필요한 자재의 규격, 수량, 납품 일정 등을 입력해주세요."
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[#1a3a6b] text-white py-4 text-sm font-bold tracking-wide hover:bg-[#0f2347] disabled:opacity-50 transition-colors"
            >
              {status === "loading" ? "전송 중..." : "문의 보내기"}
            </button>
            {status === "done" && (
              <p className="text-green-600 text-sm text-center">문의가 접수되었습니다. 감사합니다!</p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm text-center">전송 중 오류가 발생했습니다. 전화로 문의해 주세요.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
