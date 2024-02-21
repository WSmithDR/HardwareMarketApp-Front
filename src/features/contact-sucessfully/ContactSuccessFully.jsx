import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { useNavigate, useParams } from 'react-router-dom'

const ContactSuccessFully = () => {
    const navigate = useNavigate()
    
  return (
    <div className='h-screen w-screen flex flex-col  font-josefin'>
       
        <div className=' w-screen flex  h-[70vh] m-auto items-center  flex-col gap-10'>
        <h1 className='text-[35px] my-10'>Email enviado a  hardwarmarket ✅ </h1>
        <p className='text-[18px]'>Gracias por ponerte en contacto con nosotros , Nuestros administradores se pondrán en contacto contigo.</p>
        <button className= 'text-white h-[30px] w-[100px] bg-colorButtons'  onClick={() => navigate("/startPage")}>Volver</button>
        </div>
    </div>
  )
}

export default ContactSuccessFully