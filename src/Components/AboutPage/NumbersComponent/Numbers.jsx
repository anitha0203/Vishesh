import React, { useEffect, useState } from 'react';
import "./Numbers.css";
import { Container, Row, Col } from 'react-bootstrap';

function Numbers(props) {
    const [getDaysCount, setDaysCount] = useState(0);
    const [getMembers, setMembers] = useState(0);
    const [getMouseEvent, setMouseEvent] = useState(true);
    var DaysCount = 0;
    var MembersCount = 0;
    const count = () => {
        if (getMouseEvent) {

            setMouseEvent(false);
            let Days = setInterval(() => {
                setDaysCount(DaysCount);

                if (DaysCount === 2858) {
                    clearInterval(Days);
                }
                console.log(DaysCount)
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
        <Container fluid className='NumberContainer' onMouseEnter={() => { count() }}>
            <Row>
                <Col><h3>Numbers</h3></Col>
            </Row>
            <Row>
                <Col lg={4} md={4} sm={12}>

                    <Col><h5>{getDaysCount} Days</h5></Col>
                    <Col><p>in Business since 2016</p></Col>

                </Col >

                <Col lg={4} md={4} sm={12}>
                    <Col><h5>{getMembers}+ Members</h5></Col>
                    <Col><p>and we never stop growing</p></Col>
                </Col>

                <Col lg={4} md={4} sm={12}>

                    <Col><h5>1K+ Projects</h5></Col>
                    <Col><p>and we are not stopping</p></Col>

                </Col>
            </Row>
        </Container>
    );
}

export default Numbers;