import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Offer.css";
// import creative from "../../../assets/ServicePage/creative1.png";
// import ui from "../../../assets/ServicePage/ui.png";
// import full from '../../../assets/ServicePage/fullstack.png';
// import digital from '../../../assets/ServicePage/digital.png';
// import marketing from '../../../assets/ServicePage/marketing.png';

function Offer() {
    const [selectedText, setSelectedText] = useState("Text 1");

    const toggleContent = (text) => {
        setSelectedText(text === selectedText ? "" : text);
    };

    return (
        <div style={{backgroundColor:"#242424"}}>
        <div className="container-wrapper">
          
            <div className="Toggle-container">
            <h1 className="offer-heading">What We Offer</h1>
                <div
                    className={`text ${selectedText === "Text 1" ? "active" : ""}`}
                    onClick={() => toggleContent("Text 1")}
                >
                    Creative Design <span className="arrow">&#8594;</span>
                </div>
                <div
                    className={`text ${selectedText === "Text 2" ? "active" : ""}`}
                    onClick={() => toggleContent("Text 2")}
                >
                    UI/UX <span className="arrow">&#8594;</span>
                </div>
                <div
                    className={`text ${selectedText === "Text 3" ? "active" : ""}`}
                    onClick={() => toggleContent("Text 3")}
                >
                    FullStack Development <span className="arrow">&#8594;</span>
                </div>
                <div
                    className={`text ${selectedText === "Text 4" ? "active" : ""}`}
                    onClick={() => toggleContent("Text 4")}
                >
                    Digital Marketing <span className="arrow">&#8594;</span>
                </div>
                <div
                    className={`text ${selectedText === "Text 5" ? "active" : ""}`}
                    onClick={() => toggleContent("Text 5")}
                >
                    Marketing Analysis <span className="arrow">&#8594;</span>
                </div>
            </div>

            <div className="TextToggle-Inside1">
                {selectedText === "Text 1" && (
                    <div className="specific-div">
                        <Image src='' width={'880px'} style={{ borderRadius: '24px' }} />
                        <Row className="services-offer-row">
                            <Col className="col-offer"><p>Logo Design</p>
                                <p>Video Creation & Editing</p>
                                <p>Business Card Design</p>
                                <p>Packaging Design</p>
                                <p>Branding and Identity Design</p>
                                <p>Infographics</p></Col>
                            <Col className="col-offer"><p>Banner and Signage Design</p>
                                <p>Display Advertising</p>
                                <p>Product Labelling</p>
                                <p>Social Media Post and Ad Design</p>
                                <p>Print Design (Brochures & Flyers) /</p>
                                <p>Social Media Posters /</p></Col>
                        </Row>
                    </div>
                )}
                {selectedText === "Text 2" && (
                   <div className="specific-div">
                   <Image src='' width={'880px'} style={{borderRadius:'24px'}}/>
                   <Row className="services-offer-row">
                 
                    <Col className="col-offer"><p>User Research</p>
                    <p>User Experience (UX) Design</p>
                    <p>User Interface (UI) Design</p>
                  </Col>
                    <Col className="col-offer"><p>Prototyping and Testing</p>
                    <p>Web UX/UI Design</p>
                    <p>Mobile App UX/UI Design</p>
                   </Col>
                   </Row>
                </div>
                )}
                {selectedText === "Text 3" && (
                   <div className="specific-div">
                   <Image src='' width={'880px'} style={{borderRadius:'24px'}}/>
                   <Row className="services-offer-row">
                 
                    <Col className="col-offer"><p>Logo Design</p>
                    <p>Video Creation & Editing</p>
                    <p>Business Card Design</p>
                 </Col>
                    <Col className="col-offer"><p>Banner and Signage Design</p>
                    <p>Display Advertising</p>
                    <p>Product Labelling</p>
                  </Col>
                   </Row>
                </div>
                )}
                {selectedText === "Text 4" && (
                   <div className="specific-div">
                   <Image src='' width={'880px'} style={{borderRadius:'24px'}}/>
                   <Row className="services-offer-row">
                 
                    <Col className="col-offer"><p>Logo Design</p>
                    <p>Video Creation & Editing</p>
                    <p>Business Card Design</p>
                    <p>Packaging Design</p>
                    <p>Branding and Identity Design</p>
                    <p>Infographics</p></Col>
                    <Col className="col-offer"><p>Banner and Signage Design</p>
                    <p>Display Advertising</p>
                    <p>Product Labelling</p>
                    <p>Social Media Post and Ad Design</p>
                    <p>Print Design (Brochures & Flyers) /</p>
                    <p>Social Media Posters /</p></Col>
                   </Row>
                </div>
                )}
                {selectedText === "Text 5" && (
                   <div className="specific-div">
                   <Image src='' width={'880px'} style={{borderRadius:'24px'}}/>
                   <Row className="services-offer-row">
                 
                    <Col className="col-offer"><p>Logo Design</p>
                    <p>Video Creation & Editing</p>
                    <p>Business Card Design</p>
                    <p>Packaging Design</p>
                    <p>Branding and Identity Design</p>
                    <p>Infographics</p></Col>
                    <Col className="col-offer"><p>Banner and Signage Design</p>
                    <p>Display Advertising</p>
                    <p>Product Labelling</p>
                    <p>Social Media Post and Ad Design</p>
                    <p>Print Design (Brochures & Flyers) /</p>
                    <p>Social Media Posters /</p></Col>
                   </Row>
                </div>
                )}
            </div>
        </div></div>
    );
}

export default Offer;
