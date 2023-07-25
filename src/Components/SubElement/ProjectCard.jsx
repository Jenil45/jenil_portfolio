import React from "react";
import "../Pages/css/Project.css";
import p1 from "../../Images/Projects/ijob.png";

const ProjectCard = (props) => {
  return (
    <div className="projectcard shadow-2xl">
      <div className="image">
        <img
          className="w-[100%] h-[100%] rounded-[0.6rem] shadow-2xl"
          src={props.image}
          alt=""
        />
      </div>
      <span className="p-title text-[2rem] mt-[1rem]">{props.pname}</span>
      <span className="p-content text-[1.1rem] mt-[1rem] ">{props.skills}</span>
      <div className="infocard">{props.content}</div>
    </div>
  );
};

export default ProjectCard;
