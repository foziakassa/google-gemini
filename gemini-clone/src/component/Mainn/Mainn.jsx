import React from "react";
import "./Mainn.css";
import { assets } from "../../assets/assets";
const Mainn = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>hello</span>
          </p>
          <p>heow can i help you</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Lorem ipsum dolor sit ame</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit ame</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit ame</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit ame</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder="Enter" />
                <div className="">
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon}alt="" />
                </div>
            </div>
            <p className="bottom-info">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, aut quo neque odio ut eligen
            </p>

        </div>
      </div>
    </div>
  );
};
export default Mainn;
