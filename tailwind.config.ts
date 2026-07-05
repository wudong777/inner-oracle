import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ivory: "var(--ivory)",
        ash: "var(--ash)",
        ink: "var(--ink)",
        warm: "var(--warm)",
        bone: "var(--bone)",
        mist: "var(--mist)",
      },
      boxShadow: {
        hush: "0 28px 90px rgba(14,14,14,0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
