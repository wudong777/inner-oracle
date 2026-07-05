import Link from "next/link";
import { navItems } from "@/lib/data";

export function AxisSystem() {
  return (
    <aside className="hidden lg:flex fixed right-10 top-1/2 z-40 -translate-y-1/2 flex-col gap-5 text-[0.62rem] tracking-[0.2em] text-ink/42">
      <span className="ml-[0.18rem] h-2 w-2 rounded-full border border-ink/35" />
      {navItems.map((item) => (
        <Link
          className="relative flex items-center gap-6 whitespace-nowrap transition hover:text-ink"
          href={item.href}
          key={item.href}
        >
          <span className="h-2 w-2 rounded-full border border-ink/28 bg-ivory" />
          <span className="absolute left-[0.42rem] top-2 h-9 w-px bg-ink/16" />
          {item.label}
        </Link>
      ))}
      <span className="ml-[0.18rem] h-2 w-2 rounded-full bg-ink/40" />
    </aside>
  );
}
