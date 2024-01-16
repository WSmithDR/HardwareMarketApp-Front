import React from 'react'

const WelcomePage = () => {
  return (
    <div className = "gap-5 w-full h-screen bg-[#01242F] flex justify-center items-center flex-col text-white ">
      <div>
        <img className='w-6 h-6'  src='/public/images/iconsWelcome.png' alt='cuadrado'></img>
      <h1 className='text-9xl' >H</h1>
      </div>
      <div className='text-center'>
      <h1 className="text-3xl">
      Hardware Market
    </h1>
    <p>BUEN ESTADO BUENOS PRODUCTOS</p>
      </div>
  
    </div>
   
  )
}

export default WelcomePage