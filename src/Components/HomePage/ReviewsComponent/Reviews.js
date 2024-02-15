import React, { useState, useEffect } from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import './Reviews.css';
import { Accordion, Card, Col, Row } from 'react-bootstrap';

//  Reviews Data
const reviews = [
  { name: 'Client Name', place: 'Founder, Company', description: 'They were highly professional, straightforward and delivered our website in good time and to a high standard.' },
  { name: 'Client Name', place: 'Founder, Company', description: 'The team delivered high-quality work, creating a visually-appealing design that met expectations. Customer feedback is also positive. Their quick workflow complemented their accommodating approach.' },
  { name: 'Client Name', place: 'Founder, Company', description: 'They were highly professional, straightforward and delivered our website in good time and to a high standard.' },
  { name: 'Client Name', place: 'Founder, Company', description: 'Ultimates Roofing transformed our house with top-notch materials and efficient service. The cleanup was impeccable, making the entire process hassle-free.' },
  { name: 'Client Name', place: 'Founder, Company', description: 'Absolutely incredible quality! Ultimates Roofing\'s utilization of top-tier materials, combined with their remarkably swift installation, surpassed all my expectations. My home has undergone a stunning transformation and has never looked better!' }
]

function Reviews() {

  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(1);

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
    }
  };
  const btnpressprev = () => {
    let box = document.querySelector('.reviews-carousel');
    let width = calculateScrollDistance();
    box.scrollLeft -= width;
    setCurrentVideoIndex((prevIndex) => {
      const newIndex = Math.max(0, prevIndex - 1);
      return newIndex <= 0 ? 1 : newIndex;
    });
  };

  const btnpressnext = () => {
    let box = document.querySelector('.reviews-carousel');
    let width = calculateScrollDistance();
    box.scrollLeft += width;
    setCurrentVideoIndex((prevIndex) => {
      const newIndex = Math.min(reviews.length - 1, prevIndex + 1);
      return newIndex <= 0 ? 1 : newIndex;
    });
  };

  return (
    <div className='reviews-section'>
    
      {/**    Web View */}
      <Row className='reviews-web-view'>
        <Col md={4} className='reviews-text'>
          <div className='reviews-text-sec'>
            <h2 className='reviews-client'>What Our Clients Say About Us</h2>
            <div className='reviews-arrows'>
              <div className={`reviews-arrow ${isPrevDisabled ? 'disabled-icon1' : ''}`} onClick={btnpressprev}><FaAngleLeft /></div>
              <div className={`reviews-arrow ${isNextDisabled ? 'disabled-icon1' : ''}`} onClick={btnpressnext}><FaAngleRight /></div>
            </div>
          </div>
        </Col>
        <Col className='reviews-carousel'>
          <div className='carousel-reviews'>
            {reviews.map((review, index) => (
              <div key={index} className='review-section'>
                <Card className='review-cards'>
                  <div className='reviewcard-heading'>
                    <h2 className='review-client'>{review.name}</h2>
                    <div className='review-place'>{review.place}</div>
                  </div>
                  <div className='reviewcard-description'>
                    <p className='reviews-para'>{review.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </Col>
      </Row>

      {/**    Mobile View */}
      <div className="reviews-mobile-view">
        <h2 className='reviews-client'>What Our Clients Say About Us</h2>

        <Accordion defaultActiveKey="0">
          {reviews.map((review, index) => (
            <Accordion.Item key={index} eventKey={index.toString()}>
              <Accordion.Header>{review.name}</Accordion.Header>
              <Accordion.Body>
                <p className="reviews-para-mobile">{review.description}</p>
                <div>- {review.place}</div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default Reviews

