import React from 'react';
import './HomePage.css';
import video from '../../assets/HomePage/Video.mp4';
import AboutUS from '../../assets/HomePage/AboutUs.png'
import OurServices from './OurServicesComponent/OurServices';
import FeaturedProject from './FeaturedProjectComponent/FeaturedProject';

function HomePage() {
  return (
    <div>

      {/**    Web view view       */}
      <div className='home-main-section'>
        <h2 className='home-main-heading'>Turning Technological Needs</h2>
        <div className='home-heading-video'>
          <div className='video-container'>
            <video className='video' controls autoPlay muted loop>
              <source src={video} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
          <h2 className='home-main-heading'> into Enduring Realities</h2>
        </div>
        <p className='home-section-para'>We tackle your business challenges head-on through strategic product design, cutting-edge tech solutions, and effective marketing. We help turn your business dreams into reality.</p>
      </div>
      {/**    Mobile view         */}
      <div className='home-main-section1'>
        <h2 className='home-main-heading'>Turning Technological Needs into Enduring Realities</h2>
        <p className='home-section-para'>We tackle your business challenges head-on through strategic product design, cutting-edge tech solutions, and effective marketing. We help turn your business dreams into reality.</p>
      </div>

      {/**    Video Section       */}
      <video className='video1' controls autoPlay muted loop>
        <source src={video} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/**    Our Services Section */}
      <OurServices />

      {/**    About Us Section     */}
      <div className='home-about-section'>
        <div>
          <h2 className='home-about-heading'>Who We Are</h2>
          <p className='home-about-para'>Over the past seven years, we have produced groundbreaking work that aligns with our clients' needs and their audiences' desires.</p>
          <p className='home-about-para'>We like to think of ourselves as the ones who bring wild, ambitious, and experimental ideas to life, but we invite you to be the judge of that. Our mission is to drive engagement, understanding, and action through every experience we create.</p>
          <button className='about-us-btn'>About Us</button>
        </div>
        <div>
          <img src={AboutUS} className='about-us-img' alt='about-us' />
        </div>
      </div>

      {/**    VISHESH COUNTRY CACHE * FOSTERING INTELLECT SCROLLING Section  */}
      <div class="scroll-container">
        <div class="scroll-text">
          <h1 className='vishesh-scroll-heading'> * VISHESH COUNTRY CACHE * FOSTERING INTELLECT * VISHESH COUNTRY CACHE * FOSTERING INTELLECT * VISHESH COUNTRY CACHE * FOSTERING INTELLECT * </h1>
        </div>
      </div>

    


    </div>
  );
}

export default HomePage;
