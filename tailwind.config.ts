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
        background: "#0a0b10", // Глубокий черный/синий как на фоне
        surface: "#12141c",    // Цвет карточек
        primary: {
          DEFAULT: "#ff6b00",  // Твой оранжевый
          hover: "#e66000",
        },
        accent: "#1e212d",     // Дополнительный темный для инпутов
      },
    },
  },
  plugins: [],
};
export default config;