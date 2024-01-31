// import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className=" w-[100vw]  flex my-[23px] ">
      <div className=" container mx-auto flex justify-center items-center ">
        <div className="space-x-6">
          <a
            href="/startPage"
            className="text-black font-josefin hover:bg-colorButtons hover:text-white transition-colors p-1 rounded"
          >
            Inicio
          </a>
          <a
            href="/about"
            className="text-black font-josefin hover:bg-colorButtons hover:text-white transition-colors p-1 rounded"
          >
            Sobre Nosotros
          </a>
          <a
            href="/contact"
            className="text-black font-josefin hover:bg-colorButtons hover:text-white transition-colors p-1 rounded"
          >
            Contacto
          </a>
          <a
            href="/login"
            className="text-black font-josefin hover:bg-colorButtons hover:text-white transition-colors p-1 rounded "
          >
            Iniciar Sesión
          </a>
        </div>
      </div>
    </nav>
  );
};
