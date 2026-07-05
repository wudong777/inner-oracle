"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!nodeRef.current) return;
    const tween = gsap.to(nodeRef.current, {
      scale: 1.05,
      opacity: 1,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <span className="inline-flex items-center gap-3">
      <span
        ref={nodeRef}
        className="block h-2.5 w-2.5 rounded-full bg-ink/80 opacity-60"
        aria-hidden="true"
      />
      <span className="font-display text-[0.95rem] tracking-[0.22em]">
        INNER ORACLE
      </span>
      {!compact && (
        <span className="font-serif-sc hidden text-sm tracking-[0.2em] text-ink/55 sm:inline">
          内在神谕
        </span>
      )}
    </span>
  );
}
