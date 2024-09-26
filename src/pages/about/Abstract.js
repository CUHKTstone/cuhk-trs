import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function Abstract() {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <h5>About</h5>
                    <ul>
                        <li><Link to='/welcome-message'>Welcome Message</Link></li>
                        <li><Link to='/about-us'>About Us</Link></li>
                        <li><Link to='/abstract'>Abstract</Link></li>
                        <li><Link to='/mission-goals'>Mission & Goals</Link></li>
                        <li><Link to='/management-committee'>Management Committee</Link></li>
                    </ul>
                </Col>
                <Col md={8}>
                    <h3>Abstract</h3>
                    <p>
                        Robotics is widely considered to be one of the key technological drivers of economic growth and competitiveness. It therefore is important for Hong Kong to develop its own robotics technology.  The challenge lies in where to position Hong Kong in this extremely broad interdisciplinary area. Since Hong Kong has the best healthcare system in the region, developing robotics technology for healthcare is an obvious strategy, which will build upon our existing strengths.
                    </p>
                    <p>
                        The objective of this project is to establish a world-class research center in surgical robotics in Hong Kong by forming an interdisciplinary team with the necessary expertise in engineering and medicine from local universities, and collaborating with internationally-respected institutions such as Intuitive Surgical Inc., Imperial College London, and Johns Hopkins University. Existing surgical robots work in a remote control mode in which a surgeon tele-controls the robots with full attention. It is widely considered that such remote-controlled robots will be replaced by next-generation ones that will assist surgeons with high-level intelligence, and/or automatically perform particular steps of surgical procedures. The development of such intelligent surgical robots presents several big scientific challenges including (1) how to efficiently and reliably sense surgical objects/fields; (2) how to automatically carry out pre-operative (pre-op) surgical planning and navigate the robots in the highly dynamic and individual-dependent environment; (3) how to control the actions of surgical robots safely and accurately; (4) how to equip surgical robots with high-level intelligence, e.g., the abilities of situation awareness and reasoning. By combining the expertise and experiences in the different areas, we aim to develop innovative solutions to those challenges, which include (1) novel systems and algorithms for real-time sensing of 3D geometry, force, and biomechanical properties of surgical objects; (2) data-driven surgical planning and navigation by using the huge image data of robotic surgery at the Prince of Wales Hospital (PWH) and Intuitive Surgical Inc.; (3) visually servoed controllers for robots interacting with soft tissues; and (4) robotic surgery intelligence based on deep learning. The technologies will be integrated into a prototype of image-guided surgical robots that is able to automatically assist surgeons and/or perform a single surgical step or several connected steps of surgical procedures. We will use the total laparoscopic hysterectomy (TLH) as the example to validate the system by ex-vivo experiments, and if approved, by clinical trials and pilot applications.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Abstract;
