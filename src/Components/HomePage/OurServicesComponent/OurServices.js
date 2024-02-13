import React from 'react';
import './OurServices.css';
import Services1 from '../../../assets/ServicePage/Creative Design.mp4';

function OurServices() {
    return (
        <div className='our-services-section'>
            <h2 className='services-heading'>Our Services</h2>

            <hr className='services-hr' />
            <div className='services-container'>
                <div className='video-container1'>
                    <video className='service-video' controls autoPlay muted loop>
                        <source src={Services1} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='text-container'>
                    <h2 className='service-team-heading'>Creative Design</h2>
                    <p className='service-team-text'>Our creative services shape captivating realities. With a visionary approach and awe-inspiring execution, we join you in weaving narratives through pixels, words, and brushstrokes.</p>
                </div>
            </div>
            <hr className='services-hr' />
        </div>
    );
}

export default OurServices;
