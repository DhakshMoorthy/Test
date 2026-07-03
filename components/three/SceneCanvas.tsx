"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
);

interface SceneCanvasProps {
  children: React.ReactNode;
  camera?: { position: [number, number, number]; fov?: number };
  className?: string;
}

export default function SceneCanvas({
  children,
  camera = { position: [5, 4, 5], fov: 42 },
  className = "",
}: SceneCanvasProps) {
  return (
    <div className={`canvas-container ${className}`}>
      <Suspense fallback={null}>
        <Canvas
          camera={{
            position: camera.position,
            fov: camera.fov,
            near: 0.1,
            far: 1000,
          }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.85} color="#f8fafc" />
          <directionalLight
            position={[6, 10, 4]}
            intensity={1.1}
            color="#ffffff"
            castShadow
          />
          <directionalLight
            position={[-4, 6, -2]}
            intensity={0.35}
            color="#93c5fd"
          />
          <hemisphereLight
            args={["#ffffff", "#e2e8f0", 0.5]}
          />
          {children}
        </Canvas>
      </Suspense>
    </div>
  );
}
