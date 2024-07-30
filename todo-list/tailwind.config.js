/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Quicksand: ["Quicksand", "sans-serif"],
        Fira: ["Fira Sans", "sans-serif"],
        Edu: ["Edu AU VIC WA NT Hand", "cursive"],
        Barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
