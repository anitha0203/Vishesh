import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import "./principles.css"
import image1 from "../../../assets/cone.png";
import image2 from "../../../assets/provident.png";
import image3 from "../../../assets/Effectiveness.png";
import image4 from "../../../assets/results-driven.png";
import image5 from "../../../assets/Time-to-market.png";
import image6 from "../../../assets/people-first.png";


function principles() {
  return (
    <Container>
      <h3 className="principles">Our Principles</h3>
      <Row className="service-row-sec">
        <Col className="service-col-sec"><Image src={image1} className="icon" />
          <h5 className="heading-principals">Expertise</h5>
          <p className="sub_text_principals">Drawing from our extensive expertise across diverse industries, we offer research-driven solutions.</p></Col>

        <Col className="service-col-sec"><Image src={image2} className="icon" />
          <h5 className="heading-principals">Provident</h5>
          <p className="sub_text_principals">We'll understand your business needs and attract the right specialists for you.</p></Col>

        <Col className="service-col-sec"><Image src={image3} className="icon" />
          <h5 className="heading-principals">Effectiveness</h5>
          <p className="sub_text_principals">Our projects are always successful and delivered on time at a cost-effective price.</p></Col>
      </Row>
      <Row className="service-row-sec">
        <Col className="service-col-sec"><Image src={image4} className="icon" />
          <h5 className="heading-principals">Results-driven</h5>
          <p className="sub_text_principals">We'll enhance customer numbers and loyalty through improved accessibility, quicker onboarding, and added services..</p></Col>

        <Col className="service-col-sec"><Image src={image5} className="icon" />
          <h5 className="heading-principals">Time to Market</h5>
          <p className="sub_text_principals">The in-house team's scalability allows us to tailor it to the project's requirements and business objectives.</p></Col>

        <Col className="service-col-sec"><Image src={image6} className="icon" />
          <h5 className="heading-principals">People-first</h5>
          <p className="sub_text_principals">Our team comprises exceptional specialists with equally great personalities, ensuring honest, open collaboration.</p></Col>

      </Row>
    </Container>
  );
}

export default principles;
