import Link from "next/link";
import { BrandMark } from "@/components/navigation/BrandMark";
import { navItems } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t hairline bg-ivory px-5 py-12 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <BrandMark compact />
          <p className="mt-6 max-w-sm text-sm leading-7 text-ink/62">
            Emotional commerce for objects, rituals, and the quiet architecture
            of attention.
          </p>
        </div>
        <div className="grid gap-3 text-[0.7rem] tracking-[0.22em] text-ink/62">
          {navItems.map((item) => (
            <Link className="transition hover:text-ink" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <address className="not-italic text-sm leading-7 text-ink/65">
          <a href="mailto:contact@inneroracle.com.cn">contact@inneroracle.com.cn</a>
          <br />
          <a href="tel:+8619858977400">+86 19858977400</a>
        </address>
      </div>
    </footer>
  );
}
