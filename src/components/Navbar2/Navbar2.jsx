import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const navigate = useNavigate()
  return (
    <header className="flex items-center justify-center bg-colorStar shadow  font-josefin  rounded-[10px] ml-3 mr-3   md:h-[50px] mt-2" >
          <div className="flex justify-between items-center w-[80vw] h-[30px] bg-colorStar text-white ">
            
            <p className="hover:cursor-pointer"  onClick={() => navigate("/startPage")}>Inicio</p>
          </div>
      
      </header>
  )
}

export default Navbar2