import React from "react";
import "./Darkfooter.css";
import LightFooterNovaLogo from "../assets/footer/lightfooterlogo.png";
import playStore from "../assets/footer/PlayStoreLogo.png";
import apple from "../assets/footer/applelogo.png";
import lightlinkedin from "../assets/footer/lightlinkdin.png";
import lightinsta from "../assets/footer/lightinsta.png";
import lighttwitter from "../assets/footer/lighttwitter.png";
import lightdiscord from "../assets/footer/lightdiscord.png";
import lightzero from "../assets/footer/lightzero.png";
import lightsnap from "../assets/footer/lightsnap.png";

const Darkfooter = () => {
  return (
    <div className="df-footer-container">
      <div className="df-ft-1">
        <div className="df-ft-1-1">
          <img className="df-ft-1-1-logo" src={LightFooterNovaLogo} alt="" />
          <p className="df-ft-1-1-text">nova</p>
        </div>
        <div className="df-ft-1-2">
          <div className="df-ft-1-2-a">
            <h6 className="df-ft-1-2-heading">Support</h6>
            <ul className="df-ft-1-2-text">
              <li>FAQ</li>
              <li>Guidelines</li>
              <li>Safety Tips</li>
            </ul>
          </div>
          <div className="df-ft-1-2-b">
            <h6 className="df-ft-1-2-heading">Legal</h6>
            <ul className="df-ft-1-2-text">
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Accessibility & Transparency</li>
              <li>Nova Data Retention & Deletion Policy</li>
              <li>Nova Content Moderation Policy</li>
            </ul>
          </div>
          <div className="df-ft-1-2-c">
            <h6 className="df-ft-1-2-heading">Company</h6>
            <ul className="df-ft-1-2-text">
              <li>Careers</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="df-ft-2">
        <div className="df-ft-2-1">
          <div className="df-ft-2-1-a">
            <img className="df-ft-2-1-icon" src={playStore} alt="" />
            <div className="df-ft-2-1-a-text">
              <p className="df-ft-2-1-a-text-1">Get it on</p>
              <p className="df-ft-2-1-a-text-2">Google play store</p>
            </div>
          </div>
          <div className="df-ft-2-1-b">
            <img className="df-ft-2-1-icon2" src={apple} alt="" />
            <div className="df-ft-2-1-a-text">
              <p className="df-ft-2-1-a-text-1">Get it on</p>
              <p className="df-ft-2-1-a-text-2">App store</p>
            </div>
          </div>
        </div>
        <div className="df-ft-2-2">
          <div className="df-ft-2-2-icons">
            <img src={lightlinkedin} alt="" />
            <img src={lighttwitter} alt="" />
            <img src={lightinsta} alt="" />
            <img src={lightzero} alt="" />
            <img src={lightsnap} alt="" />
            <img src={lightdiscord} alt="" />
          </div>
          <p className="df-ft-2-2-text">
            Copyright © 2025 – present. nova. All rights reserved.
          </p>
        </div>
      </div>
      <div className="df-ft-3">
        <img src={LightFooterNovaLogo} alt="" />
        <p>Made with love, HYD</p>
      </div>
    </div>
  );
};

export default Darkfooter;
