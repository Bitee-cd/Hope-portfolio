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
        pri: "#C5FF00",
        sec: "#1D191A",
        sec_dark: "#111010",
        sec_light: "#464646",
        ter: "#FFFFFF",
        grad1: "#692ADC",
      },
    },
  },
  plugins: [],
};
