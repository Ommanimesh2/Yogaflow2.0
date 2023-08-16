import React, { useEffect, useState } from "react";
import "./index.css";
import { useParams } from "react-router-dom";
import API from "../../app/api/axios";
import ReactMarkdown from "react-markdown";
import BlogCard from "../../app/components/BlogCard";
import remarkGfm from "remark-gfm";
const UniqueBlogs = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await API.get(`/blog-contents/2?populate=*`);
      setBlogData(resp.data.data);
      console.log(resp.data.data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await API.get("blogs");

      const shuffledBlogs = response.data.data.sort(() => 0.5 - Math.random());
      const randomThreeBlogs = shuffledBlogs.slice(0, 3);
      setBlogs(randomThreeBlogs);
    };
    fetchBlogs();
  }, []);
  const formatDate = (datestring) => {
    const dateObject = new Date(datestring);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = dateObject.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  return (
    <div>
      <div className="blog-container-wrapper">
        <div className="minute_details">
          <div className="written_by_blog">
            Written by:- {blogData?.attributes?.blog.data.attributes.author}
          </div>
          <div className="date_time_blog">
            {formatDate(blogData?.attributes?.publishedAt)}
          </div>
        </div>
        <h1 className="heading">{blogData?.attributes?.title}</h1>
        <h3>{blogData?.attributes?.sub_title}</h3>
        <h3>{blogData?.attributes?.sub_title2}</h3>
        {blogData?.attributes?.cover_image?.data?.attributes?.url && (
          <img
            src={`http://localhost:1337${blogData?.attributes?.cover_image?.data?.attributes?.url}`}
            alt=""
          />
        )}
        <br />
        <i>{blogData?.attributes?.description}</i>
        <div className="blog_image_comp">
          {blogData?.attributes?.blog_image_1?.data?.attributes?.url && (
            <img
              src={`http://localhost:1337${blogData?.attributes?.blog_image_1?.data?.attributes?.url}`}
              alt=""
            />
          )}
        </div>
        <div className="blog_content_comp">
          <ReactMarkdown
            children={blogData?.attributes?.blog_content_1}
            remarkPlugins={[remarkGfm]}
          />
        </div>
        <h5>{blogData?.attributes?.heading_1}</h5>

        <div className="blog_image_comp">
          {blogData?.attributes?.blog_image_2?.data?.attributes?.url && (
            <img
              src={`http://localhost:1337${blogData?.attributes?.blog_image_2?.data?.attributes?.url}`}
              alt=""
            />
          )}
        </div>
        <div className="blog_content_comp">
          <ReactMarkdown
            children={blogData?.attributes?.blog_content_2}
            remarkPlugins={[remarkGfm]}
          />
        </div>
        <h5>{blogData?.attributes?.heading_2}</h5>

        <div className="blog_image_comp">
          {blogData?.attributes?.blog_image_3?.data?.attributes?.url && (
            <img
              src={`http://localhost:1337${blogData?.attributes?.blog_image_3?.data?.attributes?.url}`}
              alt=""
            />
          )}
        </div>
        <div className="blog_content_comp">
          <ReactMarkdown
            children={blogData?.attributes?.blog_content_3}
            remarkPlugins={[remarkGfm]}
          />
        </div>
        <h5>{blogData?.attributes?.heading_3}</h5>
        <div className="blog_image_comp">
          {blogData?.attributes?.blog_image_4?.data?.attributes?.url && (
            <img
              src={`http://localhost:1337${blogData?.attributes?.blog_image_4?.data?.attributes?.url}`}
              alt=""
            />
          )}
        </div>
        <div className="blog_content_comp">
          <ReactMarkdown
            children={blogData?.attributes?.blog_content_4}
            remarkPlugins={[remarkGfm]}
          />
        </div>
        <h5>{blogData?.attributes?.heading_4}</h5>
        <div className="blog_image_comp">
          {blogData?.attributes?.blog_image_5?.data?.attributes?.url && (
            <img
              src={`http://localhost:1337${blogData?.attributes?.blog_image_5?.data?.attributes?.url}`}
              alt=""
            />
          )}
        </div>
        <div className="blog_content_comp">
          <ReactMarkdown
            children={blogData?.attributes?.blog_content_5}
            remarkPlugins={[remarkGfm]}
          />
        </div>
        <h5>{blogData?.attributes?.heading_5}</h5>
        <div className="blog_image_comp">
          {blogData?.attributes?.blog_image_6?.data?.attributes?.url && (
            <img
              src={`http://localhost:1337${blogData?.attributes?.blog_image_6?.data?.attributes?.url}`}
              alt=""
            />
          )}
        </div>
        <div className="blog_content_comp">
          <ReactMarkdown
            children={blogData?.attributes?.blog_content_6}
            remarkPlugins={[remarkGfm]}
          />
        </div>
        <h5>{blogData?.attributes?.heading_6}</h5>
        <div className="blog_image_comp">
          {blogData?.attributes?.blog_image_7?.data?.attributes?.url && (
            <img
              src={`http://localhost:1337${blogData?.attributes?.blog_image_7?.data?.attributes?.url}`}
              alt=""
            />
          )}
        </div>
        <div className="blog_content_comp">
          <ReactMarkdown
            children={blogData?.attributes?.blog_content_7}
            remarkPlugins={[remarkGfm]}
          />
        </div>
        <hr />
        <div className="blog_links">
          <h3>Sources</h3>
          <a href={`${blogData?.attributes?.reference_1}`}>
            {blogData?.attributes?.reference_1}
          </a>
          <br />
          <a href={`${blogData?.attributes?.reference_2}`}>
            {blogData?.attributes?.reference_2}
          </a>
          <br />
          <a href={`${blogData?.attributes?.reference_3}`}>
            {blogData?.attributes?.reference_3}
          </a>
          <br />
          <a href={`${blogData?.attributes?.reference_4}`}>
            {blogData?.attributes?.reference_4}
          </a>
          <br />
          <a href={`${blogData?.attributes?.reference_5}`}>
            {blogData?.attributes?.reference_5}
          </a>
          <br />
          <a href={`${blogData?.attributes?.reference_6}`}>
            {blogData?.attributes?.reference_6}
          </a>
          <br />
          <a href={`${blogData?.attributes?.reference_7}`}>
            {blogData?.attributes?.reference_7}
          </a>
          <br />
        </div>
        <hr />
        <div className="blog_more">Other Blogs</div>
      </div>
      <div className="blog_unique_container">
        {blogs?.map((e) => (
          <BlogCard key={e.id} content={e} />
        ))}
      </div>
    </div>
  );
};

export default UniqueBlogs;
