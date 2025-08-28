import React, { useState } from "react";
import "./LandingPage.css";
import mainlogo from "../../assets/LandingPageImages/mainLogo.png";
import qr from "../../assets/LandingPageImages/qr.png";
import pic2 from "../../assets/LandingPageImages/pic2.png";
import pic3 from "../../assets/LandingPageImages/pic3.png";

import "./LandingPage.css"; // create this file for CSS

const LandingPage = () => {
  const [open] = useState(false);

  return (
    <>
      <div className="landing-page-1">
        <nav className="lp-nav">
          <div className="lp-nav-logo">
            <img src={mainlogo} alt="logo" />
            <p>nova</p>
          </div>

          <ul className="lp-nav-texts">
            <li className="dropdown">
              Features ▾
              {open && (
                <ul className="dropdown-content">
                  <li>a</li>
                  <li>a</li>
                  <li>a</li>
                  <li>a</li>
                </ul>
              )}
            </li>
            <li>Why nova</li>
            <li>About us</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="lp-1-text">
          <p>
            Find someone who <br />
            listens, not just likes.
          </p>
        </div>
        <div className="lp-1-qr-box">
          <p>
            Download <br />
            Nova
          </p>
          <img src={qr} alt="" />
        </div>
      </div>

      <div className="landing-page-2">
        <div className="landing-page-22">
          <div className="landing-page-2-1">
            <div className="landing-page-2-1-1">
              Dating shouldn’t drain you.
            </div>
            <div className="landing-page-2-1-2">
              You deserve better. Nova is built to make dating feel human
              again.No pressure. No ghosting. Just safe, soft, and soulful
              connection.
            </div>
          </div>
          <div className="landing-page-2-2">
            <img src={pic2} alt="" />
          </div>
        </div>
      </div>
      <div className="landing-page-3">
        <div className="landing-page-33">
          <div className="landing-page-3-1">
            <div className="landing-page-3-1-1">
              Meet Chingu! Where Safety Meets Care
            </div>
            <div className="landing-page-3-1-2">
              Meet Chingu, the Vibe Buddy in Nova who truly gets your mood. It
              celebrates your highs, eases your lows, and gently points out red
              flags to keep you safe. With Chingu by your side, dating feels
              lighter, kinder, and a little more magical
            </div>
            <button className="landing-page-3-1-3">
              Know more about chingu
            </button>
          </div>
          <div className="landing-page-3-2">
            <img src={pic3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
