import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Figure from 'react-bootstrap/Figure';
import { Link } from "react-router-dom";

const subtopicContents = [
    { "title": "Real-time sensing and perception", "content": "Develop real-time sensing methods for measuring 3D structures of soft tissues, their biomechanical properties, and the forces acting on tissues;" },
    { "title": "Image-guided surgery planning and navigation", "content": "Study data-driven pre-operative surgery planning, intra-operative planning, and image-guided navigation of surgical robots;" },
    { "title": "Image-guided motion/action control", "content": "Investigate image-based position and force control of surgical robots interacting with soft tissues, and collaboration control of surgeons and robots." },
    { "title": "Robotic surgery intelligence", "content": "Develop high-level intelligence for situation awareness, decision-making during procedures and learning from past videos in the surgery database;" },
    { "title": "System integration, prototyping and experimental evaluation", "content": "Develop a prototype of image-guided automatic robot surgery and validate the enabling technologies using" },
]

function ResearchTopic({ subTopicCount }) {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <h5>Research Topic</h5>
                    <ul>
                        <li><Link to='/research-topic'>Overview</Link></li>
                        <li><Link to='/subtopic-1'>Topic 1: Real-time sensing and perception</Link></li>
                        <li><Link to='/subtopic-2'>Topic 2: Image-guided surgery planning and navigation</Link></li>
                        <li><Link to='/subtopic-3'>Topic 3: Image-Based Motion/Action Control</Link></li>
                        <li><Link to='/subtopic-4'>Topic 4: Robotic Surgery Intelligence</Link></li>
                        <li><Link to='/subtopic-5'>Topic 5: System Integration, Prototyping, and Experimental Evaluation</Link></li>
                    </ul>
                </Col>
                <Col md={8}>
                    <h3>Research Topic</h3>
                    <p>
                        The scientific objective of this project is to develop enabling technologies so that surgical robots can automatically conduct steps of surgical procedures and/or to intelligently assist surgeons with required accuracy and guaranteed safety. Although full automation of interventional procedures is a long-term dream, our research is focused on the automation of surgical steps/sub-tasks and the development of automated robotic assistants. It should be noted that the automation is not limited to single steps, and may involve execution of several connected steps. Such autonomous robots need have the ability (i) to sense and perceive surgical objects; (ii) to plan and navigate themselves; (iii) to perform the procedures on soft tissues/organs; and (iv) to be aware of surgical situations and to make proper decisions. To address the technical challenges, we have identified the following <strong>five key research topics</strong>:
                    </p>
                    <ol>
                        {subtopicContents.map((content, i) => (
                            <li>
                                <strong>{content.title}</strong>: {content.content}
                            </li>
                        ))}
                    </ol>
                    <Figure>
                        <Figure.Image src='/cuhk-trs/images/topics/Picture1.png'/>
                    </Figure>
                </Col>
            </Row>
        </Container>
    );
}

export default ResearchTopic;
