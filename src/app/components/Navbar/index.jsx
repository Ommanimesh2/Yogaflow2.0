import { Link } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const navRef = useRef();
  const [navShow, setNavShow] = useState(false);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 70) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    if (navShow) {
      setNavShow(false);
    } else {
      setNavShow(true);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <>
      <header className={color ? "header_nav header_on_show" : "header_nav"}>
        <div className="logo">
          <img src={logo} alt="" srcset="" />
          <div className="title">
            <div className="title_first">Yogaflow</div>
            <div className="title_second">.Vandana</div>
          </div>
        </div>
        <nav ref={navRef}>
          <Link style={{ textDecoration: "none" }} to="/">
            <div className="navlinks">Home</div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/about">
            <div className="navlinks">About</div>
          </Link>
          {/* <Link style={{textDecoration: 'none'}}  to="/resources"><div className='navlinks'>Resources</div></Link> */}
          <Link style={{ textDecoration: "none" }} to="/services">
            <div className="navlinks">Services</div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/faqs">
            <div className="navlinks">FAQ</div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/contact">
            <div className="navlinks">Contact Me</div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/programs">
            <div className="navlinks">Programs</div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/blogs">
            <div className="navlinks">Blogs</div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/bookasession">
            <div className="navlinks">Book Session</div>
          </Link>
          {/* <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
          </button> */}
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          {navShow ? "" : <FaBars />}
        </button>
      </header>
    </>
  );
};

export default Navbar;
