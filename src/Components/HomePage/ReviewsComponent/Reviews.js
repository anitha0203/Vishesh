import React, { useState, useEffect, useRef } from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import './Reviews.css';
import { Card, Col, Row } from 'react-bootstrap';
import { motion } from "framer-motion"

//  Reviews Data
const reviews = [
  { name: 'Client Name', place: 'Founder, Company', description: 'They were highly professional, straightforward and delivered our website in good time and to a high standard.' },
  { name: 'Client Name', place: 'Founder, Company', description: 'The team delivered high-quality work, creating a visually-appealing design that met expectations. Customer feedback is also positive. Their quick workflow complemented their accommodating approach.' },
  { name: 'Client Name', place: 'Founder, Company', description: 'They were highly professional, straightforward and delivered our website in good time and to a high standard.' },
  { name: 'Client Name', place: 'Founder, Company', description: 'The team delivered high-quality work, creating a visually-appealing design that met expectations. Customer feedback is also positive. Their quick workflow complemented their accommodating approach.' },
  { name: 'Client Name', place: 'Founder, Company', description: 'They were highly professional, straightforward and delivered our website in good time and to a high standard.' }
]

function Reviews() {

  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [width, setWidth] = useState(0)
  const carousel = useRef()

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  useEffect(() => {
    const box = document.querySelector('.reviews-carousel');
    const handleScroll = () => {
      const maxScrollLeft = box.scrollWidth - box.clientWidth;
      setIsPrevDisabled(box.scrollLeft <= 0);
      setIsNextDisabled(box.scrollLeft >= maxScrollLeft);
    };
    box.addEventListener('scroll', handleScroll);
    // Run this effect once on mount
    handleScroll();
    // Cleanup event listener on component unmount
    return () => {
      box.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const calculateScrollDistance = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1800) {
      return 500;
    } else if (screenWidth >= 1000) {
      return 540;
    } else if (screenWidth > 545) {
      return 540;
    } else if (screenWidth >= 545) {
      return 420;
    } else if (screenWidth >= 385) {
      return 350;
    } else if (screenWidth < 385) {
      return 325;
    }
  };
  const btnpressprev = () => {
    let box = document.querySelector('.reviews-carousel');
    let width = calculateScrollDistance();
    box.scrollLeft -= width;
  };

  const btnpressnext = () => {
    let box = document.querySelector('.reviews-carousel');
    let width = calculateScrollDistance();
    box.scrollLeft += width;
  };

  return (
    <div className='reviews-section'>

      <Row className='reviews-web-view'>
        <Col md={4} className='reviews-text'>
          <div className='reviews-text-sec'>
            <div className='text-arrows-container'>
              <h2 className='home-about-heading'>What Our Clients Say About Us</h2>
              <div className='reviews-arrows'>
                <div className={`reviews-arrow ${isPrevDisabled ? 'disabled-icon1' : ''}`} onClick={btnpressprev}><FaAngleLeft style={{ backgroundColor: "transparent",color: 'rgb(122 122 122)', fontSize: "25px" }} /></div>
                <div className={`reviews-arrow ${isNextDisabled ? 'disabled-icon1' : ''}`} onClick={btnpressnext}><FaAngleRight style={{ backgroundColor: "transparent",color: 'rgb(122 122 122)', fontSize: "25px" }} /></div>
              </div>
            </div>
          </div>

        </Col>
        <Col className='reviews-carousel' ref={carousel}>
          <motion.div className='carousel-reviews' drag="x" dragConstraints={{ right: 0, left: -width }}>
            {reviews.map((review, index) => (
              <motion.div key={index} className='review-section'>
                <Card className='review-cards'>
                  <div className='reviewcard-container'>
                    <div className='reviewcard-description'>
                      <p className='reviews-para'>{review.description}</p>
                    </div>
                    <div className='reviewcard-heading'>
                      <h2 className='review-client'>{review.name}</h2>
                      <div className='review-place'>{review.place}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Col>
      </Row>

    </div>
  )
}

export default Reviews