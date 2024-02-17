import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./StoryVisionFuture.css"

function StoryVisionFuture(props) {
    return (
        <Container fluid className='StoryVisionFuture'>
            {/* Story */}
            <Row className='StoryRow'>
                <Col ><h5>Story</h5></Col>
                <Col >
                    <p>Since its inception in 2016, in a quaint, rural town, Vishesh Country Cache embodies creativity and innovation. Situated amid nature's inspiration, we've been dedicated to bridging imagination and execution.</p>
                    <p>We believe in the potential of exceptional products originating from anywhere, even remote farms. We nurture skills, keep families close, and bolster local communities.</p>
                </Col>
            </Row>

            {/* Vision */}
            <Row className='VisionRow' >
                <Col><h5>Vision</h5></Col>
                <Col>
                    <p>We're determined to create opportunities for underserved areas. Our Vison is to uplift these communities and empower their residents, offering opportunities where they're scarce. As they flourish, so do we, envisioning a future where work knows no bounds, beginning with our commitment to providing chances where they're needed most.</p>
                    <p>Moreover, by operating our company in rural areas, we've significantly reduced operating costs. This advantage enables us to provide high-quality, top-tier products with a more economical budget than what many others can offer.</p>
                </Col>
            </Row>

            {/* Future */}
            <Row className='FutureRow'>
                <Col><h5>Future</h5></Col>
                <Col>
                    <p>As we move forward, we look forward to getting more opportunities to collaborate with more businesses, forming meaningful partnerships, and watching our clients’ successes continue to skyrocket.</p>
                    <p>We also hope to encounter more of the like-minded, driven, and passionate business owners we’ve had the pleasure of working with.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default StoryVisionFuture;