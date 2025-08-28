import React from "react";
import featureLogo from "../../assets/Feature1/featureLogo.png";
import feature2 from "../../assets/Feature1/feature2-1.png";
import feature3 from "../../assets/Feature1/feature2-2.png";
import { PiDotOutlineFill } from "react-icons/pi";
import "./Features.css";

const Feature2 = () => {
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
        <p className="feature1-main-text">AI Smart Blur for Safety</p>
        <div className="feature1-1">
          <div className="feature1-1-1">
            <div className="feature1-1-1-1">
              What is AI Smart Blur for Safety
            </div>
            <div className="feature1-1-1-2">
              A smart privacy feature that uses AI to protect your identity
              until the vibe feels right.
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
              Nova’s AI softly observes how your conversation flows—tone, pace,
              mutual interest—and only suggests unblurring your photo when it
              senses comfort and safety on both sides.
            </div>
          </div>
        </div>
        <div className="feature1-1">
          <div className="feature1-1-1">
            <div className="feature1-1-1-1">Why it matters</div>
            <div className="feature1-1-1-2">
              <div className="feature1-1-1-2-a">
                <PiDotOutlineFill /> Keeps your identity private until you feel ready
              </div>
              <div className="feature1-1-1-2-a">
                <PiDotOutlineFill /> Prevents premature reveals or awkward moments
              </div>
              <div className="feature1-1-1-2-a">
                <PiDotOutlineFill /> Empowers meaningful, low-pressure connections
              </div>
            </div>
          </div>
          <div className="feature1-1-2">
            <img src={feature2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature2;
