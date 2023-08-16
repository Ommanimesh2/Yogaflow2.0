import React from "react";
import TextEncompasser from "../TextEncompass";
import assert from "../../../../app/assets/images/assert.png";
import anxiety from "../../../../app/assets/images/anxiety.png";
import esteem from "../../../../app/assets/images/esteem.png";
import perfect from "../../../../app/assets/images/perfect.png";
import "./index.css";
const FlipCards = ({ id }) => {
  const setImg = (id) => {
    if (id == 1) return anxiety;
    if (id == 2) return assert;
    if (id == 3) return esteem;
    if (id == 4) return perfect;
  };
  return (
    <div className="fc">
      <div class="flip-card" tabIndex="0">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div className="flip-cover-img">
              <img src={setImg(id)} alt="" />
            </div>
            <TextEncompasser id={id} />
          </div>
          <div class="flip-card-back">
            <div className="list-of-services">
              <TextEncompasser id={id} />
              <ul>
                <li>Tame your inner critic</li>
                <li>Tame your inner critic</li>
                <li>Tame your inner critic</li>
                <li>Tame your inner critic</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCards;
