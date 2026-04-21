// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    bg: "rgba(255, 255, 255, 0.95)",
    text: "#1a1a1a",
    border: "#E5E5E5",
  },
  dark: {
    bg: "rgba(26, 26, 26, 0.95)",
    text: "#FFFFFF",
    border: "#333333",
  },
} as const;

const LOGO = {
  src: "/logo.png",
  alt: "SuperBilling",
  width: 32,
  height: 32,
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface SuperbillingIoHeaderProps {
  mode?: "light" | "dark";
}

export default function SuperbillingIoHeader({
  mode = "dark",
}: SuperbillingIoHeaderProps) {
  const colors = COLORS[mode];

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-sm border-b"
      style={{
        backgroundColor: colors.bg,
        borderColor: colors.border,
      }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src={LOGO.src}
            alt={LOGO.alt}
            width={LOGO.width}
            height={LOGO.height}
          />
          <span
            className="font-bold text-lg"
            style={{ color: colors.text }}
          >
            {LOGO.alt}
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" style={{ color: colors.text }} className="hover:opacity-70">
            기능
          </a>
          <a href="#" style={{ color: colors.text }} className="hover:opacity-70">
            가격
          </a>
          <a href="#" style={{ color: colors.text }} className="hover:opacity-70">
            문서
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-sm font-medium px-4 py-2 rounded-lg"
            style={{ color: colors.text }}
          >
            로그인
          </a>
          <button
            className="text-sm font-medium px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700"
          >
            시작하기
          </button>
        </div>
      </div>
    </header>
  );
}
