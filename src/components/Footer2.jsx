import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

function Footer2() {
  return (
    <div className='min-h-35 pt-10 w-full bg-[#F7EEE7] md:flex md:justify-between '>
        <div className='h-15 w-full  flex  justify-center md:justify-end xl:items-center gap-4 cursor-pointer text-2xl md:order-2 md:w-[35%] md:pr-5 xl:pr-15 2xl:pr-18'>
            <FaWhatsapp />
            <FaFacebook />
            <FaPinterest />
            <FaLinkedin />
            <FaGithub />
            <FaGoogle />
        </div>
        <div className=' flex flex-col items-center  text-[#000000a3] md:order-1 md:flex-wrap md:flex-row md:gap-5 md:h-15 md:pl-10'>
            <p>© 2025 wescover,inc. (owned by book an artist pty ltd)</p>
            <p>privacy policy</p>
            <p>terms and conditions</p>
        </div>
      
    </div>
  )
}

export default Footer2
