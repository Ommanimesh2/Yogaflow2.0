import React from "react";
import "./index.css";
const DotNavigation = ({ totalDots, currentDot, onDotClick }) => {
  return (
    <div className="dot-navigation">
      {Array.from({ length: totalDots }).map((_, index) => (
        <div
          key={index}
          className={`dot ${index === currentDot ? "active" : ""}`}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  );
};

export default DotNavigation;
