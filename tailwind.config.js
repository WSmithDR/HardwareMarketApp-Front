/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
<<<<<<< HEAD
        customColor: "#EEEBEB",
        colorButtons: "#01242F",
        colorBlueStar1: "#05607C",
      },
=======
        customColor: '#EEEBEB',
        colorButtons: '#01242F',
      },
      width:{
        sideBarWidth:"414px",
        productWidth:"923px"
      }
>>>>>>> ac351f60ff1d2a9c544415e0153ea3627675d10c
    },
  },
  plugins: [],
};
