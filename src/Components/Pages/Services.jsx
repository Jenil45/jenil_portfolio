import React, { useEffect } from "react";
import "./css/Services.css";
import ServiceCard from "../SubElement/ServiceCard";
import { services } from "../../Data/Services";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const data = services.data;

  // For animmation library
  useEffect(() => {
    AOS.init({
      delay: 400,
      duration: 1000,
      offset: 120,
    });
  }, []);

  return (
    <div
      id="Services"
      className="h-[50rem] md:py-[5rem] px-[0rem] text-center relative bg-[#0b0c10] md:mt-[3rem]  rounded-t-[10rem] rounded-b-[10rem]"
    >
      <div>
        <h1 className="text-[3rem] text-[white]">Services</h1>
        <div className="flex gap-[1.2rem] items-center justify-center">
          <div className=" h-[0.4rem] w-[0.4rem] rounded-full bg-[#29b4e3]"></div>
          <div className=" h-[0.4rem] w-[0.4rem] rounded-full bg-[#29b4e3]"></div>
          <div className=" h-[0.2rem] w-[28rem] rounded-full bg-[#29b4e3]"></div>
          <div className=" h-[0.4rem] w-[0.4rem] rounded-full bg-[#29b4e3]"></div>
          <div className=" h-[0.4rem] w-[0.4rem] rounded-full bg-[#29b4e3]"></div>
        </div>
      </div>

      <div className="s-right">
        {data.map((d) => {
          return (
            <ServiceCard
              image={d.image}
              service={d.service_name}
              aos="fade-up"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
