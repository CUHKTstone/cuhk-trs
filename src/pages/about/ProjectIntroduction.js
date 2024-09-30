import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const content = [
    {
        "subheading": "Mission", "points": [
            "To form an interdisciplinary team with various expertise in engineering and medicine from three local institutes, and to forge international collaboration towards the establishment of a world-class research center in surgical robots in Hong Kong.",
            "To develop state-of-the-art technologies for surgical robotics and intellectual properties, and hence to assist Hong Kong in building a leading medical service center in the region;",
            "To nurture local technology and innovation talents by training graduate students, postdoctoral researchers, and engineers through the proposed research activities."
        ]
    },
    {
        "subheading": "Goals", "points": [
            "To design innovative sensing systems and algorithms for sensing surgical objects including organs and tissues, perceiving their 3D structures, and tracking their motions, and for visualizing the highly changing/dynamic surgical objects/field;",
            "To develop new approaches for automatic planning of the surgical procedures and navigating the robot using visual information in the highly dynamic environment;",
            "To design absolutely safe controllers for controlling robot to carry out surgical procedures on soft tissues using image feedback from visions such as cameras, ultrasonic sensors, etc., and prove the absolute safety based on energy flow of the system;",
            "To develop intelligent capabilities for surgical robots of learning from experiences, adapting to fast changes of the surgical field, and making smart decisions in highly complicated situations with various uncertainties;",
            "To integrate the fundamental technologies into an image-guided automatic minimally invasive robot surgery system; and",
            "To demonstrate and evaluate the performance of the technologies to be developed by ex-vivo experiments, and, if allowed, clinical trials and pilot applications."
        ]
    }
]

function ProjectIntroduction() {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <h5>About</h5>
                    <ul>
                        <li><Link to='/project-introduction'>Project Introduction</Link></li>
                        <li><Link to='/research-team'>Research Team</Link></li>
                        <li><Link to='/participating-organisation'>Participating Organisation</Link></li>
                        <li><Link to='/management-committee'>Management Committee</Link></li>
                        <li><Link to='/advisory-committee'>Advisory Committee</Link></li>
                    </ul>
                </Col>
                <Col md={8}>
                    <h3>Project Introduction</h3>
                    <p>We developed innovative solutions to critical surgical challenges, which include (1) novel sensing systems and perception algorithms for real-time 3D reconstruction of surgical objects; (2) data-driven surgical planning and navigation using image database; (3) visually servoed controllers for manipulating soft tissues with a coarse model or without a model; and (4) robotic surgery intelligence based on deep learning. The technologies are integrated into image-guided surgical robots, which also be validated by ex-vivo experiments of laparoscopic hysterectomy.</p>
                    {content.map((item, i) =>
                        <div key={i}>
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

export default ProjectIntroduction;
