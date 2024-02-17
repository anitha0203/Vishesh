import React from 'react';
import "./Members.css"
import { Container, Row, Col } from 'react-bootstrap';

const MembersData = [
    { image: require("../../../assets/AboutPage/Rajeswari.png"), name: "Rajeswari P", teamName: "Full Stack Development Lead" },
    { image: require("../../../assets/AboutPage/Anitha.png"), name: "Anitha", teamName: "Full Stack Developer" },
    { image: require("../../../assets/AboutPage/Syam.png"), name: "Syam", teamName: "Full Stack Developer" },
    { image: require("../../../assets/AboutPage/Ajay.png"), name: "Ajay", teamName: "Full Stack Developer" },
    { image: require("../../../assets/AboutPage/Aditya.png"), name: "Aditya", teamName: "Full Stack Developer" },
    { image: require("../../../assets/AboutPage/Vinod.png"), name: "Vinod", teamName: "Full Stack Developer" },
    { image: require("../../../assets/AboutPage/Jhansi.png"), name: "Jhansi", teamName: "Creative Design Lead" },
    { image: require("../../../assets/AboutPage/RajeswariK.png"), name: "Rajeswari", teamName: "Creative Designer" },
    { image: require("../../../assets/AboutPage/Prasanna.png"), name: "Prasanna", teamName: "Creative Designer" },
    { image: require("../../../assets/AboutPage/Sai Gopinadh.png"), name: "Sai Gopinadh", teamName: "Creative Designer" },
    { image: require("../../../assets/AboutPage/Vinay.png"), name: "Vinay", teamName: "Digital Marketing Lead" },
    { image: require("../../../assets/AboutPage/Durga Rao.png"), name: "Durga Rao", teamName: "Digital Marketer" },
    { image: require("../../../assets/AboutPage/Lasya.png"), name: "Lasya", teamName: "Digital Marketer" },
    { image: require("../../../assets/AboutPage/manoj.png"), name: "Manoj", teamName: "UI/UX Designer" },
    { image: require("../../../assets/AboutPage/Tejaswini.png"), name: "Tejaswini", teamName: "UI/UX Designer" },
    { image: require("../../../assets/AboutPage/Ramesh.png"), name: "Ramesh", teamName: "Marketing Analysis" },
    { image: require("../../../assets/AboutPage/mounika.png"), name: "Mounika", teamName: "Marketing Analysis" },
    { image: require("../../../assets/AboutPage/Kartheek.png"), name: "Kartheek", teamName: "Marketing Analysis" },
    { image: require("../../../assets/AboutPage/Uday.png"), name: "Uday", teamName: "Trainee" },
    { image: require("../../../assets/AboutPage/Kumar.png"), name: "Kumar", teamName: "Trainee" },
    { image: require("../../../assets/AboutPage/Ganesh.png"), name: "Ganesh", teamName: "Trainee" },
]

function Members(props) {


    return (
        <Container className='MembersContainer' fluid >
            <Row>
                {
                    MembersData.map((MemberData) => {
                        return (
                            <Col lg={2} className='Member'>
                                {/* <img src={MemberData.image} alt="" className='MemberImage' /> */}
                                {MemberData.name}

                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    );
}

export default Members;