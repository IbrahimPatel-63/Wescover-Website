import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";

function Navbar1() {
  return (
    <nav className="h-14 md:h-18 w-full bg-white flex items-center justify-between px-4 md:px-2.5 2xl:px-15">
      <div className="flex gap-2 items-center">
        <AiOutlineMenu className="text-2xl md:hidden" />
        <h1 className="text-xl font-semibold tracking-[-.5px] md:text-2xl">WESCOVER</h1>
      </div>
    <div className="flex items-center relative">
          <input type="text" placeholder="Search Wescover" className=" hidden md:flex lg:hidden border-1 border-black  w-90 h-12 lg:w-115  text-[17px] tracking-wide pl-3.5 rounded-xl font-semibold outline-0" />
           <input type="text" placeholder="Search for Items or Creators " className=" hidden  lg:flex border-1 border-black  w-90 h-12 lg:w-115  text-[17px] tracking-wide pl-3.5 rounded-xl font-semibold outline-0 xl:w-175 2xl:w-210" />
          
          <CiSearch  className="absolute right-4 text-xl cursor-pointer hidden md:flex  "/>
    </div>
        <p className="hidden lg:flex text-[16px] font-semibold text-[#4F4F4F]">Sell on Wescover</p>
        <div className="hidden h-10 w-20 border-1 border-black md:flex items-center justify-center rounded-[5px] cursor-pointer hover:bg-black hover:text-white lg:hidden">
            <p>Trade</p>
        </div>

        <div className="hidden h-10 w-36 border-1 border-black lg:flex items-center justify-center rounded-[5px] cursor-pointer hover:bg-black hover:text-white md:hidden">
            <p>Trade Program</p>
        </div>

      <div className="flex items-center gap-4 text-[22px] md:text-xl lg:text-[17px] cursor-pointer">
        <IoSearch className="md:hidden" />
        <FaRegUser className="hidden md:flex" />
        <FaRegHeart />
        <MdOutlineShoppingBag />
      </div>
    </nav>
  );
}

export default Navbar1;
