import React from 'react';
import { Container, Row } from 'react-bootstrap';
import "./WorkPageHeader.css"

function WorkPageHeader(props) {
    return (
        <Container fluid className='WorkPageHeader-container'>
            <Row >
                <div className='WorkPageHeader-container-row-col-1'>
                    <h4 className='WorkPageHeader-h4'>Work Where We Pride Up</h4>
                </div >
                <div className='WorkPageHeader-container-row-col-2'>
                    <h6 className='WorkPageHeader-h6'>We proudly embrace a distinctive and one-of-a-kind aesthetic philosophy in our approach to work, and we are dedicated to forging meaningful connections with clients whoresonate with our core values.</h6>
                </div>
            </Row>
        </Container>
    );
}

export default WorkPageHeader;