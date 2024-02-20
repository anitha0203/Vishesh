import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./CEOProfile.css"
import CEOPhotos from "../../../assets/AboutPage/Harsha Sir.png"
import Quatation from "../../../assets/AboutPage/quotes-ltr.png"

function CEOProfile(props) {
    return (
        <Container className={'CEOProfileContainer'}>

            <Row >
                <div className='CEOImageContainer-col-1'>
                    <div >
                        <img src={CEOPhotos} alt="CEOPhoto" className='CEOPhoto' />
                    </div>
                </div>

                <div className='CEOInfoContainer-col-2'>
                    <div><h5 className='CEOName'>Sri Harsha Mallina</h5></div>
                    <div><h6 className='CEOQualification'>M.S. Computer Science (U.S.A)</h6></div>
                    <div><h6 className='Founder'>Founder & CEO</h6></div>
                    <div><img src={Quatation} alt="" className='QuatationsSym' /></div>
                    <div ><p className='CEODesciption'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p></div>
                </div>
            </Row>


        </Container>
    );
}

export default CEOProfile;