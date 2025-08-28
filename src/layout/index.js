import React from "react";
import Footer from "../layout/Footer.jsx";

export default function AppLayout(props) {
  return (
    <div>
      {props.children}
      <Footer />
    </div>
  );
}
