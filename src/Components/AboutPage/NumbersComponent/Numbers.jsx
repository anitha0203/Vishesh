import React, { useState } from 'react';
import "./Numbers.css";
import { Container, Row, Col } from 'react-bootstrap';

function Numbers(props) {
    const [getDaysCount, setDaysCount] = useState(0);
    const [getMembers, setMembers] = useState(0);
    const [getMouseEvent, setMouseEvent] = useState(true);
    const setDate = new Date("2016-01-01")
    const todaysDate = new Date();
    const daysCompleted = Math.floor((todaysDate - setDate) / (1000 * 60 * 60 * 24));

    var DaysCount = 0;
    var MembersCount = 0;
    var count = () => {
        if (getMouseEvent) {

            setMouseEvent(false);
            let Days = setInterval(() => {
                setDaysCount(DaysCount);

                if (DaysCount === daysCompleted) {
                    clearInterval(Days);
                }
                // console.log(DaysCount)
                DaysCount++;
            }, 1);
            const Members = setInterval(() => {
                setMembers(MembersCount);
                if (MembersCount === 25) {
                    clearInterval(Members);
                }
                MembersCount++;
            }, 100);
        }
    }



    return (
        <Container fluid className='NumberContainer' onMouseEnter={() => { count() }} onTouchMove={() => { count() }}>
            <Row>
                <Col><h3 className='NumberContainer-h3'>Numbers</h3></Col>
            </Row>
            <Row>
                <Col lg={4} md={4} sm={12}>

                    <Col><div><h5 className='NumberContainer-h5'>{getDaysCount} Days</h5></div></Col>
                    <Col><div><p className='NumberContainer-p'>in Business since 2016</p></div></Col>

                </Col >

                <Col lg={4} md={4} sm={12}>
                    <Col><div><h5 className='NumberContainer-h5'>{getMembers}+ Members</h5></div></Col>
                    <Col><div><p className='NumberContainer-p'>and we never stop growing</p></div></Col>
                </Col>

                <Col lg={4} md={4} sm={12}>

                    <Col><div><h5 className='NumberContainer-h5'>1K+ Projects</h5></div></Col>
                    <Col><div><p className='NumberContainer-p'>and we are not stopping</p></div></Col>

                </Col>
            </Row>
        </Container>
    );
}

export default Numbers;