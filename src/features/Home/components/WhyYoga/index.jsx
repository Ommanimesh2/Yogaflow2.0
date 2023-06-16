import React from "react";
import why_yoga from "../../../../app/assets/images/whyYoga.png";
import ScrollText from "../../../../app/components/ScrollText";
import "./index.css";
const WhyYoga = () => {
  return (
    <div>
      <div className="why_yoga_wrapper">
        <div className="why_yoga">
          <p className="why_first">
            Why should you start practicing meditation and yoga?
          </p>
          <p className="why_second">
            Meditation and yoga is your ally taking care of your health. It acts
            as a gentle massage of our internal organs and invigorate the entire
            body, strengthens the immune system and improves overall well-being.
          </p>
          <br />
          <br />
          <p className="why_third">
            Join us to learn and practice Chakra. Write a supportive community
            where everyone is welcome from beginners to advance level.
          </p>
        </div>
        <div className="why_yoga_img">
          <img height={425} width={375} src={why_yoga} alt="" />
        </div>
      </div>
      <ScrollText content="ANCIENT WISDOM MEETS MODERN WELLNESS" />
    </div>
  );
};

export default WhyYoga;
