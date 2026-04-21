"use client";

import { useParams } from "next/navigation";
import { Suspense } from "react";
import { brandsRegistry } from "@/lib/sitely-brands-registry";

export default function PreviewPage() {
  const params = useParams();
  const name = params.name as string;
  const Component = brandsRegistry[name];

  if (!Component) {
    return (
      <div className="flex items-center justify-center min-h-screen text-[#999] text-sm">
        컴포넌트를 찾을 수 없습니다: {name}
      </div>
    );
  }

  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-[#999] text-sm">로딩중...</div>}>
      <Component />
    </Suspense>
  );
}
