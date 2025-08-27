import React from 'react'


function Cards4({name,title,price,image,image2}) {
  return (
    <div>
        <div className='h-[46vw] w-[46vw] md:h-[20vw] md:w-[19vw] lg:h-[20vw] lg:w-[20vw]  xl:h-[18vw] xl:w-[18vw] 2xl:h-[19vw] 2xl:w-[19vw] '><img src={image} alt="" className='h-full w-full object-cover' loading='lazy' /></div>
        <div className='flex gap-2 pt-2 pb-2 '>
            <div className='h-5 w-5  rounded-full overflow-hidden'><img src={image2} alt="" className='h-full w-full object-cover' loading='lazy' /></div>
            <p className='text-[14px] text-[#0000009f]'>{name}</p>
        </div>
        <p className='text-[12px]'>{title}</p>
        <p>{price}</p>
      
    </div>
  )
}

export default Cards4
