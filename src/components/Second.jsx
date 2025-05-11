import Image from "next/image";
import React from "react";
import SkillsSection from "./Skills";
import { OrbitingCirclesDemo } from "./SvgCircle";
import HeaderComp from "./HeaderComp";

const Second = () => {
  return (
    <div id="second" className="px-5 md:px-12 ">
      <HeaderComp text="SKILLS" />
      <div className="flex h-full w-full">
        <div className=" w-full md:w-1/2 h-full">
          <SkillsSection />
        </div>
        <div className="hidden md:flex md:w-1/2 h-full">
          <OrbitingCirclesDemo />
        </div>
      </div>
    </div>
  );
};

export default Second;
