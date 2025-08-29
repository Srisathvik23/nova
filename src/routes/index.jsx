import React from "react";
import Layout from "../layout";
import ScrollToTop from "../routes/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../components/landingPage/LandingPage";
import Feature1 from "../components/features/Feature";
import Feature2 from "../components/features/Feature2";
import Feature3 from "../components/features/Feature3";
import Feature4 from "../components/features/Feature4";
import Feature5 from "../components/features/Feature5";
import Feature6 from "../components/features/Feature6";
import Feature7 from "../components/features/Feature7";

const index = () => {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/feelFirstMode" element={<Feature1 />} />
        <Route path="/AISmartBlurForSafety" element={<Feature2 />} />
        <Route path="/NoGhostingMode" element={<Feature3 />} />
        <Route path="/KindStartConversation" element={<Feature4 />} />
        <Route path="/BuiltForEmotionalSafety" element={<Feature5 />} />
        <Route path="/AKindCommunityPolicesItself" element={<Feature6 />} />
        <Route path="/KnowMoreAboutChingu" element={<Feature7 />} />
      </Routes>
    </Layout>
  );
};

export default index;
