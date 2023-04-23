/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#4a69bd",
        secondary: "#4a69bd",
        body_bg:"#f1f2f6",
        text_color: "#ffffff",
        text_alternative: "#ecf0f1"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ["Fira Code", "monospace"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
