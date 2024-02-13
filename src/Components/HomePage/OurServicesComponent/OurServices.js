import React from 'react';
import './OurServices.css';
import Services1 from '../../../assets/ServicePage/Creative Design.mp4';
import Services2 from '../../../assets/ServicePage/UI-UX Design.mp4';
import Services3 from '../../../assets/ServicePage/FullStack Dev.mp4';
import Services4 from '../../../assets/ServicePage/Digital Marketing.mp4';
import Services5 from '../../../assets/ServicePage/Marketing Analysis.mp4';

const servicesData = [
    {videoSource: Services1, heading: 'Creative Design', text: 'Our creative services shape captivating realities. With a visionary approach and awe-inspiring execution, we join you in weaving narratives through pixels, words, and brushstrokes.'},
    {videoSource: Services2, heading: 'UI/UX Design', text: 'Our offerings reinvent digital engagement, merging grace and utility seamlessly. Through user-friendly interfaces and captivating user experiences, we craft narratives that inspire.'},
    {videoSource: Services3, heading: 'Full Stack Development', text: 'Our comprehensive development seamlessly fuses robust backend capabilities with compelling frontend experiences, resulting in impactful, smooth applications.'},
    {videoSource: Services4, heading: 'Digital Marketing', text: 'Our services pave the way for your brand\'s online prominence, harnessing a blend of insights, creativity, and technical finesse, ensuring impactful online visibility and engagement.'},
    {videoSource: Services5, heading: 'Marketing Analysis', text: 'Our analysis empowers data-driven insights, guiding strategic decisions. Through the examination of market trends, consumer behavior, and competitors, we pave the growth path.'}
]

function OurServices() {
    return (
        <div className='our-services-section'>
            <h2 className='services-heading'>Our Services</h2>

            {servicesData.map((service, index) => (
                <div>
                <hr className='services-hr' />
                <div key={index} className='services-container'>
                    <div className='video-container1'>
                        <video className='service-video' controls autoPlay muted loop>
                            <source src={service.videoSource} type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='text-container'>
                        <h2 className='service-team-heading'>{service.heading}</h2>
                        <p className='service-team-text'>{service.text}</p>
                    </div>
                </div>
                </div>
            ))}
            <hr className='services-hr' />
            
        </div>
    );
}

export default OurServices;
