"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Mesh } from "three";

function Wireform() {
  const mesh = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.085;
    mesh.current.rotation.x += delta * 0.025;
  });

  return (
    <mesh ref={mesh} rotation={[0.35, 0.2, 0]}>
      <icosahedronGeometry args={[2.4, 1]} />
      <meshBasicMaterial
        color="#2e5bff"
        wireframe
        transparent
        opacity={0.24}
        depthWrite={false}
      />
    </mesh>
  );
}

/** One wireframe object, capped DPR, paused off-screen, static fallback for reduced motion / no WebGL. */
export default function HeroCanvas() {
  const reduce = useReducedMotion();
  const holder = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  // This component is dynamically imported with ssr: false, so the initializer runs only in the browser.
  const [supported] = useState(() => {
    try {
      const canvas = document.createElement("canvas");
      return Boolean(
        window.WebGLRenderingContext &&
          (canvas.getContext("webgl2") || canvas.getContext("webgl")),
      );
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const el = holder.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={holder} className="absolute inset-0" aria-hidden="true">
      {reduce || !supported ? (
        <div className="absolute inset-0 grid place-items-center">
          <div className="slow-spin h-[min(72%,420px)] w-[min(72%,420px)] rounded-full border border-dashed border-accent/25" />
        </div>
      ) : (
        <Canvas
          dpr={[1, 1.5]}
          frameloop={inView ? "always" : "never"}
          camera={{ position: [0, 0, 6.6], fov: 42 }}
          gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
          style={{ pointerEvents: "none" }}
        >
          <Wireform />
        </Canvas>
      )}
    </div>
  );
}
