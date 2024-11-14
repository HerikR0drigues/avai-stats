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
        thirdBackground: "#FAFAFA",
        backgroundPurple: "rgba(15, 0, 37, 1)",
        spanHeader: "#c1095a",
        mainBackground: "",
        avaiMain: "#094066",
        avaiSecondary: "#EFF4FC",
        avaiThird: "#123654",
        avaiFourth: "#005B94"
      },
      fontFamily: {
        'pixelfy': ["Pixelify Sans", "sans-serif"],
        'sofia': ["Sofia Sans Condensed", "sans-serif"]
      },
    },
  },
  plugins: [],
}

