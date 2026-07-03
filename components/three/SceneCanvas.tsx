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
  camera = { position: [8, 8, 8], fov: 45 },
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
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} />
          {children}
        </Canvas>
      </Suspense>
    </div>
  );
}
