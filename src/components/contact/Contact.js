import React from "react";
import "./Contact.css";
import Message from "./Icon material-message.png";
import LinkedIn from "./Icon awesome-linkedin@2x.png";
import Phone from "./Icon awesome-phone.png";
import Mail from "./Icon ionic-ios-mail.png";
import { Switch, Route } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Contact = () => {
  return (
    <div className="contact-bar">
      {/* <strong>Contact Me</strong>
      <div className='icons'>
        <div>
          <img src='https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-gmail-icon-download-png-and-vector-1.png' alt='Gmail' />
        </div>
        <div>
          <img src='https://www.freepnglogos.com/uploads/linkedin-blue-style-logo-png-0.png' alt='LinkedIn' />
        </div>
      </div>

      <div className='phonenum'>
        <img src='https://www.pngkit.com/png/full/94-943942_593-transparent-background-phone-icon-white.png' alt='Phone' className='phone' />
        <p>555-555-5555</p>
      </div> */}
      <div className="contact-form">
        <strong>Contact Me</strong>
        <div>
          <img src={Message} alt="Message" className="icons" />
        </div>
        <div>
          <img src={LinkedIn} className="icons" />
        </div>
        <div>
          <img src={Phone} className="icons" />
        </div>
        <div>
          <img src={Mail} className="icons" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
