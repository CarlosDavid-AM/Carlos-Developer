/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: "1.16rem"
    },
    extend: {},
    colors: {
      "do-orange-mediun": "#E0B125",
      "neutral-text": "#73838C",
    }
  },
  plugins: [],
}