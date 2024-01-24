// import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  
  return (
    <nav className="flex justify-between items-center p-4 absolute top-0 ">
        <div className=" container mx-auto flex justify-between items-center">
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
