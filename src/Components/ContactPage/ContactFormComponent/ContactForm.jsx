import React from 'react';
import { Container, Row } from 'react-bootstrap';
import "./ContactForm.css";

function ContactForm(props) {
    return (
        <Container fluid className='ContactForm-container'>
            <Row>
                <div className='ContactForm-container-row-col-1'>
                    <div>
                        <h6 className='ContactForm-h6'>It happens with us. We would love to hear from you.</h6>
                    </div>
                </div>

                <div className='ContactForm-container-row-col-2'>
                    <div className='ContactForm-form-container'>
                        <form action="">
                            <div className='ContactForm-field-container'>
                                <div >
                                    <p className='ContactForm-field-lable'>Your Name</p>
                                </div>
                                <div>
                                    <input type="text" className='ContactForm-field-input' />
                                </div>
                            </div>
                            <div className='ContactForm-field-container'>
                                <div >
                                    <p className='ContactForm-field-lable'>E-mail</p>
                                </div>
                                <div>
                                    <input type="text" className='ContactForm-field-input' />
                                </div>
                            </div>
                            <div className='ContactForm-field-container'>
                                <div >
                                    <p className='ContactForm-field-lable'>Company/Organization Name</p>
                                </div>
                                <div>
                                    <input type="text" className='ContactForm-field-input' />
                                </div>
                            </div>
                            <div className='ContactForm-field-container'>
                                <div >
                                    <p className='ContactForm-field-lable'>How Can We Help You</p>
                                </div>
                                <div>
                                    <textarea type="text" className='ContactForm-field-textarea' />
                                </div>
                            </div>
                            <div className='ContactForm-field-container'>
                                <div className='ContactForm-field-button'>
                                    <button className='about-us-btn'>Submit</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </Row>
        </Container>
    );
}

export default ContactForm;