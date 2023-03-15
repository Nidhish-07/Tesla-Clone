import React from "react";

import { IoIosArrowDown } from "react-icons/io";

const HeroSection = (props) => {
  return (
    <div
      className={`w-[100vw] h-[100vh] ${props.bgImg} bg-cover bg-center bg-no-repeat flex flex-col justify-between items-center `}
    >
      <div className="p-[15vh] text-center">
        <h1 className="text-5xl font-semibold mb-3">{props.title}</h1>
        <p className="text-lg">{props.info || ""}</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="flex  gap-6 justify-center  md:flex-row flex-col">
          <button className="bg-[#000] h-10 w-56 text-white flex justify-center items-center font-medium rounded cursor-pointer  opacity-75">
            {props.buttonLeftText}
          </button>
          {props.buttonRightText && (
            <button className="bg-[#e6e7e5] h-10 w-56 text-[#000] flex justify-center items-center font-medium rounded cursor-pointer opacity-75">
              {props.buttonRightText}
            </button>
          )}
        </div>
        <div className="mt-5 mb-4 animate-arrowDownAnimate">
          <IoIosArrowDown size={24} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
