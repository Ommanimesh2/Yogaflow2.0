import React from "react";
import "./index.css";
import FlipCards from "./components/Flipcard";
import { motion } from "framer-motion";
const Services = () => {
  const arr = [1, 2, 3, 4];
  return (
    <motion.div exit={{ opacity: 0 }}>
      <div>
        <div className="services-title">We offer these services..</div>
        <div className="flip-cards-container">
          {arr.map((e) => {
            return <FlipCards id={e} />;
          })}
        </div>
        <div className="still_confused">
          Still confused about our services <br /> and what we offer? Contact Us
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
