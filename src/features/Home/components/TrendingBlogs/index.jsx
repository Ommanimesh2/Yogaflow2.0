import React from "react";
import "./index.css";
import Carousel from "../../../../app/components/Carousel";
const TrendingBlogs = () => {
  return (
    <div>
      <h1 className="trending_blog_title">Trending Blogs</h1>
      <div className="trending_blog_wrapper">
        <div className="trending_blog_content">
          Embark on a transformative quest as you delve into our captivating
          collection of blogs, designed to expand your holistic health and
          wellness horizons.
          <br />
          <br />
          Uncover the secrets of nutrition, discover invigorating routines,
          explore uplifting lifestyle choices, delve into profound yoga
          philosophies, and embrace a well-rounded approach to a vibrant life.
        </div>
        <div className="trending_blogs_caraousel">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default TrendingBlogs;
