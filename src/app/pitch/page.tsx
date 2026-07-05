const pitchBlocks = [
  ["Brand vision", "Build the first luxury emotional commerce infrastructure where products, rituals, and editorial intelligence share one axis."],
  ["Market positioning", "Aesop-level restraint for a generation buying meaning, nervous-system care, and beautiful systems rather than loud aspiration."],
  ["Product system", "Seven Emotion Orbs, each with physical product, ritual content, 3D experience, and CMS-controlled storytelling."],
  ["Revenue model", "DTC product sales, limited drops, ritual subscriptions, brand collaborations, and licensing of the experience layer."],
  ["3D experience demo", "Three.js orb fields make the product catalog spatial, ambient, and memorable without turning the site into spectacle."],
  ["Commerce layer", "Shopify Headless powers checkout, inventory, pricing, and product operations under a custom Next.js front end."],
];

export default function PitchPage() {
  return (
    <main className="pt-24">
      <section className="section-pad border-b hairline">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.28em] text-ink/45">PITCH</p>
          <h1 className="font-display mt-8 max-w-6xl text-6xl leading-tight md:text-8xl">
            Next-generation luxury brand infrastructure.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-9 text-ink/62">
            A VC-ready view of INNER ORACLE as Emotional Commerce System,
            Consciousness Brand Platform, and scalable content-commerce engine.
          </p>
        </div>
      </section>
      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-px border hairline bg-ink/12 md:grid-cols-2">
          {pitchBlocks.map(([title, body]) => (
            <article className="min-h-[260px] bg-ivory p-8" key={title}>
              <h2 className="font-display text-4xl">{title}</h2>
              <p className="mt-7 text-sm leading-7 text-ink/62">{body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
