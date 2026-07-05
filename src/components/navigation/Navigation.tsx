import Link from "next/link";
import { navItems } from "@/lib/data";
import { BrandMark } from "@/components/navigation/BrandMark";

export function Navigation() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-5 py-5 md:px-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between text-[0.68rem] tracking-[0.22em] text-ink/70">
        <Link href="/" aria-label="INNER ORACLE home">
          <BrandMark />
        </Link>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              className="transition hover:text-ink"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          className="border-b border-ink/30 pb-1 text-ink transition hover:border-ink"
          href="/collection"
        >
          ENTER
        </Link>
      </nav>
    </header>
  );
}
