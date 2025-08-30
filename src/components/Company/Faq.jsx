import React from "react";
import "./Company.css";
// import featureLogo from "../../assets/Feature1/featureLogo.png";

const faqs = [
  {
    q: "How does Nova keep me safe?",
    a: "Nova prioritizes your safety with profile verification, AI-backed scam detection, privacy controls, and reporting/blocking features.",
  },
  {
    q: "What data do you collect?",
    a: "We only collect the minimum data needed—such as profile info, preferences, and usage patterns—to improve your experience. Your data is never sold.",
  },
  {
    q: "What is Feel First mode?",
    a: "Feel First lets you focus on emotional connection before physical attraction by limiting profile pictures initially.",
  },
  {
    q: "What are Vibe & Kind scores?",
    a: "Vibe Score reflects how well your energy matches with others, while Kind Score highlights respectful and thoughtful interactions.",
  },
  {
    q: "Why are matches limited daily?",
    a: "To encourage meaningful conversations, Nova offers a set number of curated matches each day.",
  },
  {
    q: "What happens if someone stops replying?",
    a: "If a conversation fades, Nova offers a gentle closure option so you’re not left guessing.",
  },
  {
    q: "What does Chingu do?",
    a: "Chingu is your AI buddy who helps break the ice, suggests thoughtful replies, and gives conversation tips so chats feel natural.",
  },
  {
    q: "How do I get verified?",
    a: "You can verify your profile with a quick selfie inside the app.",
  },
  {
    q: "Why is verification important?",
    a: "Verification builds trust and ensures you’re meeting real, authentic people.",
  },
  {
    q: "Is it free to download?",
    a: "Yes, Nova is free to download and use, with optional premium upgrades.",
  },
  {
    q: "How can I contact support?",
    a: (
      <>
        You can reach our support team directly in the app or via{" "}
        <a href="mailto:help@novadating.in">help@novadating.in</a>.
      </>
    ),
  },
];

const Faq = () => {
  return (
    <div className="faq-container" role="region" aria-labelledby="faq-heading">
      {/* <div className="cs-logo">
        <img src={featureLogo} alt="" />
        <p>nova</p>
      </div> */}
      <p id="faq-heading" className="faq-heading">FAQ's</p>

      {faqs.map(({ q, a }, idx) => (
        <div className="faq-sub-heading-box" key={idx}>
          <p className="faq-sub-heading">Q: {q}</p>
          <p className="faq-text">{a}</p>
        </div>
      ))}
    </div>
  );
};

export default Faq;
