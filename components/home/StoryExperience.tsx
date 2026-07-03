"use client";

import dynamic from "next/dynamic";

const HeroIntro = dynamic(() => import("@/components/home/HeroIntro"), {
  ssr: false,
});
const SceneChaos = dynamic(() => import("@/components/scenes/SceneChaos"), {
  ssr: false,
});
const SceneKannanware = dynamic(
  () => import("@/components/scenes/SceneKannanware"),
  { ssr: false }
);
const SceneOrderJourney = dynamic(
  () => import("@/components/scenes/SceneOrderJourney"),
  { ssr: false }
);
const SceneAIAgents = dynamic(
  () => import("@/components/scenes/SceneAIAgents"),
  { ssr: false }
);
const SceneDashboard = dynamic(
  () => import("@/components/scenes/SceneDashboard"),
  { ssr: false }
);
const SceneIndustries = dynamic(
  () => import("@/components/scenes/SceneIndustries"),
  { ssr: false }
);
const SceneGrowth = dynamic(() => import("@/components/scenes/SceneGrowth"), {
  ssr: false,
});
const SceneFinale = dynamic(() => import("@/components/scenes/SceneFinale"), {
  ssr: false,
});

export default function StoryExperience() {
  return (
    <main>
      <HeroIntro />
      <SceneChaos />
      <SceneKannanware />
      <SceneOrderJourney />
      <SceneAIAgents />
      <SceneDashboard />
      <SceneIndustries />
      <SceneGrowth />
      <SceneFinale />
    </main>
  );
}
