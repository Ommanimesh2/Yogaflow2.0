import React from "react";
import blogDemo from "../../assets/images/blogDemo.png";
import goArrow from "../../assets/images/goArrow.png";
import avatar from "../../assets/images/avatar.png";
import getDaysAgo from "../../../utils/date";
import "./index.css";
import { Link } from "react-router-dom";
const BlogCard = ({ content }) => {
  const { id } = content;
  const {
    blog_thumbnail,
    createdAt,
    title,
    description,
    authon_designation,
    author_image,
    author,
    medium_link,
  } = content.attributes;
  return (
    <div>
      <div className="blog_card">
        <div className="blog_card_img">
          <img src={blog_thumbnail} alt="" />
        </div>
        <div className="yogaflow_blog">
          <div className="title">Vandana.Yogaflow</div>
          <div className="time">{getDaysAgo(createdAt, new Date())}</div>
        </div>
        <div className="blog_title">{title}</div>
        <div className="blog_content">{description?.substring(0, 100)}...</div>
        <div className="written_wrapper">
          <div className="blog_written_by">
            <div className="icon">
              <img src={author_image} alt="" />
            </div>

            <div className="blog_author">
              <div className="name">{author}</div>
              <div className="designation">{authon_designation}</div>
            </div>
          </div>
          <div className="blog_go_icon">
            {/* <a href={medium_link} target="_blank" rel="noopener noreferrer">
              <img src={goArrow} alt="" />
            </a> */}
            <Link to={`/blogs/${id}`}>
              <img src={goArrow} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
