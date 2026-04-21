// @ts-nocheck
"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const IMAGES = {
  agentBg: "/scraped/cursor-com-2025-12-15/images/image-17.png",
  tabBgLight: "/scraped/cursor-com-2025-12-15/images/image-18.png",
  tabBgDark: "/scraped/cursor-com-2025-12-15/images/image-19.png",
  ecosystemBg: "/scraped/cursor-com-2025-12-15/images/image-20.png",
  avatarDylan: "/scraped/cursor-com-2025-12-15/images/image-25.png",
  avatarEric: "/scraped/cursor-com-2025-12-15/images/image-26.png",
  avatarRikki: "/scraped/cursor-com-2025-12-15/images/image-23.png",
  avatarRyo: "/scraped/cursor-com-2025-12-15/images/image-24.png",
  avatarCursor: "/scraped/cursor-com-2025-12-15/images/image-27.png",
} as const;

const FEATURES = [
  {
    id: "agent",
    title: "Agent turns ideas into code",
    description:
      "A human-AI programmer, orders of magnitude more effective than any developer alone.",
    link: "Learn about Agent →",
    linkHref: "/features#agent",
  },
  {
    id: "tab",
    title: "Magically accurate autocomplete",
    description:
      "Our custom Tab model predicts your next action with striking speed and precision.",
    link: "Learn about Tab →",
    linkHref: "/features#tab",
  },
  {
    id: "ecosystem",
    title: "Everywhere software gets built",
    description:
      "Cursor is in GitHub reviewing your PRs, a teammate in Slack, and anywhere else you work.",
    link: "Learn about Cursor's ecosystem →",
    linkHref: "/features#ecosystem",
  },
] as const;

// ============================================================================

interface CursorComFeature2Props {
  mode?: "light" | "dark";
}

// Agent Demo Window Component
function AgentDemoWindow() {
  const tasks = {
    inProgress: [
      "Enterprise Order Management System",
      "PyTorch MNIST Experiments",
      "Fix PR Comments Fetching Issue",
    ],
    readyForReview: [
      {
        title: "Analyze Tab vs Agent Usage Patterns",
        time: "now",
        summary:
          "All set! We now track focus share, switching rates, and rolling engagement so PMs can compare tab-first and agent-first",
        active: true,
      },
      {
        title: "Set up Cursor Rules for Dashboard",
        time: "30m",
        changes: { added: 37, removed: 0 },
      },
      {
        title: "Bioinformatics Tools",
        time: "45m",
        changes: { added: 135, removed: 21 },
      },
    ],
  };

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[10px] bg-[#1e1e1e] shadow-2xl ring-1 ring-white/10">
      {/* Window Chrome */}
      <div className="flex h-7 items-center justify-between border-b border-white/10 px-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        <span className="text-xs text-white/50">Cursor</span>
        <div className="w-12" />
      </div>

      {/* Content */}
      <div className="flex min-h-0 flex-1">
        {/* Sidebar */}
        <div className="w-56 border-r border-white/10 bg-[#252525] p-2">
          <div className="mb-2">
            <div className="mb-1 px-2 text-[10px] font-medium uppercase tracking-wider text-white/40">
              In Progress <span className="text-white/30">3</span>
            </div>
            {tasks.inProgress.map((task) => (
              <div
                key={task}
                className="flex items-start gap-2 rounded px-2 py-1.5 hover:bg-white/5"
              >
                <div className="mt-0.5 h-3.5 w-3.5 animate-spin rounded-full border border-white/30 border-t-transparent" />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[11px] text-white/60">
                    {task}
                  </div>
                  <div className="text-[10px] text-white/30">Generating</div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="mb-1 px-2 text-[10px] font-medium uppercase tracking-wider text-white/40">
              Ready for Review <span className="text-white/30">3</span>
            </div>
            {tasks.readyForReview.map((task) => (
              <div
                key={task.title}
                className={`flex items-start gap-2 rounded px-2 py-1.5 ${
                  task.active ? "bg-white/10" : "hover:bg-white/5"
                }`}
              >
                <svg
                  className={`mt-0.5 h-3.5 w-3.5 flex-shrink-0 ${task.active ? "text-white" : "text-white/40"}`}
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M8 13.9766C4.70117 13.9766 2.02344 11.2988 2.02344 8C2.02344 4.70117 4.70117 2.02344 8 2.02344C11.2988 2.02344 13.9766 4.70117 13.9766 8C13.9766 11.2988 11.2988 13.9766 8 13.9766ZM7.35547 10.7832C7.16211 10.7832 7.00391 10.7012 6.85742 10.5078L5.42773 8.75C5.3457 8.63867 5.29297 8.51562 5.29297 8.38672C5.29297 8.12891 5.49219 7.92383 5.74414 7.92383C5.9082 7.92383 6.03711 7.9707 6.17773 8.1582L7.33203 9.65234L9.76367 5.75C9.875 5.58008 10.0215 5.48633 10.168 5.48633C10.4141 5.48633 10.6484 5.65625 10.6484 5.91992C10.6484 6.04883 10.5723 6.17773 10.5078 6.29492L7.83008 10.5078C7.71289 10.6895 7.54883 10.7832 7.35547 10.7832Z" />
                </svg>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <div
                      className={`truncate text-[11px] ${task.active ? "text-white" : "text-white/60"}`}
                    >
                      {task.title}
                    </div>
                    <div className="flex-shrink-0 text-[10px] text-white/30">
                      {task.time}
                    </div>
                  </div>
                  {"summary" in task ? (
                    <div className="truncate text-[10px] text-white/40">
                      {task.summary}
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-[10px]">
                      <span className="text-green-400">
                        +{task.changes?.added}
                      </span>
                      <span className="text-red-400">
                        -{task.changes?.removed}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex min-w-0 flex-1 flex-col bg-[#1e1e1e]">
          <div className="border-b border-white/10 px-4 py-2 text-xs font-medium text-white/80">
            Analyze Tab vs Agent Usage Patterns
          </div>
          <div className="flex-1 overflow-auto p-4">
            <div className="mb-3 rounded-lg border border-white/10 bg-[#252525] px-3 py-2 text-[11px] text-white/70">
              Help me understand how teams split their focus between the tab
              view and the agents panel across our workspaces.
            </div>
            <div className="space-y-3 text-[11px]">
              <div className="flex items-center gap-1 text-white/40">
                <span>Thought</span>
                <span className="text-white/20">7s</span>
              </div>
              <div className="flex items-center gap-1 text-white/40">
                <span>Reviewed</span>
                <span className="text-white/20">
                  workspace usage exports and historical engagement notes
                </span>
              </div>
              <div className="text-white/80">
                I'll build an analytics toolkit that highlights tab versus
                agent adoption and switching behavior:
              </div>
              {[
                { name: "summary.py", added: 150, removed: 0 },
                { name: "segmentation.py", added: 94, removed: 0 },
                { name: "report.py", added: 40, removed: 0 },
                { name: "test_usage.py", added: 90, removed: 0 },
              ].map((file) => (
                <div
                  key={file.name}
                  className="flex items-center gap-2 rounded border border-white/10 bg-[#252525] px-3 py-2"
                >
                  <svg
                    className="h-3.5 w-3.5 text-white/40"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M4.14746 12.7578C3.03564 12.7578 2.48242 12.1992 2.48242 11.0767V2.92871C2.48242 1.81152 3.04102 1.24219 4.14746 1.24219H6.69873C7.30029 1.24219 7.63867 1.3335 8.04688 1.75244L11.0063 4.76562C11.436 5.20605 11.5166 5.50684 11.5166 6.19971V11.0767C11.5166 12.1938 10.9634 12.7578 9.85156 12.7578H4.14746Z" />
                  </svg>
                  <span className="font-medium text-white/80">{file.name}</span>
                  <span className="text-green-400">+{file.added}</span>
                  {file.removed > 0 && (
                    <span className="text-red-400">-{file.removed}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 p-3">
            <div className="rounded-lg border border-white/10 bg-[#252525] px-3 py-2">
              <span className="text-[11px] text-white/30">
                Plan, search, build anything...
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature Card Component
function FeatureCard({
  feature,
  isDark,
  reversed = false,
  children,
}: {
  feature: (typeof FEATURES)[number];
  isDark: boolean;
  reversed?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto mb-7 px-4 lg:px-6">
      <a
        href={feature.linkHref}
        className={`relative block overflow-hidden rounded-sm p-7 transition-colors ${
          isDark
            ? "bg-[#141414] hover:bg-[#1a1a1a]"
            : "bg-gray-50 hover:bg-gray-100"
        }`}
      >
        <div
          className={`grid grid-cols-1 items-center gap-6 lg:grid-cols-24 lg:gap-0`}
        >
          {/* Text Content */}
          <div
            className={`${reversed ? "order-1 lg:order-2 lg:col-start-17 lg:col-end-25 lg:pl-12" : "order-1 lg:col-start-1 lg:col-end-9 lg:pr-12"}`}
          >
            <div className="max-w-prose">
              <h3
                className={`text-lg font-normal md:text-xl ${isDark ? "text-white" : "text-gray-900"}`}
              >
                {feature.title}
              </h3>
              <p
                className={`mt-2 text-lg md:text-xl ${isDark ? "text-white/60" : "text-gray-600"}`}
              >
                {feature.description}
              </p>
              <div className="mt-6">
                <span
                  className={`text-sm font-medium ${isDark ? "text-white/80" : "text-gray-700"}`}
                >
                  {feature.link}
                </span>
              </div>
            </div>
          </div>

          {/* Media Content */}
          <div
            className={`${reversed ? "order-2 lg:order-1 lg:col-start-1 lg:col-end-17" : "order-2 lg:col-start-9 lg:col-end-25"}`}
          >
            {/* Media Border Container */}
            <div
              className={`relative grid grid-cols-1 grid-rows-1 overflow-hidden rounded-sm ${
                isDark ? "bg-[#1a1a1a]" : "bg-gray-100"
              }`}
            >
              {children}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function CursorComFeature2({
  mode = "dark",
}: CursorComFeature2Props) {
  const isDark = mode === "dark";

  return (
    <section
      className={`w-full py-20 ${isDark ? "bg-[#0a0a0a] text-white" : "bg-white text-gray-900"}`}
    >
      {/* Feature 1: Agent */}
      <FeatureCard feature={FEATURES[0]} isDark={isDark}>
        <div
          className="relative w-full select-none overflow-hidden"
          style={{ height: "min(780px, 70vh)", minHeight: "650px" }}
        >
          {/* Background Image */}
          <img
            src={IMAGES.agentBg}
            alt=""
            className="absolute inset-0 h-full w-full scale-110 transform object-cover brightness-[0.6]"
          />

          {/* Demo Window */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="h-[560px] w-[680px]"
              style={{
                boxShadow:
                  "0 28px 70px rgba(0, 0, 0, 0.14), 0 14px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255,255,255,0.1)",
              }}
            >
              <AgentDemoWindow />
            </div>
          </div>
        </div>
      </FeatureCard>
    </section>
  );
}