import React from "react";
import "../Pages/css/Services.css";
import Github from "@iconscout/react-unicons/icons/uil-github";

const ServiceCard = (props) => {
  const Image = props.image;
  return (
    <div className="s-card" data-aos={props.aos}>
      <div>
        <Image size={65} />
      </div>
      <h1>{props.service}</h1>
    </div>
  );
};

export default ServiceCard;
