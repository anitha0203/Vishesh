import React from 'react';
import { Container } from 'react-bootstrap';
import "./ScrollingImages.css"

function ScrollingImages(props) {
    return (
        <Container className='ScrollingImagesContainer' fluid>
            <div className='ScrollingImage1'></div>
            <div className='ScrollingImage2'></div>
            <div className='ScrollingImage3'></div>
            <div className='ScrollingImage4'></div>
        </Container>
    );
}

export default ScrollingImages;