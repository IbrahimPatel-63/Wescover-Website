import React from "react";

function Furniture({ image, title, alt }) {
  return (
    <div className="h-42 lg:h-60 w-32 lg:w-40 xl:w-40 2xl:w-45  flex items-center justify-center flex-col gap-2 lg:gap-5 shrink-0 text-center">
      <div className="h-[90px] w-[90px] lg:h-[130px] lg:w-[130px] xl:h-[145px] xl:w-[145px] 2xl:h-[155px] 2xl:w-[155px]  rounded-full overflow-hidden">
        <img src={image} alt={alt} className="object-fit" loading="lazy" />
      </div>
      <p className="font-semibold lg:text-[18px]">{title}</p>
    </div>
  );
}

export default Furniture;
