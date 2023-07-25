import React from "react";
import "./css/Intro.css";
import p3 from "../../Images/WhatsApp Image 2023-07-18 at 17.50.17.jpeg";

import react from "../../Images/logo/react.png";
import node from "../../Images/logo/nodejs.png";
import mongo from "../../Images/logo/mongo.png";
import express from "../../Images/logo/express.png";
import php from "../../Images/logo/php.png";
import mysql from "../../Images/logo/mysql.png";
import python from "../../Images/logo/python.png";
import git from "../../Images/logo/git.png";

const Intro = () => {
  const intro = {
    info_first: "Hello My Name is Jenil Thakor. I am currently 20 years old.",
    info_second:
      "Currently I'm studying Computer Engineering at Government Engineering College Gandhingar.I am a Full Stack web developer.I am a very fast learner. I enjoy to learn new technologies and core mathematics fundamentals that helps me a lot in my CE learning phase. My core skills are Front End Development (HTML , CSS , JS) , MERN Stack development (MongoDB , ExpressJS , ReactJs , NodeJs) , PHP , MySQL , Data Analytics. I am also focusing on learning new things about WEB 3.",
  };

  return (
    <div id="Intro" className="intro h-[40rem] md:p-[2rem]">
      <div className="i-right">
        <div className="i-sec absolute z-[2]">
          <img className="" src={p3} alt="" />
        </div>
        <div className="i-design anim">
          <img src={node} alt="" />
        </div>
        <div className="i-design anim">
          <img src={mongo} alt="" />
        </div>
        <div className="i-design anim">
          <img src={react} alt="" />
        </div>
        <div className="i-design anim">
          <img src={mysql} alt="" />
        </div>
        <div className="i-design anim">
          <img src={php} alt="" />
        </div>
        <div className="i-design anim">
          <img src={python} alt="" />
        </div>
        <div className="i-design anim">
          <img src={express} alt="" />
        </div>
        <div className="i-design anim">
          <img src={git} alt="" />
        </div>
      </div>
      <div className="i-left">
        <h1 className="text-[3rem] text-[#39c0ed]">Who Am I ?</h1>
        <span className="text-[1.5rem]">{intro.info_first}</span>
        <span className="text-[1.5rem]">{intro.info_second}</span>
      </div>
    </div>
  );
};

export default Intro;
