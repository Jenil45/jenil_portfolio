import React from "react";
import "../Pages/css/Contact.css";

const Itag = (props) => {
  return (
    <div className="i-tag">
      <input
        type="text"
        required="required"
        id={props.important}
        name={props.important}
      />
      <span>{props.name}</span>
    </div>
  );
};

export default Itag;
