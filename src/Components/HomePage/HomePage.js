import React from 'react';
import './HomePage.css';
import video from '../../assets/HomePage/Video.mp4';
import video2 from '../../assets/HomePage/video2.mp4';
import video3 from '../../assets/HomePage/video3.mp4';
import AboutUS from '../../assets/HomePage/AboutUs.png'
import OurServices from './OurServicesComponent/OurServices';
import Vector from '../../assets/HomePage/Vector.png'
import FeaturedProject from './FeaturedProjectComponent/FeaturedProject';
import ClientLogos from './ClientLogosComponent/ClientLogos';
import { useNavigate } from 'react-router-dom';
import Reviews from './ReviewsComponent/Reviews';
import LatestUpdates from './LatestUpdatesComponent/LatestUpdates';

function HomePage() {
  const navigate = useNavigate();
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
          <img src={AboutUS} className='about-us-img1' alt='about-us' />
          <button onClick={() => { navigate('/about') }} className='about-us-btn'>About Us</button>
        </div>
        <div>
          <img src={AboutUS} className='about-us-img' alt='about-us' />
        </div>
      </div>

      {/**    VISHESH COUNTRY CACHE * FOSTERING INTELLECT SCROLLING Section  */}
      <div class="scroll-container">
        <div class="scroll-text">
          <h1 className='vishesh-scroll-heading'>
            <img className='heading-scroll-img' src={Vector} /> VISHESH COUNTRY CACHE  <img className='heading-scroll-img' src={Vector} /> FOSTERING INTELLECT <img className='heading-scroll-img' src={Vector} /> VISHESH COUNTRY CACHE <img className='heading-scroll-img' src={Vector} /> FOSTERING INTELLECT  <img className='heading-scroll-img' src={Vector} /> VISHESH COUNTRY CACHE <img className='heading-scroll-img' src={Vector} /> FOSTERING INTELLECT  <img className='heading-scroll-img' src={Vector} /> </h1>
        </div>
      </div>

      {/* Featured Projects Section  
      <FeaturedProject />
*/}
      {/**    logo slider 
      <ClientLogos />
*/}

      {/**    Reviews Section     */}
      <Reviews />


      {/**    teams heading SCROLLING Section  */}
      <div className='team-heading-sections'>
        <hr />
        <div class="scroll-container1">
          <div class="scroll-text">
            <h1 className='team-scroll-heading'>
              <img className='heading-scroll-img1' src={Vector} /> CREATIVE DESIGN  <img className='heading-scroll-img1' src={Vector} /> UI/UX <img className='heading-scroll-img1' src={Vector} /> FULL STACK DEVELOPMENT <img className='heading-scroll-img1' src={Vector} /> CREATIVE DESIGN  <img className='heading-scroll-img1' src={Vector} /> UI/UX <img className='heading-scroll-img1' src={Vector} /> FULL STACK DEVELOPMENT  <img className='heading-scroll-img1' src={Vector} />
              CREATIVE DESIGN  <img className='heading-scroll-img1' src={Vector} /> UI/UX <img className='heading-scroll-img1' src={Vector} /> FULL STACK DEVELOPMENT <img className='heading-scroll-img1' src={Vector} /> CREATIVE DESIGN  <img className='heading-scroll-img1' src={Vector} /> UI/UX <img className='heading-scroll-img1' src={Vector} /> FULL STACK DEVELOPMENT  <img className='heading-scroll-img1' src={Vector} />
              CREATIVE DESIGN  <img className='heading-scroll-img1' src={Vector} /> UI/UX <img className='heading-scroll-img1' src={Vector} /> FULL STACK DEVELOPMENT <img className='heading-scroll-img1' src={Vector} /> CREATIVE DESIGN  <img className='heading-scroll-img1' src={Vector} /> UI/UX <img className='heading-scroll-img1' src={Vector} /> FULL STACK DEVELOPMENT  <img className='heading-scroll-img1' src={Vector} />
              CREATIVE DESIGN  <img className='heading-scroll-img1' src={Vector} /> UI/UX <img className='heading-scroll-img1' src={Vector} /> FULL STACK DEVELOPMENT <img className='heading-scroll-img1' src={Vector} /> CREATIVE DESIGN  <img className='heading-scroll-img1' src={Vector} /> UI/UX <img className='heading-scroll-img1' src={Vector} /> FULL STACK DEVELOPMENT  <img className='heading-scroll-img1' src={Vector} /> </h1>
          </div>
        </div>
        <hr />
        <div class="scroll-container1">
          <div class="scroll-text2">
            <h1 className='team-scroll-heading'>
              <img className='heading-scroll-img1' src={Vector} /> DIGITAL MARKETING  <img className='heading-scroll-img1' src={Vector} /> MARKETING ANALYSIS <img className='heading-scroll-img1' src={Vector} /> DIGITAL MARKETING <img className='heading-scroll-img1' src={Vector} /> MARKETING ANALYSIS  <img className='heading-scroll-img1' src={Vector} /> DIGITAL MARKETING <img className='heading-scroll-img1' src={Vector} /> MARKETING ANALYSIS  <img className='heading-scroll-img1' src={Vector} />
              DIGITAL MARKETING  <img className='heading-scroll-img1' src={Vector} /> MARKETING ANALYSIS <img className='heading-scroll-img1' src={Vector} /> DIGITAL MARKETING <img className='heading-scroll-img1' src={Vector} /> MARKETING ANALYSIS  <img className='heading-scroll-img1' src={Vector} />
              DIGITAL MARKETING  <img className='heading-scroll-img1' src={Vector} /> MARKETING ANALYSIS <img className='heading-scroll-img1' src={Vector} /> DIGITAL MARKETING <img className='heading-scroll-img1' src={Vector} /> MARKETING ANALYSIS  <img className='heading-scroll-img1' src={Vector} /> DIGITAL MARKETING <img className='heading-scroll-img1' src={Vector} /> MARKETING ANALYSIS  <img className='heading-scroll-img1' src={Vector} />
              DIGITAL MARKETING  <img className='heading-scroll-img1' src={Vector} /> MARKETING ANALYSIS <img className='heading-scroll-img1' src={Vector} /> DIGITAL MARKETING <img className='heading-scroll-img1' src={Vector} /> MARKETING ANALYSIS  <img className='heading-scroll-img1' src={Vector} /> </h1>
          </div>
        </div>
        <hr />
      </div>

      {/**    Latest Updates Section      */}
      <LatestUpdates />

      {/**    Work with us section         
      <div className='work-withus-section'>
        <h2 className='work-section-heading'>
          <span>As</span>
          <div className='video-container4'>
            <video className='video4' controls autoPlay muted loop>
              <source src={video2} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
          <span>aspiring enthusiasts, we combined our professional skills, empathy, and shared values to build a unique</span>
          <div className='video-container4'>
            <video className='video4' controls autoPlay muted loop>
              <source src={video3} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
          <span>collaborative environment.</span>
        </h2>
      </div>
*/}

    </div>
  );
}

export default HomePage;
