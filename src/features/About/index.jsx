import React from "react";
import movie from "../../app/assets/videos/movie.mov";
import "./index.css";
import about from "../../app/assets/images/about.png";
import aboutLeaf from "../../app/assets/images/aboutLeaf.png";
import Gallery from "./components/Gallery";
const About = () => {
  return (
    <div>
      <div className="movie_player">
        <div className="top_box"></div>
        <video src={movie} autoPlay></video>
        <div className="bottom_box"></div>
      </div>
      <div className="about_me_wrapper">
        <div className="about_img">
          <img src={about} alt="" />
        </div>
        <div className="about_content">
          <h3>Hello</h3>
          <h1>I'm Vandana</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            facilis itaque omnis praesentium maiores architecto obcaecati error
            porro, animi accusamus minima nulla quaerat, impedit esse. Itaque
            quia consectetur ipsa corrupti? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Modi labore rem sapiente laboriosam
            consectetur veniam reprehenderit ipsum libero pariatur, obcaecati
            voluptate, laborum quod accusantium optio, adipisci cum minima fuga
            quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eos, optio? Velit rerum ipsa quis eum nam obcaecati ex ipsam beatae?
          </p>
        </div>
      </div>
      <div className="what_I_do_wrapper">
        <div className="do_content">
          <div className="do_title">What I do?</div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
            vitae. Maxime ea iure itaque ab dignissimos, facilis quod magni!
            Aliquid.
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            doloribus distinctio consectetur iure eveniet sequi sapiente error
            pariatur id necessitatibus!
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            deleniti perferendis reiciendis repudiandae ipsam. Quibusdam
            recusandae sed minima est voluptatum!
          </p>
        </div>
        <div className="do_img">
          <img src={aboutLeaf} alt="" />
        </div>
      </div>
      {/* <div class="parent">
        <div class="div1">
          {" "}
          <img src="" alt="" />{" "}
        </div>
        <div class="div2">
          {" "}
          <img src="" alt="" />{" "}
        </div>
        <div class="div3">
          {" "}
          <img src="" alt="" />{" "}
        </div>
        <div class="div4">
          {" "}
          <img src="" alt="" />{" "}
        </div>
        <div class="div5">
          {" "}
          <img src="" alt="" />{" "}
        </div>
        <div class="div6">
          {" "}
          <img src="" alt="" />{" "}
        </div>
      </div> */}
      <Gallery />
    </div>
  );
};

export default About;
