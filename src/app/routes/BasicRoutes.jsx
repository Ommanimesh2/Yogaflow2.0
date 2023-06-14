import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../features/Home';
import Services from '../../features/Services';
import About from '../../features/About';
import Contact from '../../features/Contact';
import Faqs from '../../features/Faqs';


const BasicRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/services'} element={<Services />} />
      <Route path={'/about'} element={<About />} />
      <Route path={'/contact'} element={<Contact />} />
      <Route path={'/faqs'} element={<Faqs />} />
    </Routes>
  );
};

export default BasicRoutes;