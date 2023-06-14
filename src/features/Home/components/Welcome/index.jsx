import React from 'react'
import './index.scss'
import welcome from '../../../../app/assets/images/welcome.png'
import find_more_btn from '../../../../app/assets/images/find_more_btn.png'
const Welcome = () => {
  return (
    <div className='welcome'>
      <img src={welcome} alt="" />
      <div id="leaves">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>

      </div>
      <div className="welcome_content">
        <div className="welcome_title">
          <p className='title'>Welcome to</p>
          <p className='yogaflow'>Yogaflow.vandana</p>
          <div className="attrs">
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fuga repudiandae ab culpa officia beatae, doloremque iusto sunt distinctio deserunt.
            </p>
            <button class="blob-btn">
              Find Out More
              <span class="blob-btn__inner">
                <span class="blob-btn__blobs">
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                </span>
              </span>
            </button>
          </div>
        </div>
        <div className="welcome_img">
          something
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export default Welcome
