import { RitualSteps } from "@/components/ritual/RitualSteps";

export default function RitualPage() {
  return (
    <main className="pt-24">
      <section className="section-pad min-h-screen bg-[linear-gradient(#f6f1ea,#e7ddd0)]">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.28em] text-ink/45">RITUAL</p>
          <h1 className="font-display mt-8 max-w-4xl text-6xl leading-tight md:text-8xl">
            Scroll slows time. Breath becomes interface.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-9 text-ink/62">
            The ritual system is a guided meditation layer for product
            ownership. It makes commerce feel less like urgency and more like
            return.
          </p>
        </div>
      </section>
      <section className="section-pad">
        <div className="mx-auto max-w-7xl">
          <RitualSteps />
        </div>
      </section>
    </main>
  );
}
