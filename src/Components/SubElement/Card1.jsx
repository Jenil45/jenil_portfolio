import React from "react";

const Card1 = (props) => {
  return (
    <div
      data-aos={props.aos}
      className={`card1 shadow-2xl ${props.positionclass} flex items-center justify-center gap-[1.2rem]`}
    >
      <span>
        <img className="c1" src={props.srclink} alt="" />
      </span>
      <span>{props.content}</span>
    </div>
  );
};

export default Card1;
