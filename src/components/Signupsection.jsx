import React from 'react'
import { GrSend } from "react-icons/gr";

function Signupsection() {
  return (
    <div className='h-80 md:h-50 xl:h-40 w-full bg-white md:flex md:items-center justify-around  '>
        <div className='flex flex-col items-center md:flex-row md:items-start  md:gap-4 '>
            <GrSend className='text-4xl text-center mt-14 mb-5 md:mt-0 md:mb-0'/>
            <h1 className='text-2xl text-center pb-8 md:w-50 lg:w-full lg:text-[28px]'>Sign up for our newsletter.</h1>
        </div>

        <div className='flex flex-col items-center gap-2.5 md:flex-row'>
            <button className='border-1 border-black h-11 w-[80vw] md:w-[32vw] text-[#000000a1] rounded-[5px] cursor-pointer hover:bg-blue-400 hover:text-white transition duration-500 linear hover:border-0'>Enter your email</button>
            <button className='text-white bg-black h-11 w-[80vw] md:w-30 cursor-pointer rounded-[5px] hover:text-black hover:bg-yellow-200 transition duration-500 linear'>Subscribe</button>
        </div>
      
    </div>
  )
}

export default Signupsection
