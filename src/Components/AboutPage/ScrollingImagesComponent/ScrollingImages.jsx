import React from 'react';
import { Container } from 'react-bootstrap';
import "./ScrollingImages.css"



function ScrollingImages({ onScrolling }) {



    return (
        <Container className='ScrollingImagesContainer' fluid onScroll={() => { onScrolling() }}>
            <div className='ScrollingImage1'></div>
            <div className='ScrollingImage2'></div>
            <div className='ScrollingImage3'></div>
            <div className='ScrollingImage4'></div>
        </Container>
    );
}

export default ScrollingImages;