import React from "react";
import "./index.css";
const ScrollText = ({ content }) => {
  return (
    <div class="ticker">
      <div class="ticker-title">
        <div>{content}</div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default ScrollText;
