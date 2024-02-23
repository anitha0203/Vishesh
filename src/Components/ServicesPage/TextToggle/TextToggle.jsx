import React, { useState } from "react";
import "./TextToggle.css"; // Import CSS file for styling
import { Container, Row, Col, Image } from "react-bootstrap";
import img1 from "../../../assets/ServicePage/Photoshop.png";
import img2 from "../../../assets/ServicePage/InDesign.png";
import img3 from "../../../assets/ServicePage/illustrator.png";
import img4 from "../../../assets/ServicePage/Premiere Pro.png";
import img5 from "../../../assets/ServicePage/Dimension.png";
import img6 from "../../../assets/ServicePage/Canva.png";
import img7 from "../../../assets/ServicePage/After Effects.png";   
import img8 from "../../../assets/ServicePage/Davinci Resolve.png";
import img9 from "../../../assets/ServicePage/Figma.png";
import img10 from "../../../assets/ServicePage/Adobe XD.png";
import img11 from "../../../assets/ServicePage/Miro.png";
import img12 from "../../../assets/ServicePage/Notion.png";
import img13 from "../../../assets/ServicePage/Hubspot.png";
import img14 from "../../../assets/ServicePage/WordPress.png";
import img15 from "../../../assets/ServicePage/Oracle.png";
import img16 from "../../../assets/ServicePage/MailChimp.png";
import img17 from "../../../assets/ServicePage/Google Analytics.png";
import img18 from "../../../assets/ServicePage/Google Ads.png";
import img19 from "../../../assets/ServicePage/Meta.png";
import img20 from "../../../assets/ServicePage/Meta.png";
import img21 from "../../../assets/ServicePage/Meta.png";
import img22 from "../../../assets/ServicePage/JavaScript.png";
import img23 from "../../../assets/ServicePage/Angular.png";
import img24 from "../../../assets/ServicePage/React.png";
import img25 from "../../../assets/ServicePage/Nodejs.png";
import img26 from "../../../assets/ServicePage/WordPress.png";
import img27 from "../../../assets/ServicePage/WordPress.png";
import img28 from "../../../assets/ServicePage/WordPress.png";
import img29 from "../../../assets/ServicePage/WordPress.png";
import img30 from "../../../assets/ServicePage/PHP.png";
import img31 from "../../../assets/ServicePage/PHP.png";
import img32 from "../../../assets/ServicePage/PHP.png";
import img33 from "../../../assets/ServicePage/PHP.png";
import img34 from "../../../assets/ServicePage/Hubspot.png";
import img35 from "../../../assets/ServicePage/Hubspot.png";


function TextToggle() {
  const [selectedText, setSelectedText] = useState("Text 1"); // Initially open "Text 1"

  const toggleContent = (text) => {
    setSelectedText(text === selectedText ? null : text);
  };

  return (
    <>
      <div className="TextToggle-container">
        <div
          className={`team ${selectedText === "Text 1" ? "active" : ""}`}
          onClick={() => toggleContent("Text 1")}
        >
          Creative Design
        </div>
        <div
          className={`team ${selectedText === "Text 2" ? "active" : ""}`}
          onClick={() => toggleContent("Text 2")}
        >
          UI/UX
        </div>
        <div
          className={`team ${selectedText === "Text 3" ? "active" : ""}`}
          onClick={() => toggleContent("Text 3")}
        >
          Digital Marketing
        </div>
        <div
          className={`team ${selectedText === "Text 4" ? "active" : ""}`}
          onClick={() => toggleContent("Text 4")}
        >
          FullStack Development
        </div>
        <div
          className={`team ${selectedText === "Text 5" ? "active" : ""}`}
          onClick={() => toggleContent("Text 5")}
        >
          Marketing Analysis
        </div>
      </div>

      <div className="underline-container">
        <div className={`underline ${selectedText ? "active" : ""}`}></div>
      </div>

      <div className="content">
        {selectedText === "Text 1" && (
          <Container
            className="TextToggle-Inside"
          >
            <Row>
              <Col>
                <Image src={img1} />
                <p>PhotoShop</p>
              </Col>
              <Col>
                <Image src={img2} />
                <p>InDesign</p>
              </Col>
              <Col>
                <Image src={img3} />
                <p>Illustrator</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Image src={img4} />
                <p>Premiere Pro</p>
              </Col>
              <Col>
                <Image src={img5} />
                <p>Dimension</p>
              </Col>
              <Col>
                <Image src={img6} />
                <p>Canva</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Image src={img7} />
                <p>After Effects</p>
              </Col>
              <Col>
                <Image src={img8} />
                <p>Davinci Resolve</p>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        )}
        {selectedText === "Text 2" && (
          <Container
          className="TextToggle-Inside"
          
          >
            <Row>
              <Col>
                <Image src={img9} />
                <p>Figma</p>
              </Col>
              <Col>
                <Image src={img10} />
                <p>Adobe XD</p>
              </Col>
              <Col>
                <Image src={img11} />
                <p>Miro</p>
              </Col>
              <Col>
                <Image src={img12} />
                <p>Notion</p>
              </Col>
            </Row>
          </Container>
        )}
        {selectedText === "Text 3" && <Container
           className="TextToggle-Inside"
          >
            <Row>
              <Col>
                <Image src={img13} />
                <p>HubSpot</p>
              </Col>
              <Col>
                <Image src={img14} />
                <p>WordPress</p>
              </Col>
              <Col>
                <Image src={img15} />
                <p>Oracle</p>
              </Col>
              <Col>
                <Image src={img16} />
                <p>MailChimp</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Image src={img17} />
                <p>Google Analytics</p>
              </Col>
              <Col>
                <Image src={img18} />
                <p>Google Ads</p>
              </Col>
              <Col>
                <Image src={img19} />
                <p>Meta</p>
              </Col>
            </Row>
          </Container>}
        {selectedText === "Text 4" && <Container
            className="TextToggle-Inside"
          >
            <Row>
              <Col>
                <Image src={img20} />
                <p>HTML</p>
              </Col>
              <Col>
                <Image src={img21} />
                <p>CSS</p>
              </Col>
              <Col>
                <Image src={img22} />
                <p>JavaScript</p>
              </Col>
              <Col>
                <Image src={img23} />
                <p>Angular</p>
              </Col>
              <Col>
                <Image src={img24} />
                <p>React</p>
              </Col>
              <Col>
                <Image src={img25} />
                <p>Node</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Image src={img26} />
                <p>jQuery</p>
              </Col>
              <Col>
                <Image src={img27} />
                <p>MongoDB</p>
              </Col>
              <Col>
                <Image src={img28} />
                <p>Next.js</p>
              </Col>
              <Col>
                <Image src={img29} />
                <p>WordPress</p>
              </Col>
              <Col>
                <Image src={img30} />
                <p>MySql</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Image src={img31} />
                <p>Express.js</p>
              </Col>
              <Col>
                <Image src={img32} />
                <p>PHP</p>
              </Col>
              <Col>
                <Image src={img33} />
                <p>React</p>
              </Col>
              <Col>
                <Image src={img34} />
                <p>HubSpot</p>
              </Col>
              <Col>
                <Image src={img35} />
                <p>Redux</p>
              </Col>
            </Row>
          </Container>}
        {selectedText === "Text 5" && <Container
          className="TextToggle-Inside"
          >
            <Row>
              <Col>
                <Image src={img9} />
                <p>Figma</p>
              </Col>
              <Col>
                <Image src={img10} />
                <p>Adobe XD</p>
              </Col>
              <Col>
                <Image src={img11} />
                <p>Miro</p>
              </Col>
              <Col>
                <Image src={img12} />
                <p>Notion</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Image src={img4} />
                <p>Premiere Pro</p>
              </Col>
              <Col>
                <Image src={img5} />
                <p>Dimension</p>
              </Col>
              <Col>
                <Image src={img6} />
                <p>Canva</p>
              </Col>
            </Row>
          </Container>}
      </div>
    </>
  );
}

export default TextToggle;
