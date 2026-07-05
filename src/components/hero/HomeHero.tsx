"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { OrbStage } from "@/components/orb3d/OrbStage";

export function HomeHero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.36], [1, 0.35]);
  const scale = useTransform(scrollYProgress, [0, 0.36], [1, 0.86]);

  return (
    <section className="relative flex min-h-[86vh] items-center justify-center overflow-hidden px-5 pt-20">
      <div className="soft-noise pointer-events-none absolute inset-0 opacity-70" />
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1.15fr_1fr]"
      >
        <div className="hidden self-end pb-14 text-xs leading-7 tracking-[0.22em] text-ink/45 lg:block">
          <p>ENTRY POINT</p>
          <p className="mt-12 max-w-[12rem] tracking-[0.08em]">
            Scroll becomes depth. The interface dissolves before it speaks.
          </p>
        </div>
        <div className="mx-auto flex min-h-[470px] w-full max-w-[620px] flex-col items-center justify-center text-center">
          <Link
            href="/collection"
            className="relative block h-[min(48vw,460px)] w-[min(48vw,460px)] min-h-[280px] min-w-[280px]"
            aria-label="Enter Axis System"
          >
            <OrbStage />
          </Link>
          <h1 className="font-display mt-[-2rem] text-5xl leading-none tracking-[0.08em] text-ink md:text-7xl">
            INNER ORACLE
          </h1>
          <p className="font-serif-sc mt-4 text-xl tracking-[0.32em] text-ink/65">
            内在神谕
          </p>
          <p className="mt-7 text-[0.72rem] tracking-[0.32em] text-ink/55">
            RETURN TO SILENCE, LISTEN WITHIN.
          </p>
        </div>
        <div className="hidden self-end justify-self-end pb-14 text-right text-xs leading-7 tracking-[0.22em] text-ink/45 lg:block">
          <p>DEPTH POINT</p>
          <p className="mt-12 max-w-[13rem] tracking-[0.08em]">
            Objects as emotional infrastructure. Commerce as a ritual of
            attention.
          </p>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-1/2 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-ink/0 via-ink/20 to-ink/0" />
    </section>
  );
}
