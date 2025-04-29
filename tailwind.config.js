/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#78716c",
        inactive: "#44403c",
        accent: "#A3F7BF",
        textPrimary: "#90F6D7",
        textSecondary: "#a8a29e",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  safelist: [
    "scrollbar-thin",
    "scrollbar-thumb-gray-400",
    "scrollbar-thumb-green-200",
    "scrollbar-track-gray-200",
    "scrollbar-track-transparent",
  ],
};
