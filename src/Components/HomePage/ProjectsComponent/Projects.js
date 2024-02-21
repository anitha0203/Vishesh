import React from 'react'
import './Projects.css'
import { Button } from 'react-bootstrap'
import Project1 from "../../../assets/HomePage/FeaturedProject1.png"
import PlusIcon from '../../../assets/HomePage/PlusIcon.png'

function Projects() {
    return (
        <div className='home-projects-section'>
            <h2 className='home-about-heading'>Featured Projects</h2>
            <p className='home-about-para'>We've crushed it on lots of projects, and we've got the receipts to prove it in our portfolio of case studies.</p>

            <div className='home-feature-projects'>
                <div className='home-project1'>
                    <img className='home-project-img1' src={Project1} alt='project1' />
                    <div className='home-project-techs'>
                        <div className='home-project-head1'>Sri Chaitanya Hospital</div>
                        <div style={{ backgroundColor: "transparent", textAlign: "right" }}>
                            <Button className='home-project-btn'>Web Development</Button>
                            <div style={{ backgroundColor: "transparent" }}>
                                <Button className='home-project-btn'>Branding</Button>
                                <Button className='home-project-btn'>UI/UX</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home-project2'>
                    <div className='home-project-techs'>
                        <div className='home-project-head1'>Market Analysis Dashboard</div>
                        <div style={{ backgroundColor: "transparent", textAlign: "right" }}>
                            <Button className='home-project-btn'>Custom Dashbaord</Button>
                            <div style={{ backgroundColor: "transparent" }}>
                                <Button className='home-project-btn'>Market Analysis</Button>
                                <Button className='home-project-btn'>CRM</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='home-feature-projects'>
                <div className='home-project3'>
                    <div className='home-project-techs'>
                        <div className='home-project-head1'>Innowise</div>
                        <div style={{ backgroundColor: "transparent", textAlign: "right" }}>
                            <Button className='home-project-btn'>Development</Button>
                            <Button className='home-project-btn'>Dashboard</Button>
                        </div>
                    </div>
                </div>
                <div className='home-project4'>
                    <img src={PlusIcon} className='plus-icon-img' alt='plus-icon' />
                    <h5 className='view-all-projects-h5'>View All</h5>
                </div>
            </div>

        </div>
    )
}

export default Projects