import React, { useState } from "react";
import Toggle from "../SubElement/Toggle";
import { Link } from "react-scroll";
import "./css/Navbar.css";
import Menu from "@iconscout/react-unicons/icons/uil-bars";
import Close from "@iconscout/react-unicons/icons/uil-multiply";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    console.log(sidebar);
    setSidebar(!sidebar);
  };

  return (
    <div
      id="Navbar"
      className="w-[100vw] flex items-center justify-center gap-[1rem] h-[6rem]  py-[1.4rem] px-[2rem] fixed top-0 z-[25] bg-[#1f2833]"
    >
      <div className="n-left flex-1 flex gap-[2rem] items-center ">
        <h1 className="text-[#c5c6c7] text-[2rem] font-bold">Jenil</h1>
        {/* <Toggle /> */}
      </div>
      <div className="n-right flex-1 flex  items-center justify-center gap-[2rem]">
        <div
          className={`list text-[#c5c6c7] ${
            sidebar ? "s-active" : "s-deactivate"
          }`}
        >
          <ul className="flex gap-[1.4rem] text-[1.2rem] items-center justify-center">
            <Link spy={true} to="Home" smooth={true} activeClass="activeClass">
              <li>Home</li>
            </Link>
            <Link spy={true} to="Intro" smooth={true}>
              <li>Intro</li>
            </Link>
            <Link spy={true} to="Services" smooth={true}>
              <li>Services</li>
            </Link>
            <Link spy={true} to="Skills" smooth={true}>
              <li>Skills</li>
            </Link>
            <Link spy={true} to="Education" smooth={true}>
              <li>Education</li>
            </Link>
            <Link spy={true} to="Project" smooth={true}>
              <li>Projects</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <div className="btn px-1 py-2 w-[7rem] text-[#1f2833] bg-[#66cff1] flex items-center justify-center rounded-[1.4rem]">
            Contact
          </div>
        </Link>
        <div
          className="menu-btn px-1 py-2 w-[2rem] text-[#1f2833] bg-[#66cff1] flex items-center justify-center rounded-[1.4rem]"
          onClick={handleSidebar}
        >
          {sidebar ? (
            <div className="close">
              <Close style={{ fill: "#66cff1" }} />
            </div>
          ) : (
            <Menu />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
