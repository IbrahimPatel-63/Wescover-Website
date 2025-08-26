import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Stock() {
  return (
    <div className='h-35 md:h-25 w-full bg-white flex justify-between relative py-4 md:px-5 lg:px-8 xl:px-22 2xl:px-25'>
            <div>
                <p className='capitalize text-[17px] underline pl-2.5 md:hidden'>More in Furniture</p>
                <p className='uppercase text-[#000000b6] text-[12px] tracking-widest pt-8 pb-2 pl-2 md:pt-2 '>ready to ship</p>
                <p className=' capitalize text-2xl pl-2 '>In Stock Lighting</p>
    
            </div>
            <FaArrowRightLong className='absolute bottom-5 right-4 md:hidden' />
            <p className='hidden md:block  tracking-wider absolute right-8 bottom-5 underline xl:right-23 2xl:right-33'>More in Lighting</p>
          
        </div>
  )
}

export default Stock
