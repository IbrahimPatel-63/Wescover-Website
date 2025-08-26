import React from 'react'

function Cards1({text,image}) {
  return (
      <div>
            <div className='h-[45vw] w-[45vw] lg:h-[225px] lg:w-[225px] xl:h-[270px] xl:w-[250px] 2xl:h-[330px] 2xl:w-[310px] pt-2 sm:pt-5 '><img src={image} alt="flowers" className='object-fit h-full w-full' loading='lazy' /></div>
            <p className='text-[12px] font-semibold tracking-wider lg:tracking-wide pt-2 lg:pt-5 md:text-xl md:font-normal'>{text}</p>
        </div>
  )
}

export default Cards1
