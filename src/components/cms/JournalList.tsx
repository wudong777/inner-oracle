import { journalEntries } from "@/lib/data";

export function JournalList() {
  return (
    <div className="divide-y hairline border-y">
      {journalEntries.map((entry) => (
        <article className="grid gap-8 py-10 md:grid-cols-[0.8fr_1.4fr_0.5fr]" key={entry.title}>
          <div className="text-xs tracking-[0.22em] text-ink/45">
            {entry.date}
          </div>
          <div>
            <h2 className="font-display text-4xl tracking-[0.02em]">
              {entry.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-ink/62">
              {entry.content}
            </p>
          </div>
          <div className="text-xs tracking-[0.22em] text-ink/45">
            {entry.emotion_tag}
            <br />
            MOOD {entry.mood_level}/5
          </div>
        </article>
      ))}
    </div>
  );
}
