import React from "react";
import Furniture from "./Furniture";
import chair from "./images2/chair.webp";
import cloth from "./images2/cloth.webp";
import scones from "./images2/lamp.webp";
import bulb from "./images2/bulb.webp";
import painting from "./images2/painting.webp";
import coffee from "./images2/coffee.webp";

function Furnituresection() {
  return (
    <div className="h-60 lg:h-80 w-full bg-white md:text-center">
      <h1 className="pt-4 pb-5 uppercase text-[12px] md:text-[14px] font-semibold tracking-widest pl-4  ">
        Order a custom piece or shop in stock
      </h1>
      <div className="h-48 lg:h-70 w-full  flex  items-center overflow-auto md:justify-between xl:justify-center xl:gap-6 ">
        <Furniture title="Stools" alt="Stools" image={chair} />
        <Furniture title="Wall Art" alt="Wall Art" image={cloth} />
        <Furniture title="Scones" alt="Scones" image={scones} />
        <Furniture title="Coffee Table" alt="Coffee Table" image={coffee} />
        <Furniture title="Pendants" alt="Pendants" image={bulb} />
        <Furniture title="Abstract Painting" alt="Painting" image={painting} />
      </div>
    </div>
  );
}

export default Furnituresection;
