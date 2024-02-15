import React from 'react'
import './LatestUpdates.css'
import { Card } from 'react-bootstrap'
import post1 from '../../../assets/HomePage/LatestPosts1.png'
import post2 from '../../../assets/HomePage/LatestPosts2.png'
import post3 from '../../../assets/HomePage/LatestPosts3.png'
import { useNavigate } from 'react-router-dom'

function LatestUpdates() {
    const navigate = useNavigate();
    return (
        <div className='latest-updates-section'>
            <div className='latest-text-section'>
                <p className='latest-para-text'>OUR LATEST NEWS & BLOG</p>
                <h2 className='latest-para-head'>Stay Updated with Our <br />Latest Posts</h2>
            </div>
            <div className='latest-posts-cards-section'>
                <Card className='posts-cards'>
                    <Card.Img variant="top" src={post1} />
                    <Card.Body style={{ backgroundColor: "#fff" }}>
                        <h5 className='latest-post-text1'>BRANDING / DESIGN / 23.JAN.2024</h5>
                        <h2 className='latest-post-head'>Four Ways a Clean Workplace Makes Employees Happy and Healthy</h2>
                        <p className='latest-post-text2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                        <p className='latest-post-btn'>Learn More</p>
                    </Card.Body>
                </Card>
                <Card className='posts-cards'>
                    <Card.Img variant="top" src={post2} />
                    <Card.Body style={{ backgroundColor: "#fff" }}>
                        <h5 className='latest-post-text1'>BRANDING / DESIGN / 23.JAN.2024</h5>
                        <h2 className='latest-post-head'>Four Ways a Clean Workplace Makes Employees Happy and Healthy</h2>
                        <p className='latest-post-text2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                        <p className='latest-post-btn'>Learn More</p>
                    </Card.Body>
                </Card>
                <Card className='posts-cards'>
                    <Card.Img variant="top" src={post3} />
                    <Card.Body style={{ backgroundColor: "#fff" }}>
                        <h5 className='latest-post-text1'>BRANDING / DESIGN / 23.JAN.2024</h5>
                        <h2 className='latest-post-head'>Four Ways a Clean Workplace Makes Employees Happy and Healthy</h2>
                        <p className='latest-post-text2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                        <p className='latest-post-btn'>Learn More</p>
                    </Card.Body>
                </Card>
            </div>
            <div className='latest-posts-btn-container'>
                <button onClick={() => { navigate('/services') }} className='services-btn'>View all</button>
            </div>
        </div>
    )

}

export default LatestUpdates