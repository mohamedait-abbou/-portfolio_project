"use client";

import dynamic from "next/dynamic";

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), {
  ssr: false,
  loading: () => null,
});

export default function HeroCanvasLoader() {
  return <HeroCanvas />;
}
