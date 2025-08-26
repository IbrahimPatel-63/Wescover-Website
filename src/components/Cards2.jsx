import React from 'react'

function Cards2({title,image}) {
  return (
    <div>
      <div className='h-[32vw] w-[45vw] md:h-[20vw] md:w-[28vw] lg:h-[20vw] lg:w-[29vw] xl:w-[350px] xl:h-[235px] 2xl:h-[260px] 2xl:w-[410px] border-[#0000004c] border-[1px] flex items-center justify-center  '>
        <div className='h-[30vw] w-[43vw] md:h-[18vw] md:w-[26vw] lg:h-[18vw] lg:[29vw] xl:w-[340px] xl:h-[225px] 2xl:h-[250px] 2xl:w-[400px] cursor-pointer '><img src={image} alt="" className='h-full w-full object-cover' loading='lazy' /></div>
      </div>
      <p>{title}</p>
      
    </div>
  )
}

export default Cards2
