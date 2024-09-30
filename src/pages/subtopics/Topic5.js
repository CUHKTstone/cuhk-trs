import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import { Link } from "react-router-dom";

function Topic5() {
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
                    <h3>Topic 5: System Integration, Prototyping, and Experimental Evaluation</h3>
                    <p>The objective of this topic is to develop prototypes, integrate the enabling technologies, and verify their performance for real surgical procedures by ex-vivo experiments, and clinical trials, if allowed.</p>
                    <div>
                        <h4>5.1: Human-robot interactive one-surgeon-four-arms system</h4>
                        <p>By integrating image-based tracking and perception with surgical robots, we have developed an interactive one-surgeon-four arm system that provides a surgeon two additional arms in laparoscopic hysterectomy. In the system, a uterus manipulation robot and a laparoscopic manipulation robot assist the surgeon in the surgical procedures by providing automated or interactive control of the uterus and the laparoscope, respectively. The performance of the system has been validated by cadaver experiments. The uterus manipulation robot was examined by clinical experiments.</p>
                        <Figure>
                            <Figure.Image src="/cuhk-trs/images/topics/topic5/Picture1.png" />
                            <Figure.Caption>The designed uterine manipulation robot (left), the cadaver study of the developed one-surgeon-four-arm system (middle), and the laparoscopic views of the uterine motion from the clinical trials and automatic laparoscopic motion prediction (right).</Figure.Caption>
                        </Figure>
                    </div>
                    <div>
                        <h4>5.2: Multi-port surgical robot system for minimally invasive surgery</h4>
                        <p>In addition to improving the dVRK, by integrating the modular joints, the instruments, the software technology, the control and planning methods, human-robot interactions, etc. developed in this project, we have designed and built a novel multi-port surgical robot, together with a start-up company CornerStone. Our surgical robot includes a surgeon master console, multi-arm patient-side manipulators, and an integrated robot and endoscopic image data processor. The performance of our own surgical robot has been examined by leading surgeons in Hong Kong and Mainland using cadaver and animal experiments. All the surgeons highly commented the performance of our robot and considered it at similar levels to that of the da Vinci robots.</p>
                        <Figure>
                            <Figure.Image src="/cuhk-trs/images/topics/topic5/Picture2.png" />
                            <Figure.Caption>The multi-port surgical robot developed together with our start-up: CornerStone Robotics</Figure.Caption>
                        </Figure>
                    </div>
                    <div>
                        <h4>5.3: Dexterous and flexible miniature surgical robot for endoscopic surgery</h4>
                        <p>The team integrated the technologies to the development of a flexible surgical robot with a set of thin and dexterous robotic instruments that can be passed through the instrument channels of conventional endoscopes currently used in clinical practice. This system provides long, flexible, and miniature robotic arms with five degrees of freedom (DoFs) per arm in order to enhance tissue traction and instrument triangulation. The team members Prof. KW Kwok, Prof. Jason Chan and Prof. YH Liu set up a start-up Agilis Robotics to commercialize the flexible miniature surgical robot whose performance has been validated by cadaver and animal experiments.</p>
                        <Figure>
                            <Figure.Image src="/cuhk-trs/images/topics/topic5/Picture3.png" />
                            <Figure.Caption>The start-up Agilis Robotics and the animal study using the flexible surgical.</Figure.Caption>
                        </Figure>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Topic5;
