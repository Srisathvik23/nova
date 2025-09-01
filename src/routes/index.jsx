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
import AboutChingu from "../components/features/AboutChingu";
import ChinguStory from "../components/features/ChinguStory";
import Faq from "../components/Company/Faq";
import PrivacyPolicy from "../components/Company/PrivacyPolicy";
import Darkfooter from '../layout/Darkfooter';
import Lightfooter from '../layout/Lightfooter';

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
        <Route path="/KnowMoreAboutChingu" element={<AboutChingu />} />
        <Route path="/ChinguStory" element={<ChinguStory />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/darkfooter" element={<Darkfooter />} />
        <Route path="/lightfooter" element={<Lightfooter />} />

      </Routes>
    </Layout>
  );
};

export default index;
