import "./index.css";
import BasicRoutes from "./routes/BasicRoutes";
import React from "react";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import WebFont from "webfontloader";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import ContextProvider from "./context/ContextProvider";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Playfair Display", "Gilroy", "Poppins", "Inter"],
      },
    });
  }, []);

  return (
    <ContextProvider>
      <div className="App">
        <ScrollToTop />
        <motion.section>
          <InitialTransition />
        </motion.section>
        <motion.section initial="initial" animate="animate" variants={content}>
          <motion.div initial="initial" animate="animate" variants={title}>
            <Navbar />
            <BasicRoutes />
            <Footer />
          </motion.div>
        </motion.section>
      </div>
    </ContextProvider>
  );
}

export default App;

const InitialTransition = ({ setContinues }) => {
  // Scroll user to top to avoid showing the footer
  React.useState(() => {
    typeof windows !== "undefined" && window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="motion-container"
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      onAnimationComplete={() =>
        document.body.classList.remove("overflow-hidden")
      }
    >
      <motion.div variants={textContainer}>
        <motion.div variants={text}>Vandana</motion.div>
      </motion.div>
    </motion.div>
  );
};

const content = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 2.8 },
  },
};

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const blackBox = {
  initial: {
    height: "100%",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};
