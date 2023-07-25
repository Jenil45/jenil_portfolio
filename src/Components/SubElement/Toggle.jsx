import React from "react";
// import "https://unpkg.com/ionicons@latest/dist/ionicons.js";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";

const Toggle = () => {
  return (
    <div>
      <div className="toggle">
        <Moon />
        <Sun />

        <div className="t-button"></div>
      </div>
    </div>
  );
};

export default Toggle;
