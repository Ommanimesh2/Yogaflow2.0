import React from "react";
import "./index.css";
import circles from "../../../../app/assets/gifs/circles.gif";
import wellIcon from "../../../../app/assets/images/wellnessIcon.png";
const Wellness = () => {
  return (
    <>
      <div className="wellness_wrapper">
        <div className="circles_image_wrapper">
          <img src={circles} alt="" />
        </div>
        <div className="wellness_cards_wrapper">
          <div className="wellness_card">
            <div className="wellness_card_img">
              <img src={wellIcon} alt="" />
            </div>
            <div className="wellness_card_text">
              <div className="heading">Full Rejuvination</div>
              <div className="body">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum llit anim id est
                laborum
              </div>
            </div>
          </div>
          <div className="wellness_card">
            <div className="wellness_card_img">
              <img src={wellIcon} alt="" />
            </div>
            <div className="wellness_card_text">
              <div className="heading">Extension of Spring</div>
              <div className="body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                officiis tempora ut nesciunt mollitia libero!
              </div>
            </div>
          </div>
          <div className="wellness_card">
            <div className="wellness_card_img">
              <img src={wellIcon} alt="" />
            </div>
            <div className="wellness_card_text">
              <div className="heading">Against Aging</div>
              <div className="body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                officiis tempora ut nesciunt mollitia libero!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wellness;
