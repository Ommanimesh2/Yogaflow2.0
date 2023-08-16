import React from "react";
import "./index.css";
import blogDemo from "../../../../app/assets/images/course.png";
import getDaysAgo from "../../../../utils/date";
import { Link } from "react-router-dom";
const CourseCard = ({ content }) => {
  const {
    title,
    description,
    udemy_link,
    thumbnail,
    price,
    createdAt,
    type,
    id,
  } = content;
  return (
    <div>
      <div className="course_card">
        <div className="course_card_img">
          <img src={thumbnail} alt="" />
        </div>
        <div className="yogaflow_course">
          <button className="status_title">online</button>
          <div className="time">{getDaysAgo(createdAt, new Date())}</div>
        </div>
        <div className="course_title">{title}</div>
        <div className="course_content">{description.substring(0, 70)}...</div>
        <div className="btn_box">
          <div className="price_box">INR {price}/m</div>
          {type === "consultation" && (
            <Link to={`/consult/${id}`}>
              <div className="details">View Details</div>
            </Link>
          )}
          {type != "consultation" && (
            <Link to={`/course/${id}`}>
              <div className="details">View Details</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
