import React, { useEffect } from "react";
import "./css/Home.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Card1 from "../SubElement/Card1";
import p2 from "../../Images/p3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";

const Home = () => {
  // For animmation library
  useEffect(() => {
    AOS.init({
      delay: 400,
      duration: 1000,
      offset: 120,
    });
  }, []);

  // for dynamic text content
  var arr = ["Developer", "Innovator", "Problem Solver"];
  const [text] = useTypewriter({
    words: ["Developer", "Innovator", "Problem Solver"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 60,
  });

  // url of images in card
  var u1 =
    "https://www.xbytesolutions.com/assets/img/services/fullstack-development.png";
  var u2 =
    "https://w7.pngwing.com/pngs/769/163/png-transparent-professional-java-programmer-software-development-software-developer-others-miscellaneous-text-logo.png";

  var u3 =
    "https://w7.pngwing.com/pngs/310/475/png-transparent-database-computer-icons-computer-software-information-database-miscellaneous-angle-information-technology.png";

  return (
    <div
      id="Home"
      className="home h-[53rem] flex bg-[#0b0c10] pt-[5rem] text-[#c5c6c7] overflow-hidden rounded-b-[10rem]"
    >
      <div className="home-left flex-1 h-leftflex flex-col items-center justify-center p-[10rem] ">
        <div className="heading flex items-center h-[2rem]">
          <span className=" text-[2.3rem] text-[#c5c6c7]">{text}</span>
          <span className=" text-[2rem] text-[#c5c6c7]">
            <Cursor cursorStyle="|" cursorBlinking />
          </span>
        </div>
        <div className="flex flex-col gap-[1.5rem] mt-[1.5rem]">
          <span className="heading text-[4.1rem] text-[#66cff1]">
            Jenil Thakor
          </span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
            sint quia ducimus fugit harum doloribus debitis excepturi! Beatae
            doloremque nihil reiciendis tenetur optio ea voluptatum atque,
            incidunt cumque, accusantium laudantium!
          </span>
          <a href="../../Data/Resume/Jenil_Thakor_Resume.pdf" download>
            <div className="btn px-1 py-2 w-[2rem] text-[#1f2833] bg-[#66cff1] flex items-center justify-center rounded-[1.4rem]">
              Resume
            </div>
          </a>

          <div className="iconcontainer flex gap-[2rem] mt-[2rem] iconsdiv">
            <a target="_blank" href="https://github.com/Jenil45">
              <Github size={45} style={{ fill: "#66cff1" }} />
            </a>
            <a target="_blank" href="https://twitter.com/ImJenil_45">
              <Twitter size={45} style={{ fill: "#66cff1" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/jenil-thakor-031811212/"
              target="_blank"
            >
              <Linkedin size={45} style={{ fill: "#66cff1" }} />
            </a>
          </div>
        </div>
      </div>
      <div className="home-right flex-1 p-[10rem] ">
        <div className="img-sec absolute z-[2]">
          <img className="absolute z-[1]" src={p2} alt="" />
        </div>
        <Card1
          srclink={u1}
          positionclass="cc1"
          content="Full Stack Developer"
          aos="fade-right"
        />
        <Card1
          srclink={u2}
          aos="fade-left"
          positionclass="cc2"
          content="Java Developer"
        />
        <Card1
          srclink={u3}
          aos="fade-right"
          positionclass="cc3"
          content="Database Designer"
        />
      </div>
    </div>
  );
};

export default Home;
