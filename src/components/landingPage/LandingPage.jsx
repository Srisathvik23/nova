import React, { useState } from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

import mainlogo from "../../assets/LandingPageImages/mainLogo.png";
import qr from "../../assets/LandingPageImages/qr.png";
import pic2 from "../../assets/LandingPageImages/pic2.png";
import pic3 from "../../assets/LandingPageImages/pic3.png";

const LandingPage = () => {

  const navigate = useNavigate();


  // Touch fallback: on phones/tablets (no hover), clicking "Features" will toggle the menu
  const [touchOpen, setTouchOpen] = useState(false);

  const onDropClick = () => {
    // only toggle on devices that don’t support hover
    if (window.matchMedia && window.matchMedia("(hover: none)").matches) {
      setTouchOpen((v) => !v);
    }
  };

  return (
    <>
      <div className="landing-page-1">
        <nav className="lp-nav">
          <div className="lp-nav-logo">
            <img src={mainlogo} alt="logo" />
            <p>nova</p>
          </div>

          <ul className="lp-nav-texts">
            <li className={`dropdown ${touchOpen ? "open" : ""}`}>
              <button
                className="dropbtn"
                aria-haspopup="dialog"
                aria-expanded={touchOpen}
                onClick={onDropClick}
              >
                Features ▾
              </button>

              {/* Popover panel */}
              <div
                className="features-popover"
                role="dialog"
                aria-label="Features"
              >
                <div className="features-grid">
                  <section className="feature-tile" onClick={() => navigate("/feelFirstMode")}>
                    <h3>Feel first Mode</h3>
                    <p>
                      Nova flips the script on dating by prioritizing emotional
                      chemistry over looks. No endless swiping. No instant
                      judgments.
                    </p>
                  </section>

                  <section className="feature-tile" onClick={() => navigate("/KindStartConversation")}>
                    <h3>Kind Start conversation</h3>
                    <p>
                      Tired of “Hey”? Nova sparks real chats with fun prompts
                      like “What always makes you laugh?”, making intros way
                      less awkward.
                    </p>
                  </section>

                  <section className="feature-tile" onClick={() => navigate("/AISmartBlurForSafety")}>
                    <h3>AI Smart Blur for Safety</h3>
                    <p>
                      A smart privacy feature that uses AI to protect your
                      identity until the vibe feels right.
                    </p>
                  </section>

                  <section className="feature-tile" onClick={() => navigate("/BuiltForEmotionalSafety")}>
                    <h3>Built for Emotional Safety</h3>
                    <p>
                      Nova has your back with real-time support when things feel
                      off.
                    </p>
                  </section>

                  <section className="feature-tile" onClick={() => navigate("/NoGhostingMode")}>
                    <h3>No Ghosting Mode</h3>
                    <p>Exit conversations kindly, without the awkwardness.</p>
                  </section>

                  <section className="feature-tile" onClick={() => navigate("/AKindCommunityPolicesItself")}>
                    <h3>A Kind Community Polices Itself</h3>
                    <p>
                      Nova nurtures a respectful space—kindness isn’t just a
                      vibe, it’s a value.
                    </p>
                  </section>
                </div>
              </div>
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
          <img src={qr} alt="Download QR" />
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
            <button className="landing-page-3-1-3" onClick={() => navigate("/KnowMoreAboutChingu")}>
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
