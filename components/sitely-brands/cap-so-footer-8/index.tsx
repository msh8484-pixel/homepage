// @ts-nocheck
"use client";

const CONTENT = {
  logo: "Cap",
  tagline: "Beautiful screen recordings, owned by you.",
  sections: [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Download", href: "/download" },
        { label: "Pricing", href: "/pricing" },
        { label: "Changelog", href: "/changelog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Help Center", href: "/help" },
        { label: "Community", href: "/community" },
        { label: "API Docs", href: "/docs" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
        { label: "Press Kit", href: "/press" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Security", href: "/security" },
      ],
    },
  ],
  social: [
    { name: "Share2", href: "https://twitter.com/cap_so", icon: "twitter" },
    { name: "GitHub", href: "https://github.com/CapSoftware", icon: "github" },
    { name: "Discord", href: "https://discord.gg/cap", icon: "discord" },
  ],
  copyright: "© 2024 Cap Software, Inc. All rights reserved.",
} as const;

interface CapSoFooter8Props {
  mode?: "light" | "dark";
}

export default function CapSoFooter8({ mode = "light" }: CapSoFooter8Props) {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200">
      <div className="w-full max-w-[1440px] mx-auto px-5 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-bold text-xl text-gray-900 mb-2">{CONTENT.logo}</div>
            <p className="text-sm text-gray-600">{CONTENT.tagline}</p>
          </div>

          {/* Links */}
          {CONTENT.sections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="font-medium text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-600">{CONTENT.copyright}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {CONTENT.social.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label={social.name}
              >
                {social.name === "Share2" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 11-3.14 1.53 4.48 4.48 0 00-4.93-2.86c-2.72.05-5.6 1.25-5.78 5.81-2.94-.12-4.3-2-4.3-2S2.84 9.35 4.34 10.35s2.16 1.48 2.16 1.48S5.41 14 2 15.29c1.35.13 3.02-.37 4.26-1.26S9 19.85 15 18.5c.21 4.76-1.88 5.05-1.88 5.05S16 24 20 21.26a9.41 9.41 0 008-4.33c1.88 1.63 2.96 1.91 2.96 1.91" />
                  </svg>
                )}
                {social.name === "GitHub" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                )}
                {social.name === "Discord" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515a.074.074 0 00-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 00-5.487 0c-.163-.386-.395-.875-.607-1.25a.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.08.08 0 00.087-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.294.075.075 0 01.078-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 01.079.009c.12.098.246.198.373.294a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.076.076 0 00-.041.107c.36.699.769 1.364 1.226 1.994a.08.08 0 00.087.028 19.963 19.963 0 006.002-3.03.077.077 0 00.032-.054c.5-4.718-.838-8.812-3.549-12.456a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156c0-1.193.93-2.157 2.157-2.157c1.226 0 2.157.964 2.157 2.157c0 1.19-.93 2.155-2.157 2.155zm7.975 0c-1.183 0-2.157-.965-2.157-2.156c0-1.193.93-2.157 2.157-2.157c1.226 0 2.157.964 2.157 2.157c0 1.19-.931 2.155-2.157 2.155z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
