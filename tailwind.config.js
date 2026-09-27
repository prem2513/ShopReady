/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#FAF8F3",
        ink: "#1B1B1F",
        brand: {
          50: "#EEF0FF",
          100: "#DDE1FF",
          300: "#A5AEFF",
          500: "#4C4FE8",
          600: "#3B3ECC",
          700: "#2E31A3",
          900: "#1E2070",
        },
        clay: "#C6521E",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
