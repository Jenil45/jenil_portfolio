import React from "react";
import "../Pages/css/Contact.css";

const ContactCard = (props) => {
  const Image = props.image;
  return (
    <div className="c-card text-[white]">
      <div className="cc-left">
        <Image size={35} style={{ fill: "black" }} />
      </div>
      <div className="cc-right">
        <span>{props.detail}</span>
      </div>
    </div>
  );
};

export default ContactCard;
