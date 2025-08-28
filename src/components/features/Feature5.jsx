import React from "react";
import featureLogo from "../../assets/Feature1/featureLogo.png";
import feature2 from "../../assets/Feature1/feature5-1.png";
import feature3 from "../../assets/Feature1/feature5-2.png";
import feature4 from "../../assets/Feature1/feature5-3.png";
import { PiDotOutlineFill } from "react-icons/pi";
import "./Features.css";

const Feature5 = () => {
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
        <p className="feature1-main-text">Built for Emotional Safety</p>
        <div className="feature1-1">
          <div className="feature1-1-1">
            <div className="feature1-1-1-1">
              What is Built for Emotional Safety
            </div>
            <div className="feature1-1-1-2">
              Nova has your back with real-time support when things feel off.
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
              Our system gently monitors chats for red flags like pushy language
              or emotional pressure and offers soft warnings like “Hey, we
              noticed a boundary pattern…” It also gives you tools to set kind
              but firm boundaries, right when you need them.
            </div>
          </div>
        </div>
        <div className="feature1-1">
          <div className="feature1-1-1">
            <div className="feature1-1-1-1">Why it matters</div>
            <div className="feature1-1-1-2">
              <div className="feature1-1-1-2-a">
                <PiDotOutlineFill /> Helps spot emotional discomfort early
              </div>
              <div className="feature1-1-1-2-a">
                <PiDotOutlineFill /> Gives you the power to pause or protect the
                vibe
              </div>
              <div className="feature1-1-1-2-a">
                <PiDotOutlineFill /> Keeps dating feel-good, not fear-filled
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

export default Feature5;
