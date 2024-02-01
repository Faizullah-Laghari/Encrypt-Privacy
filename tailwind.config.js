/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: { max: "400px" },
      sm: { max: "639px" },
      md: { max: "767px" },
      lgmed: { max: "900px" },
      lg: { max: "1023px" },
      "1lg": { max: "1200px" },
      xl: { max: "1279px" },
      "1xl": { max: "1355px" },
      "2xl": { max: "1535px" },
      "3xl": { max: "1635px" },
    },
  },
  plugins: [],
};
