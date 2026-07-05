import { ProductGrid } from "@/components/shop/ProductGrid";

export default function CollectionPage() {
  return (
    <main className="pt-24">
      <section className="section-pad">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.28em] text-ink/45">COLLECTION</p>
          <h1 className="font-display mt-8 max-w-5xl text-6xl leading-tight md:text-8xl">
            Seven Emotion Orbs for a slower commercial future.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-9 text-ink/62">
            Each product carries a field: glow, distortion, expansion, and a
            ritual layer that connects Sanity content to Shopify commerce.
          </p>
        </div>
      </section>
      <section className="px-5 pb-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <ProductGrid />
        </div>
      </section>
    </main>
  );
}
