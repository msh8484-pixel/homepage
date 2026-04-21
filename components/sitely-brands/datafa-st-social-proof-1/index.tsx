// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#15202B",
    cardBg: "#1E2732",
    textPrimary: "#FFFFFF",
    textSecondary: "#8899A6",
    accent: "#E07B39",
    link: "#1DA1F2",
  },
  dark: {
    background: "#15202B",
    cardBg: "#1E2732",
    textPrimary: "#FFFFFF",
    textSecondary: "#8899A6",
    accent: "#E07B39",
    link: "#1DA1F2",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Heart, MessageCircle, Link2 } from "lucide-react";

interface Tweet {
  author: string;
  handle: string;
  avatar?: string;
  content: string;
  date: string;
  likes: number;
  hasMedia?: boolean;
  mediaUrl?: string;
  highlight?: string;
}

interface DatafaStSocialProof1Props {
  mode?: "light" | "dark";
  tweets?: Tweet[];
}

const defaultTweets: Tweet[] = [
  {
    author: "Wanderson Jackson",
    handle: "@jackson99ai",
    content: "I'm really enjoying @DataFast_, it's probably the best Analytics tools I've ever used in 14 years of career:) thanks @marclou",
    date: "Jun 25, 2025",
    likes: 7,
  },
  {
    author: "jack friks",
    handle: "@jackfriks",
    content: "name a cleaner & simpler web analytics tool i dare you",
    date: "Dec 18, 2024",
    likes: 54,
  },
  {
    author: "Kai Jiabo Feng",
    handle: "@KF_builds",
    content: "@marclou Marc I LOVE datafa.st! Came from Plausible and can't go back anymore.",
    date: "Jul 26, 2025",
    likes: 12,
  },
];

export default function DatafaStSocialProof1({
  mode = "dark",
  tweets = defaultTweets,
}: DatafaStSocialProof1Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="w-full py-16"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Masonry Grid */}
        <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
          {tweets.map((tweet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="mb-4 break-inside-avoid rounded-xl border border-gray-700/50 p-4"
              style={{ backgroundColor: colors.cardBg }}
            >
              {/* Tweet Header */}
              <div className="mb-3 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-white">{tweet.author}</span>
                    </div>
                    <span className="text-sm" style={{ color: colors.textSecondary }}>
                      {tweet.handle}
                    </span>
                  </div>
                </div>
                {/* X Logo */}
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>

              {/* Tweet Content */}
              <p className="mb-3 whitespace-pre-line text-white text-sm">
                {tweet.highlight ? (
                  <>
                    {tweet.content.split(tweet.highlight).map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span style={{ color: colors.accent }}>{tweet.highlight}</span>
                        )}
                      </span>
                    ))}
                  </>
                ) : (
                  tweet.content
                )}
              </p>

              {/* Tweet Footer */}
              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: colors.textSecondary }}>
                  {tweet.date}
                </span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1" style={{ color: colors.textSecondary }}>
                    <Heart className="h-4 w-4 text-pink-500" fill="#EC4899" />
                    <span className="text-xs">{tweet.likes}</span>
                  </div>
                  <MessageCircle className="h-4 w-4" style={{ color: colors.textSecondary }} />
                  <Link2 className="h-4 w-4" style={{ color: colors.textSecondary }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
