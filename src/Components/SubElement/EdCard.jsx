import React from "react";
import School from "@iconscout/react-unicons/icons/uil-backpack";
import "./css/ScrollAnim";

const EdCard = (props) => {
  return (
    <div className="container try">
      <div className="logo w-[2rem] h-[2rem] rounded-full bg-[#66cff1]"></div>
      <div className="textbox">
        <div className="t-left">
          <School size={45} style={{}} />
        </div>
        <div className="t-right">
          <span className="text-[#0b0c10]">{props.range}</span>
          <div className="tr-content mt-[1rem]">
            <span className="text-[#0b0c10] text-[1.3rem]">{props.type}</span>
            <span className="text-[#0b0c10] text-[1.3rem]">
              {props.organization}
            </span>
          </div>
        </div>
        <span className="arrow"></span>
      </div>
    </div>
  );
};

export default EdCard;
