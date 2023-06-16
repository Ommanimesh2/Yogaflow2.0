import React from "react";
import blogDemo from "../../assets/images/blogDemo.png";
import goArrow from "../../assets/images/goArrow.png";
import avatar from "../../assets/images/avatar.png";
import "./index.css";
const BlogCard = () => {
  return (
    <div>
      <div className="blog_card">
        <div className="blog_card_img">
          <img src={blogDemo} alt="" />
        </div>
        <div className="yogaflow_blog">
          <div className="title">Vandana.yogaflow</div>
          <div className="time">3 days ago</div>
        </div>
        <div className="blog_title">asdfasdfas</div>
        <div className="blog_content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem nihil
          sapiente ipsum.
        </div>
        <div className="written_wrapper">
          <div className="blog_written_by">
            <div className="icon">
              <img src={avatar} alt="" />
            </div>
            <div className="blog_author">
              <div className="name">arewqw</div>
              <div className="designation">sdfasdfeafdfasdfd sadf </div>
            </div>
          </div>
          <div className="blog_go_icon">
            <img src={goArrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
