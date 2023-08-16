import React, { useEffect } from "react";
import Testimonials from "./components/Testimonials";
import Welcome from "./components/Welcome";
import Wellness from "./components/Wellness";
import Footer from "../../app/components/Footer";
import WhyYoga from "./components/WhyYoga";
import BlogCard from "../../app/components/BlogCard";
import TrendingBlogs from "./components/TrendingBlogs";
import ClientCaraousel from "../../app/components/ClientCarousel";
import "./index.css";
import { motion } from "framer-motion";

const Home = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  useEffect(() => {
    var copy = document.querySelector(".logos-slide")?.cloneNode(true);
    document.querySelector(".logos")?.appendChild(copy);
  });
  return (
    <>
      <div className="home">
        {" "}
        <Welcome /> <WhyYoga /> <Wellness /> <TrendingBlogs />{" "}
        <div className="testimonial_head">Our Satisfied Clients</div>
        <div class="logos">
          <div class="logos-slide">
            {items.map((item) => {
              return <Testimonials />;
            })}
          </div>
        </div>
        <div className="home_ending">
          Undisturbed calmness of mind is attained by cultivating friendliness
          toward the happy, compassion for the unhappy, and indifference toward
          the wicked.
        </div>
      </div>
    </>
  );
};

export default Home;
