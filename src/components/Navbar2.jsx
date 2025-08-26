import React from 'react'

function Navbar2() {
  return (
    <nav className='hidden h-15 w-full bg-white md:flex md:items-center md:justify-around uppercase text-xs font-semibold lg:text-[16px] lg:justify-between xl:justify-center xl:gap-5 2xl:gap-7 '>
        <p className='cursor-pointer'>new</p>
        <p className='cursor-pointer'>furniture</p>
        <p className='cursor-pointer'>lighting</p>
        <p className='cursor-pointer'>art</p>
        <p className='cursor-pointer'>decor</p>
        <p className='cursor-pointer'>tableware</p>
        <p className='cursor-pointer'>outdoor</p>
        <p className='text-[#CD4A2D] cursor-pointer'>sale</p>
        <p className='cursor-pointer'>creators</p>
        <p className='hidden lg:flex cursor-pointer'>inspiration</p>
        <p className='text-[#4F4F4F] pt-4 lowercase text-[16px] cursor-pointer'>support</p>
      
    </nav>
  )
}

export default Navbar2
