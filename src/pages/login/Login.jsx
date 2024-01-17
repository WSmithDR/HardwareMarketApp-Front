import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-colorButtons  font-josefin ">
      <div className="max-[425px]:w-[90%] flex flex-col items-center justify-center w-4/5 h-[500px]  bg-customColor rounded-[10px]">
        <div className=" justify-center items-center w-[80%] h-4/6 flex flex-col gap-10  p-2.5 border border-neutral-900">
          <h1 className="text-[36px] text-center font-light ">
            Iniciar Sesión
          </h1>
          <input
            className="max-[425px]:w-[100%] w-[50%] h-[37px] bg-[#C8C7C7] px-2 text-[16px] rounded-[5px] text-[#01242F]  outline-none"
            placeholder="Telefono/Nombre de usuario/Correo"
          ></input>
          <input
            className="max-[425px]:w-[100%] w-[50%] h-[37px] bg-[#C8C7C7] px-2 text-[16px] rounded-[5px] text-[#01242F] outline-none "
            placeholder="Contraseña"
          ></input>
          <button className="bg-colorButtons h-[30px] w-32 text-stone-100 text-[17px]">
            Iniciar Sesion
          </button>
        </div>
        <div className="items-center flex justify-between w-[50%] h-[40px]">
          <div className="w-[40%] border border-[#000000]"></div>
          <div className="w-[20px] h-[20px]  border-[#000000] rounded-[100%] bg-[#000000]"></div>
          <div className="w-[40%] border border-[#000000]"></div>
        </div>
        <div className="max-[425px]: w-[100%] w-[50%] h-[50px] flex justify-around" id="logos-container">
          <div className="w-[150px] h-[50px] border border-red-500 flex justify-between items-center">
            google logo 
          </div>
          <div className="w-[150px] h-[50px] border border-red-500 flex justify-between items-center ">
            facebook logo
            </div>
        </div>
        <p className="text-[#01242F8F]">Nuevo en hardware market?  
        <span className="text-[#05607C] cursor-pointer" onClick={() => navigate("/register")}>Registrate</span> </p>
      </div>
    </div>
  );
};
