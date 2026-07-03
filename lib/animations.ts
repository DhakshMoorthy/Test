import { gsap } from "gsap";

export const EASE = {
  smooth: "power3.out",
  bounce: "back.out(1.4)",
  elastic: "elastic.out(1, 0.5)",
  cinematic: "power4.inOut",
} as const;

export function fadeUp(
  element: HTMLElement | null,
  delay = 0,
  duration = 1
) {
  if (!element) return;
  gsap.fromTo(
    element,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration, delay, ease: EASE.smooth }
  );
}

export function staggerReveal(
  elements: HTMLElement[] | NodeListOf<Element>,
  stagger = 0.1
) {
  gsap.fromTo(
    elements,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger,
      ease: EASE.smooth,
    }
  );
}

export function countUp(
  element: HTMLElement,
  target: number,
  duration = 2,
  prefix = "",
  suffix = ""
) {
  const obj = { value: 0 };
  gsap.to(obj, {
    value: target,
    duration,
    ease: "power2.out",
    onUpdate: () => {
      element.textContent = `${prefix}${Math.round(obj.value)}${suffix}`;
    },
  });
}
