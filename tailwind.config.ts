import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        encre: "#16130F",
        papier: "#F6F1E7",
        rouille: "#C2410C",
      },
      fontFamily: {
        titre: ["var(--font-titre)", "Georgia", "serif"],
        texte: ["var(--font-texte)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
