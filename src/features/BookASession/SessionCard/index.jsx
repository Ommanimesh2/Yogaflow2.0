import React from "react";
import "./index.css";
import tick from "../../../app/assets/images/ticksession.svg";
import whiteTick from "../../../app/assets/images/whiteTick.svg";
import { useContext } from "react";
import dataContext from "../../../app/context/datacontext";
const SessionCard = ({ data, wholeData, setSessionOrder, id }) => {
  const {
    heading,
    description,
    price,
    feature_1,
    feature_2,
    feature_3,
    feature_4,
    feature_5,
    feature_6,
  } = data;
  const { orderedSession, setOrderedSession } = useContext(dataContext);

  function animateAndHide() {
    setOrderedSession(wholeData);
    const div = document.querySelector(".shown_book_form");
    const root = document.querySelector(".App");

    div.style.transform = "translateY(0)";
    div.style.transition = "2s";
    div.classList.add("show");
  }
  const imgCover = id === 1 ? whiteTick : tick;
  return (
    <>
      <div className={id == 1 ? "session_card_imp" : "session_card"}>
        <div className="session_card_wrapper">
          <div className="session_heading"> {heading}</div>
          <div className="session_price">
            <span> $ {price}</span> <span>/ per month</span>
          </div>
          <div className="session_description"> {description}</div>
          <div className="session_feature">
            <img src={imgCover} alt="" /> <span> {feature_1}</span>
          </div>
          <div className="session_feature">
            <img src={imgCover} alt="" /> <span> {feature_2}</span>
          </div>
          <div className="session_feature">
            <img src={imgCover} alt="" /> <span> {feature_3}</span>
          </div>
          <div className="session_feature">
            <img src={imgCover} alt="" /> <span> {feature_4}</span>
          </div>
          <div className="session_feature">
            <img src={imgCover} alt="" /> <span> {feature_5}</span>
          </div>
          <button onClick={() => animateAndHide()} className="session_book">
            Book Session
          </button>
        </div>
      </div>
    </>
  );
};

export default SessionCard;
