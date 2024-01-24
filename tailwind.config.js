/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        customColor: "#EEEBEB",
        colorButtons: "#01242F",
        colorStar: "#05607C",
      },
      width: {
        sideBarWidth: "414px",
        productWidth: "923px",
      },
    },
  },
  plugins: [],
};
