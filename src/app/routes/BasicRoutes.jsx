import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../features/Home";
import Services from "../../features/Services";
import About from "../../features/About";
import Contact from "../../features/Contact";
import Faqs from "../../features/Faqs";
import Programs from "../../features/Programs";
import Blogs from "../../features/Blogs";
import Consultation from "../../features/Consultation";
import UniqueBlogs from "../../features/UniqueBlogs";
import Course from "../../features/Course";
import BookASession from "../../features/BookASession";
const BasicRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/services"} element={<Services />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/contact"} element={<Contact />} />
      <Route path={"/faqs"} element={<Faqs />} />
      <Route path={"/bookasession"} element={<BookASession />} />
      <Route path={"/programs"} element={<Programs />} />
      <Route path={"/blogs"} element={<Blogs />} />
      <Route path={"consult/:id"} element={<Consultation />} />
      <Route path={"blogs/:id"} element={<UniqueBlogs />} />
      <Route path={"course/:id"} element={<UniqueBlogs />} />
    </Routes>
  );
};

export default BasicRoutes;
