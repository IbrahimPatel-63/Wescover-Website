import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


function Cards5({title,name,btn1,btn2,btn3,image,sub}) {
  return (
    <div className='h-[44vh] w-[90vw] sm:h-[53vh] sm:w-[94vw]  md:w-[46vw] xl:w-[31vw] 2xl:w-[28vw] bg-white px-4  py-5 relative border-[1px] border-[#00000025] cursor-pointer'>
        <div className='h-[20vh] w-[85vw] sm:h-[28vh] sm:w-[90vw] md:w-[43vw] xl:w-[29vw] 2xl:w-[26vw] bg-blue-400'><img src={image} alt="" className='h-full w-full object-cover' loading='lazy'/></div>
        <div className='hidden 2xl:block h-15 w-15 2xl:h-25 2xl:w-25 bg-black rounded-full absolute top-34 left-1 sm:top-48 sm:left-2 2xl:top-38 overflow-hidden'><img src={sub} alt="" className='h-full w-full object-cover' loading='lazy' /></div>
        <div className='flex justify-between items-center pt-8 pb-1 '>
            <h1 className='text-2xl'>{title}</h1>
             <FaArrowRightLong  />
        </div>
        <p className='text-[14px] text-[#000000a7] pb-4'>{name}</p>
        <div className='flex items-center gap-2'>
            <button className='border-1 border-[#0000004f] rounded-2xl px-2.5 py-.5 text-[15px] text-[#000000a3]'>{btn1}</button>
            <button className='border-1 border-[#0000005c] rounded-2xl px-2.5 py-.5 text-[15px] text-[#000000a3]'>{btn2}</button>
            <button className='border-1 border-[#0000004e] rounded-2xl px-2.5 py-.5 text-[15px] text-[#000000a3]'>{btn3}</button>
        </div>
      
    </div>
  )
}

export default Cards5
