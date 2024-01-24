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
        bgProduct:"#DCDBDB"
      },
      width: {
        sideBarWidth: "414px",
        productWidth: "923px",
      },
      fontSize:{
        productName: "16px"
      },
      borderRadius:{
        std: "10px"
      }
      
    },
  },
  plugins: [],
};
