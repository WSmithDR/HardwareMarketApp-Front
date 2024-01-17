import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className="flex justify-between items-center p-4 absolute top-0 ">
        <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-10">
          <a href="#" className="text-black font-josefin shadow-xl">Home</a>
          <a href="#" className="text-black font-josefin shadow-xl">About</a>
          <a href="#" className="text-black font-josefin shadow-xl">Contact</a>
          <a href="#" className="text-black font-josefin shadow-xl" onClick={() => navigate("/login")}>Iniciar Sesion</a>
        </div>
      </div>
    </nav>
  )
}
