import React, { useState } from 'react'
import './CardsComponent.css'
import ArrowRight from '../../../assets/HomePage/arrow-right.png'

const cardData = [
    { head: "We are Experts", text: "You'll collaborate with a highly skilled, agile team with extensive experience dedicated to the entire project.", bgColor: "#A8DAF4" },
    { head: "Our Ability to Adapt", text: "Adapting to your needs and constraints, we maintain unwavering responsiveness for a tailored and effective solution.", bgColor: "#F5A091" },
    { head: "We are Cost Effective", text: "We prioritize cost-effectiveness, optimizing your resources while maintaining quality, to deliver exceptional value and ensure your financial goals are met.", bgColor: "#B2DECA" },
    { head: "For Brands of All Sizes", text: "Tailored solutions and expert guidance, catering to the diverse needs of brands across all scales, ensuring effective strategies for growth and success.", bgColor: "#ABAEDB" },
    { head: "For Brands of All Sizes", text: "Tailored solutions and expert guidance, catering to the diverse needs of brands across all scales, ensuring effective strategies for growth and success.", bgColor: "#E1E3C5" }
]

function CardsComponent() {
    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (index) => {
        setActiveCard(activeCard === index ? null : index);
    };
    return (
        <div className='cards-us-section'>
            <div>
                <h2 className='why-us-heading'>Why Us</h2>
                <img src={ArrowRight} className='arrow-img-css' alt='right-arrow' />
            </div>
            <div className='cards-section-css'>
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className={`cards-sections-us ${activeCard === index ? 'active' : ''}`}
                        style={{ backgroundColor: card.bgColor }}
                        onClick={() => handleCardClick(index)}
                    >
                        <div style={{ backgroundColor: "transparent" }}>
                            <h6 className='cards-section-us-heading'>{card.head}</h6>
                            <p className='cards-section-us-text'>{card.text}</p>
                        </div>
                        <h6 className='cards-section-us-number'>0{index + 1}</h6>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardsComponent