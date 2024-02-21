// import { useNavigate } from 'react-router-dom'

import { useSelector } from "react-redux";



export const Navbar = () => {
  const user = useSelector(state => state.user.user)

  return (
    <nav
      className="flex w-auto font-bold
      justify-center items-center h-16 
      p-4 space-x-4 mt-4 font-josefin md:space-x-10 text-black"
    >
      <div className="hover:text-colorStar transition-colors hover:text-[110%]">
        <a href="/startPage">Inicio</a>
      </div>
      <div className="hover:text-colorStar transition-colors hover:text-[110%]">
        <a href="/about">Acerca de</a>
      </div>
      <div className="hover:text-colorStar transition-colors hover:text-[110%]">
        <a href="/contact">Contacto</a>
      </div>
      <div className="hover:text-colorStar transition-colors hover:text-[110%]">
        {user?.user ? (
          null
        ) : (<a href="/login">Iniciar sesion</a>)}
      </div>
      {/* <div className="w-[40%] h-0 border border-[#000000]"></div> */}
    </nav>
  );
};
