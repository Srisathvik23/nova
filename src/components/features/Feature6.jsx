import React from "react";
import featureLogo from "../../assets/Feature1/featureLogo.png";
import feature2 from "../../assets/Feature1/feature6-1.png";
import feature3 from "../../assets/Feature1/feature6-2.png";
import feature4 from "../../assets/Feature1/feature6-3.png";
import { PiDotOutlineFill } from "react-icons/pi";
import "./Features.css";
import Lightfooter from "../../layout/Lightfooter";

const Feature6 = () => {
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
        <p className="feature1-main-text">A Kind Community Polices Itself</p>
        <div className="feature1-1">
          <div className="feature1-1-1">
            <div className="feature1-1-1-1">
              What is A Kind Community Polices Itself
            </div>
            <div className="feature1-1-1-2">
              Nova nurtures a respectful space by tracking how users treat each
              other because kindness is more than a vibe, it’s a value.
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
              Your Kindness Score grows with good behavior: respectful replies,
              proper closures, and thoughtful communication. It also reflects
              patterns like ghosting, abrupt unmatches, or reported messages.
              The better your score, the more you’re rewarded with visibility
              boosts and trust badges.
            </div>
          </div>
        </div>
        <div className="feature1-1">
          <div className="feature1-1-1">
            <div className="feature1-1-1-1">Why it matters</div>
            <div className="feature1-1-1-2">
              <div className="feature1-1-1-2-a">
                <PiDotOutlineFill /> Encourages mindful, respectful interactions
              </div>
              <div className="feature1-1-1-2-a">
                <PiDotOutlineFill /> Discourages toxic behavior early
              </div>
              <div className="feature1-1-1-2-a">
                <PiDotOutlineFill /> Helps build a space where emotional safety
                thrives
              </div>
            </div>
          </div>
          <div className="feature1-1-2">
            <img src={feature4} alt="" />
          </div>
        </div>
      </div>
      <Lightfooter/>
    </>
  );
};

export default Feature6;
