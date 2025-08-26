import React from "react";
// import cups from './images/plates.webp'

function Hero() {
  return (
    <div className="h-115 w-full sm:h-140 md:h-110 lg:h-108  bg-[url(./images/smallplates.webp)] md:bg-[url(./images/plates.webp)] bg-cover sm:bg-center ">
      <div className="h-full w-full bg-[#00000057] pl-5 sm:pl-8 lg:pl-14 2xl:pl-22 relative ">
        <h1 className="text-[32px] w-90 sm:w-full  text-[#EAF940] tracking-wide pt-4 sm:pt-20 md:pt-14 lg:text-[50px] lg:tracking-normal lg:pt-25">Source Unique. Design Mindfully</h1>
        <p className="text-white text-[14px] font-semibold w-80 md:w-full pt-4 lg:text-[17px] lg:w-125">
          Join 10,000+ design pros discovering unique finds directly from
          independent Creators.
        </p>
        <button className="cursor-pointer lg:hidden h-[40px] w-[180px] md:h-[58px] md:w-[228px] bg-[#EAF940] font-semibold rounded-[4px] text-[#00000099] text-[14px] md:text-[17px] tracking-wider absolute bottom-12 sm:bottom-20">Shop unique Items</button>
        <button className="cursor-pointer hidden lg:block h-[40px] w-[180px] md:h-[58px] md:w-[228px] bg-[#EAF940] font-semibold rounded-[4px] text-[#000000c2] text-[14px] md:text-[17px] tracking-wider absolute bottom-12 sm:bottom-20 lg:bottom-26">Explore unique Items</button>
        
      </div>
    </div>
  );
}

export default Hero;
