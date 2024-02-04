// import React from 'react'
import SwitchButton from './SwitchButton'

const Filters = () => {
  return (
    <div className=' w-[300px] h-[500px] flex flex-col items-start mx-[200px] p-10 gap-10'>
      <div>
        <h1 className='text-[20px]' >Tarjetas de video</h1>
        <p>10 Resultados</p>
      </div>
      <div className='bg-[#C8C7C7] h-[40px] w-[100%] rounded-[10px] flex items-center p-4 justify-between '>
        <p>Envio Gratis</p>
        <SwitchButton />
      </div>
      <div className='w-[100%] h-[100px] flex flex-col p-4 bg-[#C8C7C7] rounded-[10px] justify-between '>
        <p>Filtrado de precios</p>
        <div className=' h-[40px] flex justify-between' >

          <select className='h-[30px] w-[60px] rounded-[10px] flex text-center'>
            <option>0</option>
            <option>100</option>
            <option>500</option>
            <option>1000</option>
            <option>1500</option>
          </select>
          <div className='w-[40px] h-[20px] border-b-2 border-black'></div>
          <select className='h-[30px] w-[60px] rounded-[10px]'>
            <option>100</option>
            <option>500</option>
            <option>1000</option>
            <option>1500</option>
            <option>2000</option>
          </select>
        </div>
      </div>
      <div>
        <h3 className='text-[20px]'>Productos</h3>
        <p className='cursor-pointer'>Nuevos</p>
        <p className='cursor-pointer'>Usados</p>
      </div>
    </div>
  )
}

export default Filters