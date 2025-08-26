import React from 'react'
import woman from './images2/Woman.jpg'

function Profilecard() {
  return (
    <div className='max-h-160 w-full bg-[#F7EFE7] flex items-center justify-start flex-col text-center  font-normal'>
        <p className='md:hidden text-[#4F4F4F] font-semibold uppercase text-[13px]  tracking-widest pt-12'>Trusted by 10,000+ Design Pros.</p>
         <p className= 'hidden md:block text-[#4F4F4F] font-semibold uppercase text-[13px] md:text-[15px] tracking-widest pt-12'>Trusted by 10,000+ Design Professionals.</p>
        <div className='h-25 w-25  rounded-full mt-5 mb-6 overflow-hidden'><img src={woman} alt="woman" className='h-full w-full object-fit' loading='lazy' /></div>
        <p className='text-2xl md:text-[32px] lg:w-200 xl:text-2xl'>We've loved every moment of the work with Wescover and how seamless and fast it's been. We would not have been able to get as many stores done as we have without the support from Wescover.</p>
        <div className='flex items-center gap-4 pt-15 pb-5 md:pt-12'>
            <p className='text-[#4F4F4F] font-semibold uppercase text-[13px]'>kari ihle </p>
            <div className='h-[1px] w-25  bg-[#4F4F4F]'></div>
            <p className='text-[#4F4F4F] text-[12px]'>from EverEve</p>

        </div>
        <p className='text-[#4F4F4F] '>Wescover’s Trade Team helped EverEve source art for seven new retail locations.</p>
        <p className='text-[#4F4F4F] underline pt-5 md:pt-1 cursor-pointer'>View the Collection</p>
      
    </div>
  )
}

export default Profilecard
