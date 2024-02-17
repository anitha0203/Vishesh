import React from 'react';
import './HomePage.css';
import video from '../../assets/HomePage/Video.mp4';
import OurServices from './OurServicesComponent/OurServices';
import Vector from '../../assets/HomePage/Vector.png'
import ClientLogos from './ClientLogosComponent/ClientLogos';
import Reviews from './ReviewsComponent/Reviews';
import LatestUpdates from './LatestUpdatesComponent/LatestUpdates';
import WorkWithUs from './WorkWithUsComponent/WorkWithUs';
import AboutUs from './AboutUsComponent/AboutUs';
import CardsComponent from './CardsComponent/CardsComponent';
import Projects from './ProjectsComponent/Projects';

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
      <AboutUs />

      {/**    Why Us Cards Section 
      <CardsComponent />*/}

      {/**    VISHESH COUNTRY CACHE * FOSTERING INTELLECT SCROLLING Section  */}
      <div class="scroll-container">
        <div class="scroll-text">
          <h1 className='vishesh-scroll-heading'>
            VISHESH COUNTRY CACHE  <img className='heading-scroll-img' src={Vector} alt='star-vector' /> FOSTERING INTELLECT <img className='heading-scroll-img' src={Vector} alt='star-vector' /> VISHESH COUNTRY CACHE <img className='heading-scroll-img' src={Vector} alt='star-vector' /> FOSTERING INTELLECT  <img className='heading-scroll-img' src={Vector} alt='star-vector' /> VISHESH COUNTRY CACHE <img className='heading-scroll-img' src={Vector} alt='star-vector' /> FOSTERING INTELLECT  <img className='heading-scroll-img' src={Vector} alt='star-vector' /> </h1>
        </div>
      </div>

      {/* Featured Projects Section  */}
      <Projects />

      {/**    logo slider          */} 
      <ClientLogos /> 

      {/**    Reviews Section        */}
      <Reviews />

      {/**    teams heading SCROLLING Section  */}
      <div className='team-heading-sections'>
        <hr />
        <div class="scroll-container1">
          <div class="scroll-text">
            <h1 className='team-scroll-heading'>
              CREATIVE DESIGN  <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> UI/UX <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> FULL STACK DEVELOPMENT <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> CREATIVE DESIGN  <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> UI/UX <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> FULL STACK DEVELOPMENT  <img className='heading-scroll-img1' src={Vector} alt='star-vector' />
              CREATIVE DESIGN  <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> UI/UX <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> FULL STACK DEVELOPMENT <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> CREATIVE DESIGN  <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> UI/UX <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> FULL STACK DEVELOPMENT  <img className='heading-scroll-img1' src={Vector} alt='star-vector' />
              CREATIVE DESIGN  <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> UI/UX <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> FULL STACK DEVELOPMENT <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> CREATIVE DESIGN  <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> UI/UX <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> FULL STACK DEVELOPMENT  <img className='heading-scroll-img1' src={Vector} alt='star-vector' />
              CREATIVE DESIGN  <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> UI/UX <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> FULL STACK DEVELOPMENT <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> CREATIVE DESIGN  <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> UI/UX <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> FULL STACK DEVELOPMENT  <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> </h1>
          </div>
        </div>
        <hr />
        <div class="scroll-container1">
          <div class="scroll-text2">
            <h1 className='team-scroll-heading'>
              DIGITAL MARKETING  <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> MARKETING ANALYSIS <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> DIGITAL MARKETING <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> MARKETING ANALYSIS  <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> DIGITAL MARKETING <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> MARKETING ANALYSIS  <img className='heading-scroll-img1' src={Vector} alt='star-vector' />
              DIGITAL MARKETING  <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> MARKETING ANALYSIS <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> DIGITAL MARKETING <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> MARKETING ANALYSIS  <img className='heading-scroll-img1' src={Vector} alt='star-vector' />
              DIGITAL MARKETING  <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> MARKETING ANALYSIS <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> DIGITAL MARKETING <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> MARKETING ANALYSIS  <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> DIGITAL MARKETING <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> MARKETING ANALYSIS  <img className='heading-scroll-img1' src={Vector} alt='star-vector' />
              DIGITAL MARKETING  <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> MARKETING ANALYSIS <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> DIGITAL MARKETING <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> MARKETING ANALYSIS  <img className='heading-scroll-img1' src={Vector} alt='star-vector' /> </h1>
          </div>
        </div>
        <hr />
      </div>

      {/**    Latest Updates Section      */}
      <LatestUpdates />

      {/**    Work with us section         */}
      <WorkWithUs />

      <div className="property-default">
      <div className="overlap-group">
        <div className="element">
          <div className="text-wrapper">01</div>
          <p className="div">
            You&#39;ll collaborate with a highly skilled, agile team with extensive experience dedicated to the entire
            project.
          </p>
          <div className="text-wrapper-2">We are Experts</div>
        </div>
        <div className="element-2">
          <div className="text-wrapper">02</div>
          <p className="div">
            Adapting to your needs and constraints, we maintain unwavering responsiveness for a tailored and effective
            solution.
          </p>
          <div className="text-wrapper-2">Our Ability to Adapt</div>
        </div>
        <div className="element-3">
          <div className="text-wrapper">03</div>
          <p className="p">
            We prioritize cost-effectiveness, optimizing your resources while maintaining quality, to deliver
            exceptional value and ensure your financial goals are met.
          </p>
          <div className="text-wrapper-2">We are Cost Effective</div>
        </div>
        <div className="element-4">
          <div className="text-wrapper">04</div>
          <p className="p">
            Tailored solutions and expert guidance, catering to the diverse needs of brands across all scales, ensuring
            effective strategies for growth and success.
          </p>
          <p className="text-wrapper-3">For Brands of All Sizes</p>
        </div>
        <div className="element-5">
          <div className="text-wrapper">05</div>
          <p className="p">
            Tailored solutions and expert guidance, catering to the diverse needs of brands across all scales, ensuring
            effective strategies for growth and success.
          </p>
          <p className="text-wrapper-3">For Brands of All Sizes</p>
        </div>
      </div>
    </div>
      
    </div>
  );
}

export default HomePage;
