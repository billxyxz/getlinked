/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "logo": ['ClashDisplay-Bold', 'sans-serif'],
        "btn": ['Montserrat', 'sans-serif'],
        "unica": ['Unica One', 'sans-serif'],
        "typo": ['Typo Hoop Demo', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

