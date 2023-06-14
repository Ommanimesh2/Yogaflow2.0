import React from 'react'
import Testimonials from './components/Testimonials'
import Welcome from './components/Welcome'
import Wellness from './components/Wellness'
import Footer from '../../app/components/Footer'
import './index.css'
const Home = () => {
  return (
    <div className='home'>
      <Welcome/>
      <Wellness/>
      <Testimonials/>
      <Footer top='305' background={true}/>
    </div>
  )
}

export default Home
