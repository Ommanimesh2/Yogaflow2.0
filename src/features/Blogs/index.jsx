import React from "react";
import "./index.css";
import search_icon from "../../app/assets/images/search_icon.svg";
import { useState, useEffect } from "react";
import { useFetch } from "../../app/hooks/useFetch";
import BlogCard from "../../app/components/BlogCard";
import API from "../../app/api/axios";
import getDaysAgo from "../../utils/date";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchHandler = async (e) => {
    const query = e.target.value;
    console.log(query);
    setLoading(true);
    setTimeout(async () => {
      const response = await API.get(
        `blogs?filters[$or][0][author][$containsi]=${query}&filters[$or][1][title][$containsi]=${query}&filters[$or][2][description][$containsi]=${query}`
      );
      const result = response.data.data;
      console.log(result);
      setBlogs(result);
      setLoading(false);
    }, 1000);
  };
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await API.get("blogs");
      setBlogs(response.data.data);
    };
    fetchBlogs();
  }, []);
  const arr = [1, 23, 12, 31, 23, 12, 3, 12, 31, 23, 1, 23, 1];
  return (
    <div className="blog_page_wrapper">
      <div className="blog_page_title">Trending Blogs</div>
      <div className="blog_page_content">
        Embark on a transformative quest as you delve into our captivating
        collection of blogs, designed to expand your holistic health and
        wellness horizons.Uncover the secrets of nutrition, discover
        invigorating routines, explore uplifting lifestyle choices, delve into
        profound yoga philosophies, and embrace a well-rounded approach to a
        vibrant life.
      </div>
      <form className="search-container">
        <img src={search_icon} alt="search-icon" />
        <input
          onChange={(e) => searchHandler(e)}
          className="search-input"
          placeholder="Search for Blogs, Topics, person or any keyword"
        />
      </form>
      <div className="blogs_container_wrapper">
        {!loading & (blogs?.length > 0) &&
          blogs?.map((e) => {
            return <BlogCard content={e} />;
          })}
      </div>
    </div>
  );
};

export default Blogs;
