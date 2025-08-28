import React from "react";
import featureLogo from "../../assets/Feature1/featureLogo.png";
import feature2 from "../../assets/Feature1/feature7-1.png";
import feature3 from "../../assets/Feature1/feature7-2.png";
import feature4 from "../../assets/Feature1/feature7-3.png";
import "./Features.css";

const Feature7 = () => {
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
        <p className="feature1-main-text">Meet Chingu: The Vibe Buddy</p>
        <div className="feature1-1">
          <div className="feature1-1-1">
            <div className="feature1-1-1-1">What is Chingu?</div>
            <div className="feature1-1-1-2">
              Chingu is Nova’s gentle AI companion, part guardian, part best
              friend. It listens, adapts, and flows with your feelings, making
              dating feel safe, soft, and human. Chingu never takes over your
              chats, it simply mirrors your vibe, offering comfort, sparks, or
              calm exactly when you need it.
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
              Chingu senses the tone of your conversations and flows with your
              emotional rhythm.Excited? It adds playful sparkles.Sad? It slows
              down and offers comfort.Anxious? It lightens the mood with silly
              gibberish words or grounding nudges.It also watches for red flags,
              abusive language, or unsafe behaviour and gently warns both sides,
              keeping the space kind and respectful.
            </div>
          </div>
        </div>
        <div className="feature1-1">
          <div className="feature1-1-1">
            <div className="feature1-1-1-1">Why it matters</div>
            <div className="feature1-1-1-2">
              <div className="feature1-1-1-2-a">
                Dating isn’t just about matches, it’s about how you feel while
                connecting. Chingu makes sure you never navigate that alone.
                With Chingu by your side, every conversation feels supported,
                safer, and more real. It’s your Vibe Buddy, always tuned in,
                always kind, and always on your team.
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

export default Feature7;
