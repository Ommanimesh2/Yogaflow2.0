import React from "react";
import "./index.css";
import Footer from "../../app/components/Footer";
const Contact = () => {
  return (
    <>
    <div style={{backgroundColor:"#F7F4F3"}}>
      <div className="contact">
        <div className="contact-form">
          <h1>Get in touch</h1>
          <form action="">
            <input placeholder="Name" type="text" />
            <input placeholder="E-mail" type="text" />
            <input placeholder="Message" type="text" />
          </form>
          <button className="contact-btn">Contact Us</button>
        </div>
        <div className="contact-location">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d257238.88599778965!2d-122.36989278419647!3d37.455636942074804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sMountain%20View%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1681017187279!5m2!1sen!2sin" width="522" height="470" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className="contact-details">
                <div className="contact-mail">ommanimeshmishra@gmail.com</div>
                <div className="contact-phone">8093232149</div>
            </div>
        </div>
      </div>
    </div>
    <Footer top='72' background={false}/>

    </>
  );
};

export default Contact;
