import React from 'react'
import './FeaturedProject.css'
import Project1 from '../../../assets/HomePage/FeaturedProject1.png'
import PlusIcon from '../../../assets/HomePage/PlusIcon.png'
import { useNavigate } from 'react-router-dom'

function FeaturedProject() {
    const navigate = useNavigate();
    return (
        <div className='featured-section'>
            <h2 className='featured-heading'>Featured Projects</h2>
            <p className='featured-text'>We've crushed it on lots of projects, and we've got the receipts to prove it in our portfolio of case studies.</p>

            <div className='featured-projects-sections'>
                <div className='projects-section' >
                    <div className='projects-text-section'>
                        {/* <img src={Project1} className='projects-img' alt='featured-projects' /> */}
                        <div className='project-text-section2'>
                            <h2 className='projects-heading'>Sri Chaitanya Hospital</h2>
                            <div className='projects-techs'>
                                <button className='projects-techs-btn'>Web Development</button>
                                <div style={{ backgroundColor: "transparent" }}>
                                    <button className='projects-techs-btn'>Branding</button>
                                    <button className='projects-techs-btn'>UI/UX</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='projects-section2' >
                    <div className='projects-text-section'>
                        {/* <img src={Project1} className='projects-img' alt='featured-projects' /> */}
                        <div className='project-text-section2'>
                            <h2 className='projects-heading'>Market Analysis Dashboard</h2>
                            <div className='projects-techs1'>
                                <button className='projects-techs-btn'>Custom Dashboard</button>
                                <div style={{ backgroundColor: "transparent" }}>
                                    <button className='projects-techs-btn'>Market Analysis</button>
                                    <button className='projects-techs-btn'>CRM</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className='featured-projects-sections'>

                <div className='projects-section3' >
                    <div className='projects-text-section'>
                        {/* <img src={Project1} className='projects-img' alt='featured-projects' /> */}
                        <div className='project-text-section2'>
                            <h2 className='projects-heading' >Innowise</h2>
                            <div className='projects-techs3'>
                                {/* <button className='projects-techs-btn'>Custom Dashboard</button> */}
                                <div style={{ backgroundColor: "transparent", paddingTop: '4rem', marginLeft: '6rem' }}>
                                    <button className='projects-techs-btn'>Development</button>
                                    <button className='projects-techs-btn'>Dashboard</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='projects-section4' onClick={() => { navigate('/work') }}>
                    <div className='projects-text-section'>

                        <img src={PlusIcon} className='projects-img' alt='featured-projects' />

                        <p className='projects-view-all'>View All</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProject