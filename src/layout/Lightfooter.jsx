import React from "react";
import "./Lightfooter.css";
import FooterNovaLogo from "../assets/footer/footerlogo.png";
import playStore from "../assets/footer/PlayStoreLogo.png";
import apple from "../assets/footer/applelogo.png";
import linkedin from "../assets/footer/Linkedin.png";
import insta from "../assets/footer/Insta.png";
import twitter from "../assets/footer/Twitter.png";
import discord from "../assets/footer/Discord.png";
import zero from "../assets/footer/zeroLogo.png";
import snap from "../assets/footer/Snap.png";

const Lightfooter = () => {
  return (
    <div className="lt-footer-container">
      <div className="lt-ft-1">
        <div className="lt-ft-1-1">
          <img className="lt-ft-1-1-logo" src={FooterNovaLogo} alt="" />
          <p className="lt-ft-1-1-text">nova</p>
        </div>
        <div className="lt-ft-1-2">
          <div className="lt-ft-1-2-a">
            <h6 className="lt-ft-1-2-heading">Support</h6>
            <ul className="lt-ft-1-2-text">
              <li>FAQ</li>
              <li>Guidelines</li>
              <li>Safety Tips</li>
            </ul>
          </div>
          <div className="lt-ft-1-2-b">
            <h6 className="lt-ft-1-2-heading">Legal</h6>
            <ul className="lt-ft-1-2-text">
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Accessibility & Transparency</li>
              <li>Nova Data Retention & Deletion Policy</li>
              <li>Nova Content Moderation Policy</li>
            </ul>
          </div>
          <div className="lt-ft-1-2-c">
            <h6 className="lt-ft-1-2-heading">Company</h6>
            <ul className="lt-ft-1-2-text">
              <li>Careers</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lt-ft-2">
        <div className="lt-ft-2-1">
          <div className="lt-ft-2-1-a">
            <img className="lt-ft-2-1-icon" src={playStore} alt="" />
            <div className="lt-ft-2-1-a-text">
              <p className="lt-ft-2-1-a-text-1">Get it on</p>
              <p className="lt-ft-2-1-a-text-2">Google play store</p>
            </div>
          </div>
          <div className="lt-ft-2-1-b">
            <img className="lt-ft-2-1-icon2" src={apple} alt="" />
            <div className="lt-ft-2-1-a-text">
              <p className="lt-ft-2-1-a-text-1">Get it on</p>
              <p className="lt-ft-2-1-a-text-2">App store</p>
            </div>
          </div>
        </div>
        <div className="lt-ft-2-2">
          <div className="lt-ft-2-2-icons">
            <img src={linkedin} alt="" />
            <img src={twitter} alt="" />
            <img src={insta} alt="" />
            <img src={zero} alt="" />
            <img src={snap} alt="" />
            <img src={discord} alt="" />
          </div>
          <p className="lt-ft-2-2-text">
            Copyright © 2025 – present. nova. All rights reserved.
          </p>
        </div>
      </div>
      <div className="lt-ft-3">
        <img src={FooterNovaLogo} alt="" />
        <p>Made with love, HYD</p>
      </div>
    </div>
  );
};

export default Lightfooter;
