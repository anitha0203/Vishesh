import React from 'react';
import "./AboutHeader.css"
import HeaderVideo from "../../../assets/AboutPage/aboutHeaderVideo.mp4";



function AboutHeader(props) {
    return (
        <div >

            <video width="640" height="360" className='AboutHeaderVideo' loop autoPlay muted>
                <source src={HeaderVideo} type="video/mp4" />
            </video>


            <></>
        </div>
    );
}

export default AboutHeader;