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
                    <div className='work-text-lines'>
                        As
                        <div className='video-container4'>
                            <video className='video4 ' autoPlay muted loop>
                                <source src={video2} type='video/mp4' />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        aspiring enthusiasts,
                    </div>
                    
                </div>
            </div>

            <div className='work-with-us-btn'>
                <button onClick={() => { navigate('/contact') }} className='about-us-btn'>Work With Us</button>
            </div>
        </div >
    )
}

export default WorkWithUs



