import React from "react";
import DecorativeImg from "../Assest/Home/ItemIcons.png" ;

const DecorativeLine = () => {
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <div className="h-px bg-gray-200 w-full md:w-1/2"></div>
      <div className="w-[132px] h-20 ">
        <img
          src={DecorativeImg}
          alt="decorative icon"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="h-px bg-gray-200 w-full md:w-1/2"></div>
    </div>
  );
};

export default DecorativeLine;
