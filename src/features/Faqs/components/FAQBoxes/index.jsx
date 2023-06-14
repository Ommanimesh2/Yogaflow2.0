import { useState } from "react";
import React from "react";
import dropDownUp from "../../../../app/assets/images/brown-plus.png";
import dropDownDown from "../../../../app/assets/images/white-plus.png";
import "./index.css";

const FAQBoxes = ({ question, answer, id }) => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <div className="tab" style={{ backgroundColor: toggle ? "white" : "" }}>
      <input type="checkbox" id={`chek${id}`} />
      <label
        className="tab-label"
        onClick={() => setToggle(!toggle)}
        for={`chek${id}`}
      >
        <div className="tab-title">
          <h1 className="tab-number">0{id}</h1>
          <div className="tab-question">{question}</div>
        </div>
        <div className="tab-img">
          <img src={!toggle ? dropDownDown : dropDownUp} alt="" />
        </div>
      </label>
      <div className="tab-content">{answer}</div>
    </div>
  );
};

export default FAQBoxes;
