import React from 'react'
import './index.scss'
import welcome from '../../../../app/assets/images/welcome.png'
import welcome_gif from '../../../../app/assets/gifs/welcomeYoga.gif'
import find_more_btn from '../../../../app/assets/images/find_more_btn.png'
import facebook from '../../../../app/assets/images/facebook.png'
import twitter from '../../../../app/assets/images/twitter.png'
import footerWaves from '../../../../app/assets/images/footer-waves.png'
import instagram from '../../../../app/assets/images/instagram.png'
const Welcome = () => {
  return (
    <div className='welcome'>
     
  
      <div className="welcome_content">
        <div className="welcome_title">
          <p className='yogaflow'>Yogaflow.vandana</p>
          <div className="attrs">
            <p className='text'>
            Welcome to YogaFlow.Vandana, where ancient wisdom meets modern wellness. With our customized Ayurvedic therapies and transformative yoga classes, we help you cultivate a deeper sense of self-awareness, nourish your body and mind, and tap into your inner power.
            </p>
            <div className="find_out_more">
            Book your seat here.
            </div>
          </div>
        </div>
        <div className="welcome_img">
          <img src={welcome_gif} alt="" max-width={400} width={562} height={562}/>
        </div>
      </div>
      <div className="small_social_wrapper">

      <div className="footer_socials">
          <div className="footer_socials_fb"><img src={facebook} alt="" /></div>
          <div className="footer_socials_ln"><img src={twitter} alt="" /></div>
          <div className="footer_socials_tw"><img src={instagram} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
