import Link from "next/link";
import { AxisSystem } from "@/components/axis/AxisSystem";
import { HomeHero } from "@/components/hero/HomeHero";
import { ProductGrid } from "@/components/shop/ProductGrid";

export default function Home() {
  return (
    <main>
      <AxisSystem />
      <HomeHero />
      <section className="section-pad border-t hairline">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs tracking-[0.28em] text-ink/45">AXIS SYSTEM</p>
            <h2 className="font-display mt-8 text-5xl leading-tight md:text-7xl">
              The object becomes a doorway.
            </h2>
          </div>
          <div className="max-w-2xl text-lg leading-9 text-ink/64">
            <p>
              INNER ORACLE is a consciousness brand platform for emotional
              products, guided rituals, editorial content, and headless
              commerce. Every product is treated as an Emotion Orb: a quiet
              container for attention.
            </p>
            <Link
              href="/collection"
              className="mt-10 inline-flex border-b border-ink/35 pb-2 text-xs tracking-[0.25em] transition hover:border-ink"
            >
              ENTER COLLECTION
            </Link>
          </div>
        </div>
      </section>
      <section className="section-pad pt-0">
        <ProductGrid limit={3} />
      </section>
    </main>
  );
}
