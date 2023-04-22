/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      mono: ['Fira Code', 'monospace'],
     poppins: ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}
