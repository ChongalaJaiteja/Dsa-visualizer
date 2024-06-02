/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        app: ["Raleway", "sans-serif"],
      },
      textColor: {
        primary: "var(--color-primary)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
