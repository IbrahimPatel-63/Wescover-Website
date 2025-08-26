import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

function Footer1() {
  return (
    <div  className='h-125 md:h-145 lg:h-110 w-full bg-[#F7EEE7]  pl-8 md:pl-12 lg:pt-15'>
           <div className='lg:flex lg:gap-5  lg:h-full lg:w-[95%] lg:border-b-1 lg:border-[#00000029]'>
            <div className='pt-12 pb-20 md:pt-30 lg:pt-0 lg:pb-0'>
                <h1 className='text-2xl pb-2 md:pb-4 font-semibold'>wescover</h1>
                <p className='text-[14px] md:text-xl lg:text-[16px] lg:w-60 xl:w-100'> Join 10K+ design pros and access unique, high-quality pieces by original creators, 100% risk-free. Discover the Wescover difference.</p>
            </div>
            <div className='h-15 w-[95%] lg:w-full flex lg:flex-col lg:items-start items-center justify-between  border-b-1 border-[#00000029] lg:border-0'>
                <p className='font-semibold text-[14px] md:text-xl lg:text-[16px] lg:font-semibold tracking-wider md:font-normal lg:pb-6'>our company</p>
                <MdKeyboardArrowDown  className='text-xl lg:hidden'/>
                <div className='hidden lg:flex flex-col gap-2 '>
                    <p>about us</p>
                    <p>the wescover</p>
                    <p>promise</p>
                    <p>return & refund</p>
                    <p>shipping policy</p>
                    <p>contact us</p>
                    <p>faq</p>
                    <p>blog</p>
                </div>
            </div>

              <div className='h-15 w-[95%]  flex lg:flex-col lg:items-start items-center justify-between  border-b-1 border-[#00000029] lg:border-0'>
                <p className='font-semibold  text-[14px] md:text-xl lg:text-[16px] lg:font-semibold tracking-wider md:font-normal lg:pb-6'>creators</p>
                <MdKeyboardArrowDown  className='text-xl lg:hidden'/>
                   <div className='hidden lg:flex flex-col gap-2 '>
                    <p>creator application</p>
                    <p>creator support</p>
                    
                  
                </div>
            </div>

              <div className='h-15 w-[95%]  flex lg:flex-col lg:items-start items-center justify-between  border-b-1 border-[#00000029] lg:border-0'>
                <p className='font-semibold  text-[14px] md:text-xl lg:text-[16px] lg:font-semibold tracking-wider md:font-normal lg:pb-6'>trade</p>
                <MdKeyboardArrowDown  className='text-xl lg:hidden'/>
                   <div className='hidden lg:flex flex-col gap-2 '>
                    <p>join the trade program</p>
                
                </div>
            </div>

              <div className='h-15 w-[95%] lg:hidden flex items-center justify-between  border-b-1 border-[#00000029] lg:border-0'>
                <p className='font-semibold  text-[14px] md:text-xl lg:text-[16px] lg:font-semibold tracking-wider md:font-normal'>accessibility assistance</p>
              
            </div>
           </div>
    </div>
      
    
  )
}

export default Footer1
