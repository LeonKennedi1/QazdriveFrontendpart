import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#07080C",          // Очень темный фон сайта
          card: "#11131E",        // Цвет карточек и блоков
          orange: "#FF5C00",      // Основной оранжевый акцент (кнопки, активные элементы)
          orangeHover: "#E05200", // Цвет кнопок при наведении
          border: "#1C1E2A",      // Тонкие разделители
          textSecondary: "#8A90A2", // Вторичный текст серых оттенков
          success: "#22C55E",     // Зеленый цвет для статуса "Лидирую"
          error: "#EF4444",       // Красный цвет для статуса "Перебита"
        },
      },
    },
  },
  plugins: [],
};
export default config;