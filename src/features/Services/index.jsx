import React from "react";
import "./index.css";
import serviceCard1 from "../../app/assets/images/service-card1.png";
import serviceCard2 from "../../app/assets/images/service-card2.png";
import serviceCard3 from "../../app/assets/images/service-card3.png";
import Footer from "../../app/components/Footer";
import serviceCard4 from "../../app/assets/images/service-card4.png";
const Services = () => {
  return (
    <>
    <div>
      <div className="services">
        <h1>Services</h1>
        <div className="services-card-container">
          <div
            className="service-card"
            style={{ backgroundImage: `url(${serviceCard1})` }}
            >
            <div className="service-heading">Yoga</div>
            <ul className="service-body">
             <li>Tame your inner-critic</li> 
             <li>Learn self-compassion </li>
             <li>   Set more reasonable &</li>
              <li>realistic goals </li>
              <li>Become aware of your tendencies</li>
            </ul>
          </div>
          <div
            className="service-card"
            style={{ backgroundImage: `url(${serviceCard2})` }}
            >
            <div className="service-heading">Yoga</div>
                       <ul className="service-body">
             <li>Tame your inner-critic</li> 
             <li>Learn self-compassion </li>
             <li>   Set more reasonable &</li>
              <li>realistic goals </li>
              <li>Become aware of your tendencies</li>
            </ul>
          </div>
          <div
            className="service-card"
            style={{ backgroundImage: `url(${serviceCard3})` }}
          >
            <div className="service-heading">Yoga</div>
                       <ul className="service-body">
             <li>Tame your inner-critic</li> 
             <li>Learn self-compassion </li>
             <li>   Set more reasonable &</li>
              <li>realistic goals </li>
              <li>Become aware of your tendencies</li>
            </ul>
          </div>
          <div
            className="service-card"
            style={{ backgroundImage: `url(${serviceCard4})` }}
            >
            <div className="service-heading">Yoga</div>
                       <ul className="service-body">
             <li>Tame your inner-critic</li> 
             <li>Learn self-compassion </li>
             <li>   Set more reasonable &</li>
              <li>realistic goals </li>
              <li>Become aware of your tendencies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer top='72' background={false}/>
            </>
  );
};

export default Services;
