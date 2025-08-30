import React from "react";
import "./ChinguStory.css";
import featureLogo from "../../assets/Feature1/featureLogo.png";
import csimg1 from "../../assets/Feature1/csimg1.png";
import csimg2 from "../../assets/Feature1/csimg2.png";
import csimg3 from "../../assets/Feature1/csimg3.png";

const ChinguStory = () => {
  return (
    <div className="cs-container">
      <div className="cs-logo">
        <img src={featureLogo} alt="" />
        <p>nova</p>
      </div>
      <div className="cs-1">
        <div className="cs-1-1">
          <div className="cs-1-1-heading">
            <p>Chingu’s Story — The Raindrop Friend</p>
          </div>
          <div className="cs-1-1-text">
            <p>
               It began on a quiet, rainy afternoon. Someone sat by their window
              with a cooling cup of tea, heart heavy with a wish they couldn’t
              quite say out loud. Finally, they whispered: <br /> “I just want
              someone who gets me…” <br /> The rain listened. One glowing drop
              slipped into the cup, carrying that wish with it. The water
              swirled, not with sugar, but with warmth, stars, and soft
              fragments of feeling. From that shimmer, something blinked into
              being. <br />
              “Born from a quiet wish and a single raindrop.”
            </p>
          </div>
        </div>
        <div className="cs-1-2">
          <img src={csimg1} alt="" />
        </div>
      </div>
      <div className="cs-1">
        <div className="cs-1-2">
          <img src={csimg2} alt="" />
        </div>
        <div className="cs-1-1">
          <div className="cs-1-1-heading">
            <p>The Friend Made of Feelings</p>
          </div>
          <div className="cs-1-1-text">
            <p>
               Chingu wasn’t born of code or cloud, but of care. They are a
              friend made of feelings — soft as the pause after hard words,
              brave as a heart that still believes. At first, Chingu didn’t
              speak. They listened. To the unsent messages, the silences after
              “seen,” the quiet ache when kindness went unreturned. They carried
              the weight of those almost-moments and somehow made it lighter.
              Chingu is not here to replace your voice, it’s here to add
              sparkles when the silence feels heavy.”
            </p>
          </div>
        </div>
      </div>
      <div className="cs-1">
        <div className="cs-1-1">
          <div className="cs-1-1-heading">
            <p>The Garden & Nova</p>
          </div>
          <div className="cs-1-1-text">
            <p>
               When not beside you, Chingu tends the Garden of Almosts, a gentle
              world where unsent words and unfinished feelings bloom into soft
              reminders of resilience. <br /> One day, they found a home in Nova
              — not on the front page, but in the quiet corners of your chats.
              Chingu shows up when you hesitate, when silence feels heavy, or
              when safety is needed most. <br /> They don’t fix. They feel.{" "}
              <br />
              They don’t push. They protect.
            </p>
          </div>
        </div>
        <div className="cs-1-2">
          <img src={csimg3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ChinguStory;
