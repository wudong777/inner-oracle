export const slowFade = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
};

export const dissolve = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.4, ease: [0.65, 0, 0.35, 1] },
};
