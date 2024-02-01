// import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav
      className="flex w-auto font-bold
      justify-center items-center h-16 
      p-4 space-x-5 mt-4 font-josefin md:space-x-10 rounded-std text-black"
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
        <a href="/login">Iniciar sesion</a>
      </div>
      {/* <div className="w-[40%] h-0 border border-[#000000]"></div> */}
    </nav>
  );
};
