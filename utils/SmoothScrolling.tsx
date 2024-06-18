"use client";
import { ReactLenis } from "lenis/react";

type Props = {
  children: React.ReactNode;
};

function SmoothScrolling({ children }: Props) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.01,
        duration: 1,
        smoothTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
