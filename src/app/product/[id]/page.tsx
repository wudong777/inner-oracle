import Link from "next/link";
import { notFound } from "next/navigation";
import { OrbStage } from "@/components/orb3d/OrbStage";
import { getProduct, products } from "@/lib/data";
import { getCheckoutUrl } from "@/lib/shopify";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id);
  if (!product) notFound();

  return (
    <main className="pt-24">
      <section className="section-pad min-h-screen">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="h-[520px]">
            <OrbStage color={product.hue} product />
          </div>
          <div>
            <p className="text-xs tracking-[0.28em] text-ink/45">
              {product.emotion}
            </p>
            <h1 className="font-display mt-6 text-6xl leading-tight md:text-8xl">
              {product.name}
            </h1>
            <p className="font-serif-sc mt-4 text-xl tracking-[0.18em] text-ink/52">
              {product.zh}
            </p>
            <p className="mt-8 max-w-xl text-lg leading-9 text-ink/62">
              {product.note}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href={getCheckoutUrl(product.id)}
                className="bg-ink px-8 py-4 text-xs tracking-[0.24em] text-ivory transition hover:bg-ink/82"
              >
                ADD TO CART · {product.price}
              </Link>
              <Link
                href="/ritual"
                className="border-b border-ink/30 pb-2 text-xs tracking-[0.24em]"
              >
                VIEW RITUAL
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad border-t hairline">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.28em] text-ink/45">CMS RITUAL CONTENT</p>
          <div className="mt-10 grid gap-px border hairline bg-ink/12 md:grid-cols-3">
            {product.ritual.map((step, index) => (
              <div className="min-h-[220px] bg-ivory p-8" key={step}>
                <p className="text-xs tracking-[0.24em] text-ink/42">
                  STEP {index + 1}
                </p>
                <p className="font-display mt-16 text-3xl">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
