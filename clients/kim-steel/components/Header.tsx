"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "회사소개", href: "/about" },
  { label: "사업분야", href: "/products" },
  { label: "품질관리", href: "/quality" },
  { label: "견적문의", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const bgClass = isHome
    ? scrolled
      ? "bg-[#0f2347]/95 shadow-lg backdrop-blur-sm"
      : "bg-transparent"
    : "bg-[#0f2347]";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}>
      <div
        className="flex items-center justify-between h-[72px]"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "0 80px", width: "100%" }}
      >
        <Link href="/" className="flex items-center">
          <span className="text-white font-black text-xl md:text-2xl tracking-widest">KIM</span>
          <span className="text-[#c9a227] font-black text-xl md:text-2xl tracking-widest ml-1">STEEL</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium tracking-widest transition-colors ${
                pathname === item.href
                  ? "text-[#c9a227]"
                  : "text-white/90 hover:text-[#c9a227]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:031-366-5661"
            className="flex items-center gap-2 bg-[#c9a227] text-white px-4 py-2 text-sm font-semibold rounded hover:bg-[#b08a1a] transition-colors"
          >
            <Phone size={14} />
            031-366-5661
          </a>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0f2347] border-t border-white/10">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 text-white/90 hover:text-[#c9a227] hover:bg-white/5 text-sm font-medium border-b border-white/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
