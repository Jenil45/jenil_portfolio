import React, { useState } from "react";
import "./css/Contact.css";
import ContactCard from "../SubElement/ContactCard";
import Itag from "../SubElement/Itag";
import { contactdetail, contactinfo } from "../../Data/Contact";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const ci = contactinfo.data;
  const cd = contactdetail.data;
  const [res, setRes] = useState(false);

  const [state, handleSubmit] = useForm("mknlglgw");
  if (state.succeeded) {
    // setRes(true);
    // return;
  }

  return (
    <div
      id="Contact"
      className="h-[65rem] md:h-[45rem] py-[5rem] relative bg-[#0b0c10] mt-[3rem]  rounded-t-[10rem] flex flex-col gap-[2rem] items-center text-center relative"
    >
      <div className="content absolute left-[10%] top-[13%]">
        <h1 className="text-[3rem] text-[#66cff1]">Contacts</h1>
      </div>
      <div className="contact md:mt-[12rem]">
        <div className="c-left">
          <form onSubmit={handleSubmit}>
            {/* Contact form */}
            <h1 className="text-[1.5rem] pb-[0.3rem] border-none border-b-[2px] border-b-[black]">
              Send Message
            </h1>
            {res ? (
              <h1 className="bg-[black] rounded p-[0.2rem] flex items-center text-[0.7rem] gap-[0.7rem] pb-[0.3rem] text-[#66cff1] border-none border-b-[2px] border-b-[black]">
                <div>
                  Your mail has been sent! We will look after your message
                </div>
                <div className="close text-[white] cursor-pointer">X</div>
              </h1>
            ) : (
              ""
            )}

            {cd.map((c) => {
              return <Itag name={c.deatail1} important={c.name} />;
            })}
            <div className="i-tag">
              <textarea required="required" name="message" id="message" />
              <span>Type your message here...</span>
            </div>
            <button type="submit" disabled={state.submitting} className="btn">
              Send
            </button>
          </form>
        </div>
        <div className="c-right">
          {ci.map((c) => {
            return <ContactCard image={c.image} detail={c.deatail1} />;
          })}

          <div className="flex gap-[1.8rem] ml-[1rem] mt-[3rem]">
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
    </div>
  );
};

export default Contact;
