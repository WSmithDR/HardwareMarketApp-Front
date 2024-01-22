import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  
  return (
    <nav className="flex justify-between items-center p-4 absolute top-0 ">
        <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-10">
          <a href="#" className="text-black font-josefin shadow-xl">Inicio</a>
          <a href="#" className="text-black font-josefin shadow-xl">Sobre Nosotros</a>
          <a href="#" className="text-black font-josefin shadow-xl">Contacto</a>
          <a href='/login' className="text-black font-josefin shadow-xl" >Iniciar Sesión</a>
        </div>
      </div>
    </nav>
  )
}
