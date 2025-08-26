import React from 'react'

function Paragraph() {
  return (
    <div className='h-105 sm:h-90 md:h-148 lg:h-125 w-full bg-[#F8F8F8] px-2 md:px-10 2xl:px-38 lg:flex items-center 2xl:h-110 2xl:gap-40 '>
        <div>
            <h2 className='font-semibold pt-12 pb-5 text-xl '>our purpose</h2>
            <p className='text-2xl md:text-[52px] md:leading-16 xl:w-150 '>we envision a future where local makers overtake mass brands.</p>
        </div>

        <div>
            <p className='hidden lg:block text-[14px] lg:pt-20 2xl:w-120'>Where fast-decor falls out of fashion and where the objects we own have meaning. We want pieces that are personal, made to last, and worth handing down— not destined for a dumpster.</p>
            <p className='text-[14px] 2xl:text-[16px] pt-5 2xl:pt-4 pb-5 md:pt-10 md:pb-10 2xl:w-120'>So we created a marketplace full of well-made alternatives to mass decor. Here you’ll find small-batch, made-to-order, custom and commission pieces directly from the people who make them. Join us by shopping unique and buying from Creators on Wescover.</p>
            <p className='text-[14px] 2xl:text-[16px] underline font-semibold'>more about us</p>
        </div>
      
    </div>
  )
}

export default Paragraph
