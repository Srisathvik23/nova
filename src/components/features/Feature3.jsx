import React from "react";
import featureLogo from "../../assets/Feature1/featureLogo.png";
import feature2 from "../../assets/Feature1/feature3-1.png";
import feature3 from "../../assets/Feature1/feature3-2.png";
import feature4 from "../../assets/Feature1/feature3-3.png";
import { PiDotOutlineFill } from "react-icons/pi";
import "./Features.css";

const Feature3 = () => {
  return (
    <>
      <div className="feature1-container">
        <div className="feature-nav">
          <div className="feature-logo-box">
            <div className="feature-logo">
              <img src={featureLogo} alt="" />
            </div>
            <div className="feature-text">nova</div>
          </div>
          <div className="feature-text-box">
            <ul>
              <li>Features</li>
              <li>Why nova</li>
              <li>About us</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="feature-btn-box">
            <button>Download now</button>
          </div>
        </div>
        <p className="feature1-main-text">No Ghosting Mode</p>
        <div className="feature1-1">
          <div className="feature1-1-1">
            <div className="feature1-1-1-1">What is No ghosting mode</div>
            <div className="feature1-1-1-2">
              Nova makes it easier to exit conversations kindly, without the
              awkwardness.
            </div>
          </div>
          <div className="feature1-1-2">
            <img src={feature2} alt="" />
          </div>
        </div>
        <div className="feature1-2">
          <div className="feature1-2-2">
            <img src={feature3} alt="" />
          </div>
          <div className="feature1-2-1">
            <div className="feature1-2-1-1">How it works</div>
            <div className="feature1-2-1-2">
              If things slow down, Nova offers gentle nudges, thoughtful closure
              options, and pre-written messages you can send with one tap. It’s
              designed to ease the pressure, not create it.
            </div>
          </div>
        </div>
        <div className="feature1-1">
          <div className="feature1-1-1">
            <div className="feature1-1-1-1">Why it matters</div>
            <div className="feature1-1-1-2">
              <div className="feature1-1-1-2-a">
                <PiDotOutlineFill /> Reduces ghosting anxiety for both sides
              </div>
              <div className="feature1-1-1-2-a">
                <PiDotOutlineFill /> Promotes emotional clarity and respectful
                communication
              </div>
              <div className="feature1-1-1-2-a">
                <PiDotOutlineFill /> Encourages mindful dating with honest
                endings
              </div>
            </div>
          </div>
          <div className="feature1-1-2">
            <img src={feature4} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature3;
