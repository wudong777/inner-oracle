import { JournalList } from "@/components/cms/JournalList";

export default function JournalPage() {
  return (
    <main className="pt-24">
      <section className="section-pad">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.28em] text-ink/45">JOURNAL</p>
          <h1 className="font-display mt-8 max-w-5xl text-6xl leading-tight md:text-8xl">
            Editorial notes from the emotional operating system.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-9 text-ink/62">
            Sanity-ready content with emotion tags, mood levels, dates, and
            long-form ritual writing.
          </p>
        </div>
      </section>
      <section className="px-5 pb-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <JournalList />
        </div>
      </section>
    </main>
  );
}
