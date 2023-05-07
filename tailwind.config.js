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
        one_bg: "#F1FEC5",
        one_border: "#83A903",
        two_bg: "#B9F5E5",
        two_border: "#00C08D",
        three_bg: "#D0FDFF",
        three_border: "#03C7D1",
        four_bg: "#D3FBC7",
        four_border: "#104400",
        five_bg: "#BBFCFF",
        five_border: "#00BFC7",
        six_bg: "#FFDDF4",
        six_border: "#FF77D4",
      },
    },
  },
  plugins: [],
};
