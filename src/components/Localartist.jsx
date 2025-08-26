import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Localartist() {
  return (
    <div className='h-35 md:h-25 w-full bg-white flex justify-between relative py-4 md:px-5 lg:px-8 xl:px-22 2xl:px-30'>
        <div>
            <p className='capitalize text-[17px] underline pl-2.5 md:hidden'>shop all local artist</p>
            <p className='uppercase text-[#000000b6] text-[12px] tracking-widest pt-8 pb-2 pl-2 md:pt-2 '>make it your own</p>
            <p className=' capitalize text-2xl pl-2 '> customizable furniture</p>

        </div>
        <FaArrowRightLong className='absolute bottom-5 right-4 md:hidden' />
        <p className='hidden md:block  tracking-wider absolute right-8 bottom-5 underline xl:right-23 2xl:right-33'>All Creators</p>
      
    </div>
  )
}

export default Localartist
