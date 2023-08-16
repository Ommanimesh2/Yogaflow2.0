import React from "react";
import "./index.css";
import logo from "../../assets/images/logo.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import footerWaves from "../../assets/images/footer-waves.png";
import instagram from "../../assets/images/instagram.png";
const Footer = ({ top, background }) => {
  return (
    <div className="footer">
      <div className="footer_primary">
        <div className="footer_title">Vandana.Yogaflow | We're here</div>
        <div className="footer_body">
          Hello, I am Vandana trying to make an effort to put the right people
          for you to get the best results. Just insight
        </div>
        <div className="footer_nav">
          <div className="footer_nav_links">Home</div>
          <div className="footer_nav_links">Services</div>
          <div className="footer_nav_links">About</div>
          <div className="footer_nav_links">FAQs</div>
          <div className="footer_nav_links">Contact us</div>
        </div>
      </div>
      <hr />
      <div className="footer_secondary">
        <div className="footer_logo">
          <div className="footer_logo_img">
            <img src={logo} alt="" />
          </div>
          <div className="footer_logo_title">
            Yogaflow <br />
            .Vandana
          </div>
        </div>
        <div className="footer_rights">@ 2023 ABC. All Rights Reserved</div>
        <div className="footer_socials">
          <div className="footer_socials_fb">
            <img src={facebook} alt="" />
          </div>
          <div className="footer_socials_ln">
            <img src={twitter} alt="" />
          </div>
          <div className="footer_socials_tw">
            <img src={instagram} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
