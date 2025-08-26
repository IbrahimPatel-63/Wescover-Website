import React from 'react'
// import newyork from './images/newyork.avif'
import adigest from './images2/adigest-logo.webp'
import forbs from './images2/forbes-logo.webp'
import dwell from './images2/dwell-logo.webp'
import nyt from './images2/nyt-logo.webp'
import sanfransisco from './images2/sanfrancisco.webp'

function Brands() {
  return (
    <div className='h-30 md:h-35 w-full bg-[#F8F8F8] flex flex-col '>
        <h1 className='text-center uppercase text-[12px] font-semibold tracking-widest pt-4 pb-4 md:text-[16px] md:pt-6 md:pb-2'>featured in</h1>
        <div className='flex items-center justify-around lg:px-5 2xl:px-38'>
            <img src={adigest} alt="adigest" className='h-[28px] w-[80p] object-cover md:h-[40px]' />
            <img src={forbs} alt="forbs"  className='h-[28px] w-[80p] object-cover md:h-[40px]' />
            <img src={sanfransisco} alt=""  className='hidden md:block h-[28px] w-[80p] object-cover md:h-[40px]'/>
            <img src={dwell} alt="dwell"  className='h-[28px] w-[80p] object-cover md:h-[40px]' />
            <img src={nyt} alt="nyt-logo"  className='h-[60px] w-[80p] object-cover md:h-[75px]' />

        </div>
      
    </div>
  )
}

export default Brands
