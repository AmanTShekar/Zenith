"use client";

import { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  // Space theme inspired settings
  // 'weighted' feel means a lower lerp or longer duration with a specific easing
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05, // Slower lerp for a heavier, inertia-driven feel
        duration: 1.5, // Longer duration for floating space-like movement
        smoothWheel: true,
        wheelMultiplier: 0.8, // Slightly less sensitive wheel
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
