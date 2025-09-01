import React from "react";
import featureLogo from "../../assets/Feature1/featureLogo.png";
import feature2 from "../../assets/Feature1/feature4-1.png";
import feature3 from "../../assets/Feature1/feature4-2.png";
import feature4 from "../../assets/Feature1/feature4-3.png";
import { PiDotOutlineFill } from "react-icons/pi";
import "./Features.css";
import Lightfooter from "../../layout/Lightfooter";

const Feature4 = () => {
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
        <p className="feature1-main-text">Kind Start conversation</p>
        <div className="feature1-1">
          <div className="feature1-1-1">
            <div className="feature1-1-1-1">
              What is Kind start conversation
            </div>
            <div className="feature1-1-1-2">
              Tired of the same old “Hey”? Nova sparks real chats with fun
              prompts like “What always makes you laugh?” ,making intros way
              less awkward.
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
              These icebreakers are tailored to spark real emotion, playful,
              curious, or deep, depending on your energy and match. Nova reads
              the mood so you don’t have to overthink it.
            </div>
          </div>
        </div>
        <div className="feature1-1">
          <div className="feature1-1-1">
            <div className="feature1-1-1-1">Why it matters</div>
            <div className="feature1-1-1-2">
              <div className="feature1-1-1-2-a">
                <PiDotOutlineFill /> That first message sets the tone for
                everything that follows.
              </div>
              <div className="feature1-1-1-2-a">
                <PiDotOutlineFill /> Nova helps you skip the awkward intros and
                dive into real, engaging conversations.
              </div>
              <div className="feature1-1-1-2-a">
                <PiDotOutlineFill /> Every hello feels natural ,turning matches
                into something meaningful.
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

export default Feature4;
