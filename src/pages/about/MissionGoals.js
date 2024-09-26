import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const content = [
    {
        "subheading": "Mission", "points": [
            "To form an interdisciplinary team with expertise in engineering and medicine from three local institutes, and to forge national and international collaboration towards the establishment of a world-class research center in surgical robotics in Hong Kong",
            "To develop state-of-the-art technologies for surgical robotics and intellectual properties, and thereby assisting Hong Kong to establish one of the region’s leading medical service centers",
            "To nurture local technology and innovation talents by training graduate students, postdoctoral researchers, and engineers through carrying out the proposed research activities"
        ]
    },
    {
        "subheading": "Goals", "points": [
            "To design innovative sensing systems and algorithms for sensing surgical objects including organs and tissues, and perceiving their 3D structures and biomechanical properties",
            "To develop new approaches for pre-operative and intra-operative (intra-op) surgical planning and for navigating the robot using the visual information in the highly dynamic environment",
            "To design controllers with guaranteed safety for controlling robots acting on soft tissues using image feedback from visions such as laparoscopic cameras, ultrasonic sensors, etc.",
            "To develop intelligent capabilities for surgical robots to learn from experiences, to recognize surgical situations, and to make smart decisions in highly complicated situations with various uncertainties",
            "To integrate the technologies into an image-guided automatic robotic surgery system for automating the steps of an interventional procedure or for intelligently assisting surgeons",
            "To demonstrate and evaluate the performance of the technologies to be developed by ex-vivo experiments, and, if approved, by clinical trials and pilot applications."
        ]
    },
    {
        "subheading": "Deliverables", "points": [
            "State-of-the-art knowledge in the form of high-impact publications and intellectual properties in image-based sensing and perception of surgical objects, sensor-based planning and navigation in highly dynamic environments, image-based action/motion control of surgical robots, and robotic surgery intelligence",
            "Enabling technologies for image-guided surgical robots that assist surgeons or automatically conduct steps of minimally invasive surgical procedures",
            "Prototype of image-guided surgical robots for laparoscopic hysterectomy",
            "Clinical trials and pilot applications of the robot, if allowed",
            "Training of professionals in the interdisciplinary area (>25 postdoctoral researchers and >50 graduate students)"
        ]
    }
]

function MissionGoals() {
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
                    <h3>Mission & Goals</h3>
                    {content.map((item, i) =>
                        <div key={"item_" + i.toString()}>
                            <p><strong>{item.subheading + ":"}</strong></p>
                            <ul>
                                {item.points.map((point, j) =>
                                    <li key={"item_" + i.toString() + "_point_" + j.toString()}>{point}</li>
                                )}
                            </ul>
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default MissionGoals;
