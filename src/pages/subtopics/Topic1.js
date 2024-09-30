import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import { Link } from "react-router-dom";

function Topic1() {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <h5>Research Topic</h5>
                    <ul>
                        <li><Link to='/research-topic'>Overview</Link></li>
                        <li><Link to='/subtopic-1'>Topic 1: Real-time Sensing and Perception</Link></li>
                        <li><Link to='/subtopic-2'>Topic 2: Image-guided Surgery Planning and Navigation</Link></li>
                        <li><Link to='/subtopic-3'>Topic 3: Image-Based Motion/Action Control</Link></li>
                        <li><Link to='/subtopic-4'>Topic 4: Robotic Surgery Intelligence</Link></li>
                        <li><Link to='/subtopic-5'>Topic 5: System Integration, Prototyping, and Experimental Evaluation</Link></li>
                    </ul>
                </Col>
                <Col md={8}>
                    <h3>Topic 1: Real-time Sensing and Perception</h3>
                    <p>To perform surgical procedures, a robot needs information including 3D structure and biomechanical properties of surgical objects, shape of the instruments, its interaction forces with surgical objects, etc. The scientific objective of this topic is to develop innovative solutions to these sensing problems. The challenges lie in three aspects: Firstly, deformation of soft tissues and light-deficient surgical field leads to various noises in imaging. Secondly, the sensors must be embedded into small tips of the instruments. Thirdly, the real-time efficiency is crucial for automated operation of robots.</p>
                    <ol>
                        <li>
                            <strong>Real-time 3D Imaging</strong><br />
                            To achieve a reliable and real-time reconstruction in minimally invasive surgery, we have developed a 3D endoscopic system enabling active stereo perception by combining the laser scanning and stereo matching. Our system could achieve reconstruction error in less than 1 mm in 10-20 fps speed.
                        </li>
                        <li>
                            <strong>Real-time learning-based dense 3D reconstruction and Rendering</strong><br />
                            We develop learning-based 3D reconstruction methods from  surgical videos, achieving high accuracy reconstruction, pose estimation, and real-time rendering for both static and dynamic scene.
                        </li>
                        <li>
                            <strong>3D Shape Sensing of Flexible Robots Using FBG Sensors</strong><br />
                            We propose a novel graph-based shape optimization method, enabling dynamic curvature and twist estimator using configuration of multi-core FBGs. Our method could achieve high accuracy with 0.2% errors to the length, 3D tip position error of 1.95 mm and shape error  of 1.30 mm in average for 1m length.
                        </li>
                    </ol>
                    <div>
                        <h4>1.1: 3D Handheld Real-time Endoscope with Active Laser Scanning</h4>
                        <Figure>
                            <video width="100%" controls>
                                <source src="/cuhk-trs/videos/topics/topic1/Media1-1-1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <Figure.Caption>Real-Time Active Reconstruction</Figure.Caption>
                        </Figure>
                        <Figure>
                            <Row>
                                <Col>
                                    <video width="100%" controls>
                                        <source src={"/cuhk-trs/videos/topics/topic1/Media1-2-1.mp4"} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </Col>
                                <Col>
                                    <video width="100%" controls>
                                        <source src={"/cuhk-trs/videos/topics/topic1/Media1-2-2.mp4"} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </Col>
                            </Row>
                            <Figure.Caption>Reconstruction Results of Rigid Object and Soft Tissue</Figure.Caption>
                        </Figure>
                    </div>
                    <div>
                        <h4>1.2: SfM-Free Gaussian Splatting for Surgical Scene Reconstruction and Real-Time Rendering</h4>
                        <Figure>
                            <Figure.Image src='/cuhk-trs/images/topics/topic1/Picture1.png' />
                            <Figure.Caption>SfM-Free Reconstruction from Monocular Endoscopic Images</Figure.Caption>
                        </Figure>
                        <Figure>
                            <Row>
                                {Array.from({ length: 4 }, (_, index) => (
                                    <Col key={index}>
                                        <video width="100%" controls>
                                            <source src={"/cuhk-trs/videos/topics/topic1/Media2-2-" + (index + 1).toString() + ".mp4"} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </Col>
                                ))}
                            </Row>
                            <Figure.Caption>Real-Time Rendering for Visualization</Figure.Caption>
                        </Figure>
                    </div>
                    <div>
                        <h4>1.3: 3D Reconstruction and Accurate Localization for Navigation in Robot-Assisted Surgery</h4>
                        <Figure>
                            <Row>
                                {Array.from({ length: 4 }, (_, index) => (
                                    <Col key={index}>
                                        <video width="100%" controls>
                                            <source src={"/cuhk-trs/videos/topics/topic1/Media3-1-" + (index + 1).toString() + ".mp4"} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </Col>
                                ))}
                            </Row>
                            <Figure.Caption>Performance Assessment of 3D Dense Reconstruction</Figure.Caption>
                        </Figure>
                        <Figure>
                            <Row>
                                {["zoom-in", "follow", "zoom-out", "random"].map((title, index) => (
                                    <Col key={index}>
                                        <span>{title}</span>
                                        <video width="100%" controls>
                                            <source src={"/cuhk-trs/videos/topics/topic1/Media3-2-" + (index + 1).toString() + ".mp4"} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </Col>
                                ))}
                            </Row>
                            <Figure.Image src='/cuhk-trs/images/topics/topic1/Picture2.png' />
                            <Figure.Caption>Performance of Laparoscope Localization for Navigation</Figure.Caption>
                        </Figure>
                    </div>
                    <div>
                        <h4>1.4: Real-time learning-based dense 3D reconstruction and Rendering</h4>
                        <Figure>
                            <video width="100%" controls>
                                <source src="/cuhk-trs/videos/topics/topic1/Media4-1-1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </Figure>
                    </div>
                    <div>
                        <h4>1.5: 3D Shape Sensing of Flexible Robots Using FBG Sensors</h4>
                        <ul>
                            <li>A novel graph-based shape optimization method</li>
                            <li>A dynamic curvature and twist estimator using configuration of multi-core FBGs</li>
                            <li>High accuracy: 0.2% errors to the length</li>
                            <ul>
                                <li>3D tip position error of 1.95 mm and shape error  of 1.30 mm in average for 1m length</li>
                            </ul>
                        </ul>
                        <Figure>
                            <Figure.Image src='/cuhk-trs/images/topics/topic1/Picture3.jpg' />
                            <Figure.Caption>3D shape graph for shape optimization</Figure.Caption>
                        </Figure>
                        <Figure>
                            <Row>
                                <Col>
                                    <Figure.Image src='/cuhk-trs/images/topics/topic1/Picture4.png' />
                                </Col>
                                <Col>
                                    <video width="100%" controls>
                                        <source src="/cuhk-trs/videos/topics/topic1/Media5-2-1.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </Col>
                            </Row>
                            <Figure.Caption>Validation in colonoscopy phantom</Figure.Caption>
                        </Figure>
                        <Figure>
                            <video width="100%" controls>
                                <source src="/cuhk-trs/videos/topics/topic1/Media5-3-1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <Figure.Caption>3D Shape estimation in different shapes</Figure.Caption>
                        </Figure>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Topic1;
