import React from "react";
import "./css/Education.css";
import Timeline from "../SubElement/Timeline";

const Education = () => {
  return (
    <div
      id="Education"
      className="md:h-[55rem] py-[5rem] text-center relative bg-[#0b0c10] mt-[2rem]  rounded-t-[10rem] rounded-b-[10rem]"
    >
      <div>
        <h1 className="text-[3rem] text-[white]">Education section</h1>
        <div className="flex gap-[1.2rem] items-center justify-center">
          <div className=" h-[0.4rem] w-[0.4rem] rounded-full bg-[#29b4e3]"></div>
          <div className=" h-[0.4rem] w-[0.4rem] rounded-full bg-[#29b4e3]"></div>
          <div className=" h-[0.2rem] w-[28rem] rounded-full bg-[#29b4e3]"></div>
          <div className=" h-[0.4rem] w-[0.4rem] rounded-full bg-[#29b4e3]"></div>
          <div className=" h-[0.4rem] w-[0.4rem] rounded-full bg-[#29b4e3]"></div>
        </div>
      </div>
      <div className="education">
        {/* <div className="e-left"> */}
        <Timeline />
        {/* </div> */}
        {/* <div className="e-right"></div> */}
      </div>
    </div>
  );
};

export default Education;
