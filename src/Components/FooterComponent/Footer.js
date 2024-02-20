import React from 'react'
import './Footer.css'
import Icon1 from '../../assets/SocialIcons1.png'
import Icon2 from '../../assets/SocialIcons2.png'
import Icon3 from '../../assets/SocialIcons3.png'
import Icon4 from '../../assets/SocialIcons4.png'
import Icon5 from '../../assets/SocialIcons5.png'
import ArrowRight from '../../assets/arrow-right.png'

function Footer() {
  return (
    <div className='footer-section'>

      <div className='last-section1'>
        <div className='footer-section-color'>
          <h2 className='footer-section-text1'>Let’s Create or Improve your Idea</h2>
          <p className='footer-section-text2'>Feel free to reach out if you want to collaborate with us, or simply have a chat.</p>
          <h4 className='footer-section-text3'>Become a Client <img src={ArrowRight} className='footer-section-icon' alt='arrow-icon' /></h4>
        </div>
        <div className='last-section2'>
          <div className='footer-section-color'>
            <div className='footer-section-color'>
              <h2 className='footer-section-text4'>Call Us</h2>
              <p className='footer-section-text2'>+91 9589958924</p>
            </div>
            <div className='footer-section-color'>
              <h2 className='footer-section-text4'>E-Mail</h2>
              <p className='footer-section-text2'>hmallina@visheshcountrycache.com</p>
            </div>
          </div>
        </div>
        <div className='footer-section-color'>
          <h2 className='footer-section-text4'>Address</h2>
          <p className='footer-section-text2'>Near HP Petrol Bunk, Undrajavaram, Tanuku, Andhra Pradesh, India Zipcode: 534216</p>
        </div>
      </div>

      <div className='last-section3'>
      <div className='temp-col-temp'></div>
        <div className='footer-section-socialicons'>
          <img src={Icon1} className='social-icon-img' alt='social-icons' />
          <img src={Icon2} className='social-icon-img' alt='social-icons' />
          <img src={Icon3} className='social-icon-img' alt='social-icons' />
          <img src={Icon4} className='social-icon-img' alt='social-icons' />
          <img src={Icon5} className='social-icon-img1' alt='social-icons' />
        </div>
      </div>

      <div className='last-section'>
        <p className='last-text'>PRIVACY POLICY</p>
        <p className='last-text'>ALL RIGHTS RESERVED</p>
        <p className='last-text'>© 2024</p>
      </div>

    </div>
  )
}

export default Footer