import React from "react";

const HeaderComp = ({ text }) => {
  return (
    <div className="flex justify-center py-10">
      <div className="text-4xl md:text-6xl lg:text-[3rem] font-bold tracking-wide text-white w-fit">
        {text}
        <div className="w-full h-1 bg-white mt-2"></div>
      </div>
    </div>
  );
};

export default HeaderComp;
