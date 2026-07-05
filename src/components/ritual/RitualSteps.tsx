"use client";

import { motion } from "framer-motion";

const steps = [
  ["01", "Light the form", "Begin with one object, one surface, one softened source of light."],
  ["02", "Observe breath", "Let the rhythm of the body become the rhythm of the room."],
  ["03", "Release emotion", "Name what remains, then allow it to loosen its shape."],
];

export function RitualSteps() {
  return (
    <div className="grid gap-px border hairline bg-ink/12 md:grid-cols-3">
      {steps.map(([number, title, body]) => (
        <motion.div
          className="min-h-[340px] bg-ivory p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          key={number}
        >
          <p className="text-xs tracking-[0.28em] text-ink/40">{number}</p>
          <h3 className="font-display mt-24 text-3xl">{title}</h3>
          <p className="mt-6 text-sm leading-7 text-ink/62">{body}</p>
        </motion.div>
      ))}
    </div>
  );
}
