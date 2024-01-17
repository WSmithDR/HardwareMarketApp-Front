// import React from 'react'

import { Navbar } from "../../components/Navbar";

export const StartPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-customColor">
      {/* Contenido de tu página */}
      <Navbar />

      <h1 className="text-3xl text-center font-josefin relative bottom-4">
        Comienza A Comprar <br /> O vender tus <br /> productos
      </h1>

    <div className="p-12 relative bottom-4">
      <button className="bg-colorButtons text-white h-9 w-40 font-josefin px-4 py-2 rounded shadow-xl">Comenzar</button>
    </div>

    <div className="flex flex-row justify-between relative top-10">
        <img src="./public/images/igLogo.png" alt="logoig" className="p-5 cursor-pointer w-20 h-22 relative bottom-0" />
        <img src="./public/images/twitterLogo.png" alt="twitterLogo" className="p-5 cursor-pointer w-20 h-22 relative bottom-0" />
        <img src="./public/images/facebook-48.png" alt="facebookLogo" className="p-5 cursor-pointer w-20 h-22 relative bottom-0"/>
    </div>


    </div>
  );
};
