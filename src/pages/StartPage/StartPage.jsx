// import React from 'react'

import { Navbar } from "../../components/Navbar";

export const StartPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-customColor">
      {/* Contenido de tu página */}
      <Navbar />

      <h1 className="text-3xl text-center font-josefin">
        Comienza A Comprar <br /> O vender tus <br /> productos
      </h1>

    <div className="p-12">
      <button className="bg-black text-white h-9 w-40">Comenzar</button>
    </div>

    

    </div>
  );
};
