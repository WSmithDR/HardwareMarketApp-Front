// import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  
  return (
    <nav className=" w-[100vw]  flex my-[20px] ">
        <div className=" container mx-auto flex justify-center items-center ">
        <div className="space-x-6">
          <a href="/startPage" className="text-black font-josefin">Inicio</a>
          <a href="/about" className="text-black font-josefin  ">Sobre Nosotros</a>
          <a href="/contact" className="text-black font-josefin ">Contacto</a>
          <a href='/login' className="text-black font-josefin" >Iniciar Sesión</a>
        </div>
      </div>
    </nav>
  )
}
