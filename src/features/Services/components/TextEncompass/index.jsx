import React from "react";
import "./index.css";
import star from "../../../../app/assets/images/star.png";
const TextEncompasser = ({ id }) => {
  return (
    <div className="encompasser">
      <div className="star-start">
        <img src={star} alt="" srcset="" />
      </div>
      <div className="star-content">{id === 1 && "Assertiveness Training"}</div>
      <div className="star-content">{id === 2 && "Anxiety"}</div>
      <div className="star-content">{id === 3 && "Self-Esteem"}</div>
      <div className="star-content">{id === 4 && "Perfectionism"}</div>
      <div className="star-start">
        <img src={star} alt="" srcset="" />
      </div>
    </div>
  );
};

export default TextEncompasser;
