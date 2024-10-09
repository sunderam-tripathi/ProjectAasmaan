/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "",
        foreground: "var(--foreground)",
        green: "#07FCOO",
        "light-green": "#56FF1B",
        "dark-green": "#011406",
        "dark-gray": "#011C10",
        black: "#000000",
      },
    },
    fontFamily: {
      prestiege: ["prestige-elite-std", "Serif"],
      "base-mono": ["base-mono-wide", "sans-serif"],
      "base-mono-narrow": ["base-mono-narrow", "sans-serif"],
    },
  },
  plugins: [],
};
