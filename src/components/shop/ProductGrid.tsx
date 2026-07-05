import Link from "next/link";
import { products } from "@/lib/data";

export function ProductGrid({ limit }: { limit?: number }) {
  const visible = limit ? products.slice(0, limit) : products;

  return (
    <div className="grid gap-px border hairline bg-ink/12 md:grid-cols-2 lg:grid-cols-3">
      {visible.map((product) => (
        <Link
          href={`/product/${product.id}`}
          className="group min-h-[320px] bg-ivory p-8 transition duration-700 hover:bg-mist"
          key={product.id}
        >
          <div className="flex items-start justify-between text-[0.68rem] tracking-[0.2em] text-ink/45">
            <span>{product.emotion}</span>
            <span>{product.price}</span>
          </div>
          <div className="mx-auto my-12 h-32 w-32 rounded-full transition duration-700 group-hover:scale-110"
            style={{
              background: `radial-gradient(circle at 34% 28%, #fffaf2, ${product.hue} 42%, rgba(14,14,14,0.08) 72%, transparent 73%)`,
              boxShadow: "0 28px 70px rgba(14,14,14,0.11)",
            }}
          />
          <h3 className="font-display text-3xl tracking-[0.04em] text-ink">
            {product.name}
          </h3>
          <p className="font-serif-sc mt-2 text-sm tracking-[0.18em] text-ink/50">
            {product.zh}
          </p>
          <p className="mt-6 max-w-sm text-sm leading-7 text-ink/62">
            {product.note}
          </p>
        </Link>
      ))}
    </div>
  );
}
