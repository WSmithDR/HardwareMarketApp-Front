import React from 'react'

import { Navbar } from "../../components/Navbar";



export const StartPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-customColor">
      {/* Contenido de tu página */}
      <Navbar />

      <h1 className="text-3xl text-center font-josefin relative bottom-4 ">
        Comienza A Comprar <br /> O vender tus <br /> productos
      </h1>

      <div className="p-12 relative bottom-4">
        <a href="/store">
          <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#01242F] duration-300 bg-colorButtons text-white h-9 w-40 font-josefin px-4 py-2 rounded shadow-xl">
            Comenzar
          </button>
        </a>
      </div>

      <div className="flex flex-row justify-between relative top-10">
        <img
          src="./public/images/igLogo.png"
          alt="logoig"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-customColor p-5 cursor-pointer w-20 h-22 relative bottom-0"
        />
        <img
          src="./public/images/twitterLogo.png"
          alt="twitterLogo"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-customColor p-5 cursor-pointer w-20 h-22 relative bottom-0"
        />
        <img
          src="./public/images/facebook-48.png"
          alt="facebookLogo"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-customColor p-5 cursor-pointer w-20 h-22 relative bottom-0"
        />
      </div>
    </div>
  );
};
