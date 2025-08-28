import React from "react";
import featureLogo from "../../assets/Feature1/featureLogo.png";
import feature2 from "../../assets/Feature1/feature1-1.png";
import feature3 from "../../assets/Feature1/feature1-2.png";
import feature4 from "../../assets/Feature1/feature1-3.png";
import { PiDotOutlineFill } from "react-icons/pi";
import "./Features.css";

const Feature = () => {
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
        <p className="feature1-main-text">Feel first Mode</p>
        <div className="feature1-1">
          <div className="feature1-1-1">
            <div className="feature1-1-1-1">What is Feel first Mode</div>
            <div className="feature1-1-1-2">
              Nova flips the script on dating by prioritizing emotional
              chemistry over looks. No endless swiping. No instant judgments.
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
              Start conversations based on shared thoughts, moods, and vibes.
              Match through playful prompts, or shared answers, before any
              photos are shown. Only after the spark starts, do faces appear.
            </div>
          </div>
        </div>
        <div className="feature1-1">
          <div className="feature1-1-1">
            <div className="feature1-1-1-1">Why it matters</div>
            <div className="feature1-1-1-2">
              <div className="feature1-1-1-2-a">
                <PiDotOutlineFill /> Build genuine emotional connections
              </div>
              <div className="feature1-1-1-2-a">
                <PiDotOutlineFill/> Reduce bias and pressure around appearances
              </div>
              <div className="feature1-1-1-2-a">
                <PiDotOutlineFill /> Let your personality shine before the
                profile pic
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

export default Feature;
