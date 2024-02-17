import React from 'react';
import "./AboutHeader.css"
import HeaderVideo from "../../../assets/AboutPage/aboutHeaderVideo.mp4";
import { Container, Row } from 'react-bootstrap';


function AboutHeader(props) {
    return (
        <Container fluid className='about-header-container' >
            <Row content='end'>
                <div className="AboutHeaderVideoContainer" >
                    <video className='AboutHeaderVideo' loop autoPlay muted  >
                        <source src={HeaderVideo} type="video/mp4" />
                    </video>
                </div>
                <div className='AboutHeaderText'>
                    Individuals from diverse backgrounds, each with their unique story, come together as a unified team, bound by a commitment to delivering excellence.
                </div>

            </Row>
        </Container>
    );
}

export default AboutHeader;