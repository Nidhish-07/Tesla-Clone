import React from "react";

import { IoIosArrowDown } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-model3 bg-cover bg-center bg-no-repeat flex flex-col justify-between items-center ">
      <div className="p-[15vh] text-center">
        <h1 className="text-5xl font-semibold mb-3">Model 3</h1>
        <p className="text-lg">Leasing starting at $349/mo</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="flex  gap-6 justify-center  ">
          <button className="bg-[#3e4145] h-10 w-56 text-white flex justify-center items-center font-medium rounded cursor-pointer ">
            Custom Order
          </button>
          <button className="bg-[#e6e7e5] h-10 w-56 text-[#3e4145] flex justify-center items-center font-medium rounded cursor-pointer">
            Demo Drive
          </button>
        </div>
        <div className="mt-5 mb-4 animate-arrowDownAnimate" >
          <IoIosArrowDown size={24} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
