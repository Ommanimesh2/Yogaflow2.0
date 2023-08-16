import React from "react";
import "./index.css"; // Import the CSS file for styling

const Rating = ({ value }) => {
  const maxStars = 5; // Maximum number of stars
  const compValue = Math.floor(value);
  const filledStars = Math.min(compValue, maxStars); // Number of filled stars
  const emptyStars = maxStars - filledStars; // Number of empty stars

  return (
    <span className="rating">
      {/* Filled Stars */}
      {Array.from({ length: filledStars }, (_, index) => (
        <span key={`filled-star-${index}`} className="star filled"></span>
      ))}

      {/* Empty Stars */}
      {Array.from({ length: emptyStars }, (_, index) => (
        <span key={`empty-star-${index}`} className="star"></span>
      ))}
    </span>
  );
};

export default Rating;
