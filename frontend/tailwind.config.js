/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#EDF1F6',
        secondaryBackground: '#F2F4F7',
        backgroundPurple: "rgba(15, 0, 37, 1)",
        spanHeader: "#c1095a",
        mainBackground: "",
      },
      fontFamily: {
        'pixelfy': ["Pixelify Sans", "sans-serif"],
        'sofia': ["Sofia Sans Condensed", "sans-serif"]
      },
    },
  },
  plugins: [],
}

