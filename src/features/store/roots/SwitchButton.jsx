import React, { useState } from 'react'

const SwitchButton = () => {
    const [switchBall , setSwitchBall] = useState(false)
    const handleBall = () => {
    setSwitchBall(!switchBall)
    }
 
  return (
    <div className={`w-[60px] h-[25px] border-2 border-gray-500  bg-white rounded-[50px]  flex  items-center `}>
     <div className={`h-[20px] w-[20px] border ${switchBall ? "bg-[#0EC811]"  : "bg-[#05607C]"}  rounded-[100%] cursor-pointer transition duration-300 ease-in-out  ${switchBall ? "translate-x-9" : "last:"}`} onClick={() => handleBall()} ></div>
    </div>
  )
}

export default SwitchButton