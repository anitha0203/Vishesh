import React from 'react'
import './WorkWithUs.css'
import video2 from '../../../assets/HomePage/video2.mp4';
import video3 from '../../../assets/HomePage/video3.mp4';
import { useNavigate } from 'react-router-dom';

function WorkWithUs() {
    const navigate = useNavigate();
    return (
        <div className='team-heading-sections '>
            <div className='work-withus-section'>
                <div className='work-section-heading'>
                    <span>As</span>
                    <div className='video-container4'>
                        <video className='video4 ' autoPlay muted loop>
                            <source src={video2} type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <span >aspiring enthusiasts, </span>
                    <span>we combined our professional skills, empathy, and shared </span>
                    <span> values to build a unique</span>
                    <div className='video-container5'>
                        <video className='video5' autoPlay muted loop>
                            <source src={video3} type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <span>collaborative environment.</span>
                </div>
            </div>

            <div className='work-with-us-btn'>
                <button onClick={() => { navigate('/contact') }} className='about-us-btn'>Work With Us</button>
            </div>
        </div >
    )
}

export default WorkWithUs