import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./CEOProfile.css"
import CEOPhotos from "../../../assets/AboutPage/Harsha Sir.png"
import Quatation from "../../../assets/AboutPage/quotes-ltr.png"

function CEOProfile(props) {
    return (
        <Container className={'CEOProfileContainer'} >

            <Row style={{ height: '100%' }}>
                <Col lg={4} md={4} sm={12} className='CEOImageContainer'>
                    <div >
                        <img src={CEOPhotos} alt="CEOPhoto" className='CEOPhoto' />
                    </div>
                </Col>

                <Col lg={8} md={8} sm={12} className='CEOInfoContainer'>
                    <div><h5 className='CEOName'>Sri Harsha Mallina</h5></div>
                    <div><h6 className='CEOQualification'>M.S. Computer Science (U.S.A)</h6></div>
                    <div><h6 className='Founder'>Founder & CEO</h6></div>
                    <div><img src={Quatation} alt="" className='QuatationsSym' /></div>
                    <div ><p className='CEODesciption'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p></div>
                </Col>
            </Row>
        </Container>
    );
}

export default CEOProfile;