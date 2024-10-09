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
        lightGreen: "#56FF1B",
        darkGreen: "#011406",
        darkGray: "#011C10",
        black: "#000000",
      },
    },
    fontFamily: {
      prestiege: ["Prestige Elite Std", "Serif"],
      baseMono: ["Base Mono OT", "sans-serif"],
    },
  },
  plugins: [],
};
