import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const WelcomePage = () => {


  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate("/startPage")
    },4000)
  },[])
  return (
    <div className = "gap-5 w-full h-screen bg-[#01242F] flex justify-center items-center flex-col text-white ">
      <div>
        <img className='w-28'  src='/public/images/h.png' alt='cuadrado'></img>
    
      </div>
      <div className='text-center'>
      <h1 className="text-3xl">
      Hardware Market
    </h1>
    <p>BUEN ESTADO BUENOS PRODUCTOS</p>
      </div>
      <img className='w-10' src='/public/images/giftLoad.gif'></img>
  
    </div>
   
  )
}

export default WelcomePage