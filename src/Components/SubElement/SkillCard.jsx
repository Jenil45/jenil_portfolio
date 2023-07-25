import React from "react";
import "../Pages/css/Skill.css";

const SkillCard = (props) => {
  return (
    // <div className="w-[12rem] h-[14rem] rounded-[0.8rem]">
    <div className="skillcard w-[12rem] h-[14rem] shadow-2xl rounded-[0.4rem] pt-[1rem] border border-[#c5c6c7] flex flex-col items-start justify-around gap-[1rem]">
      <div className=" m-auto h-[6rem] rounded flex items-center justify-center p-[0.3rem]">
        <img className="imglogo" src={props.image} alt="" srcset="" />
      </div>
      <div className="m-auto ">{props.content}</div>
      <div className="w-[98%] border ml-[0.2rem] mr-[0.2rem] h-[0.5rem] flex items-center  rounded-[1rem] mb-[0.2rem]">
        <div
          className="ratingdiv rounded  rounded-[1rem] "
          style={{ width: props.rate + "%" }}
        ></div>
      </div>
    </div>

    // </div>
  );
};

export default SkillCard;
