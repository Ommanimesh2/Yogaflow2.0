import React from "react";
import Testimonials from "./components/Testimonials";
import Welcome from "./components/Welcome";
import Wellness from "./components/Wellness";
import Footer from "../../app/components/Footer";
import WhyYoga from "./components/WhyYoga";
import BlogCard from "../../app/components/BlogCard";
import "./index.css";
const Home = () => {
  return (
    <div className="home">
      <Welcome />
      <WhyYoga />
      <Wellness />
      <BlogCard />
      <Footer top="305" background={true} />
    </div>
  );
};

export default Home;
