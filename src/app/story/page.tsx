export default function StoryPage() {
  const sections = [
    "People do not need to be repaired.",
    "They need to be gently realigned with their inner axis.",
    "INNER ORACLE is a consciousness structure system: objects, rituals, content, and commerce arranged around attention.",
  ];

  return (
    <main className="pt-24">
      {sections.map((section, index) => (
        <section
          className="section-pad flex min-h-[78vh] items-center border-b hairline"
          key={section}
        >
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.35fr_1fr]">
            <p className="text-xs tracking-[0.28em] text-ink/40">
              STORY 0{index + 1}
            </p>
            <h1 className="font-display max-w-5xl text-5xl leading-tight md:text-8xl">
              {section}
            </h1>
          </div>
        </section>
      ))}
    </main>
  );
}
