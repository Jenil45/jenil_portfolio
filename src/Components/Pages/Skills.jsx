import React, { useRef } from "react";
import "./css/Skill.css";
import SkillCard from "../SubElement/SkillCard";
import { data } from "../../Data/Skill.js";

const Skills = () => {
  var skills = data.data;

  return (
    <div id="Skills" className="h-[35rem] py-[5rem] md:px-[0.2rem] text-center">
      <div>
        <h1 className="text-[3rem]">Skill section</h1>
        <div className="flex gap-[1.2rem] items-center justify-center">
          <div className=" h-[0.4rem] w-[0.4rem] rounded-full bg-[#29b4e3]"></div>
          <div className=" h-[0.4rem] w-[0.4rem] rounded-full bg-[#29b4e3]"></div>
          <div className=" h-[0.2rem] w-[20rem] rounded-full bg-[#29b4e3]"></div>
          <div className=" h-[0.4rem] w-[0.4rem] rounded-full bg-[#29b4e3]"></div>
          <div className=" h-[0.4rem] w-[0.4rem] rounded-full bg-[#29b4e3]"></div>
        </div>
      </div>
      <div className="slider">
        <div className="slide-track">
          {skills.map((skill) => {
            return (
              <div className="slide">
                <SkillCard
                  rate={skill.rate}
                  image={skill.image}
                  content={skill.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
