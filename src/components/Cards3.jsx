import React from 'react'
import flag1 from './images2/flag1.png'

function Cards3({name,title,price,image}) {
  return (
    <div>
        <div className='h-[40vw] w-[48vw] md:h-[19vw] md:w-[19vw] lg:h-[21vw] lg:w-[20vw] xl:h-[19vw] xl:w-[19.5vw] '><img src={image} alt="" className='h-full w-full object-cover' loading='lazy' /></div>
        <div className='flex gap-2 items-center pt-2 pb-2'>
            <div className='h-6 w-6 bg-black rounded-full overflow-hidden'><img src={flag1} alt="" className='h-full w-full object-cover' loading='lazy' /></div>
          <p className='text-[#0000009d] text-[13px]'>{name}</p>
        </div>
        <p className='font-semibold text-[13px] pb-1'>{title}</p>
        <p className='font-semibold'>{price}</p>
      
    </div>
  )
}

export default Cards3
