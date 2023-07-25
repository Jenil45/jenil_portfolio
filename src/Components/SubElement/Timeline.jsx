import React from "react";
import "./css/timeline.css";
import EdCard from "./EdCard";
import "./css/ScrollAnim";

const Timeline = () => {
  const data = [
    {
      range: "2017-2018",
      type: "Secondary School",
      organization: "Navsari Highschool",
    },
    {
      range: "2019-2020",
      type: "Higher Secondary School",
      organization: "Sanskar Samruddhhi School of Excellence",
    },
    {
      range: "2020-Present",
      type: "B.E. in Computer Engineering",
      organization: "Government Engineering College,Gandhinagar",
    },
  ];

  return (
    <div className="timeline try">
      {data.map((d) => {
        return (
          <EdCard range={d.range} type={d.type} organization={d.organization} />
        );
      })}
    </div>
  );
};

export default Timeline;
