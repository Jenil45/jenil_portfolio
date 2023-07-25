import React from "react";
import ProjectCard from "../SubElement/ProjectCard";
import { projects } from "../../Data/Project";
import "./css/Project.css";

const Projects = () => {
  const data = projects.data;

  return (
    <div
      id="Project"
      className="min-h-[50rem] text-center py-[5rem] px-[2rem] "
    >
      <div>
        <h1 className="text-[3rem]">My Projects</h1>
        <div className="flex gap-[1.2rem] items-center justify-center">
          <div className=" h-[0.4rem] w-[0.4rem] rounded-full bg-[#29b4e3]"></div>
          <div className=" h-[0.4rem] w-[0.4rem] rounded-full bg-[#29b4e3]"></div>
          <div className=" h-[0.2rem] w-[20rem] rounded-full bg-[#29b4e3]"></div>
          <div className=" h-[0.4rem] w-[0.4rem] rounded-full bg-[#29b4e3]"></div>
          <div className=" h-[0.4rem] w-[0.4rem] rounded-full bg-[#29b4e3]"></div>
        </div>
      </div>

      <div className="projectsec mt-[3rem] w-[100%] mx-auto ">
        {data.map((d) => {
          return (
            <ProjectCard
              image={d.image}
              pname={d.project_name}
              skills={d.skills}
              content={d.content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
