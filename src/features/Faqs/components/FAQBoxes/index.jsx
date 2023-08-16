import { useState } from "react";
import React from "react";
import dropDownUp from "../../../../app/assets/images/dropDownDown.png";
import dropDownDown from "../../../../app/assets/images/dropDownUp.png";
import "./index.css";

const FAQBoxes = ({ question, answer, id }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="tab">
      <input type="checkbox" id={`chek${id}`} />
      <label
        className="tab-label"
        onClick={() => setToggle(!toggle)}
        for={`chek${id}`}
      >
        <div className="tab-title">
          <div className="tab-question">{question}</div>
        </div>
        <div className="tab-img">
          <img src={!toggle ? dropDownUp : dropDownDown} alt="" />
        </div>
      </label>
      <div className="tab-content">{answer}</div>
    </div>
  );
};

export default FAQBoxes;
