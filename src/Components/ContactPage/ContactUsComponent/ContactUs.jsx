import React from 'react';
import { Container, Row } from 'react-bootstrap';
import "./ContactUs.css"

function ContactUs(props) {
    return (
        <Container fluid className='ContactUs-container'>
            <div ><h4 className='ContactUs-h4'>Contact Us</h4></div>
            <Row>
                <div className='ContactUs-container-row-col-1'>
                    <div><h6 className='ContactUs-h6'>E-mail</h6></div>
                    <div><p className='ContactUs-p'>hello@visheshcountrycache.com</p></div>
                    <div><h6 className='ContactUs-h6'>Call</h6></div>
                    <div><p className='ContactUs-p'>+91 9589958924</p></div>
                </div>

                <div className='ContactUs-container-row-col-2'>
                    <div><h6 className='ContactUs-h6'>Address</h6></div>
                    <div><p className='ContactUs-p ContactUs-Address-p'>Near HP Petrol Bunk, Undrajavaram, Tanuku, East Godavari District, Andhra Pradesh, India Zip: 534216</p></div>

                </div>

                <div className='ContactUs-container-row-col-3'>
                    <div><h6 className='ContactUs-h6'>Writing messages isn’t quite for you?</h6></div>
                    <div><p className='ContactUs-p'>That's fine! We can meet up instead. Schedule a call and share your story with us!</p></div>
                    <div>
                        <button className='about-us-btn'>Schedule a Call</button>
                    </div>
                </div>
            </Row>
        </Container>
    );
}

export default ContactUs;