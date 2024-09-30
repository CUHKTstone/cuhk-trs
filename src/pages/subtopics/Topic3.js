import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import { Link } from "react-router-dom";

function Topic3() {
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
                    <h3>Topic 3: Image-Based Motion/Action Control</h3>
                    <p>Minimally Invasive Surgery (MIS) involves manipulating soft tissues and surgical tools using laparoscopic images. Key challenges include soft tissue deformability, limited robot movement, and safety. To address these, we develop innovative solutions for single and multi-robot tissue manipulation and enhancing collaboration between robots and surgeons, ultimately creating new theories for image-based control in surgical robotics.</p>
                    <Figure>
                        <Figure.Image src="/cuhk-trs/images/topics/topic3/Picture1.png" />
                    </Figure>
                    <div>
                        <h4>3.1: Image-based Manipulation of Soft Tissues</h4>
                        <Row>
                            <h6>With 2D Image Measurements</h6>
                            <Col>
                                <video className="mb-4" width="100%" controls>
                                    <source src={"/cuhk-trs/videos/topics/topic3/Media1-1-1.mp4"} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Col>
                            <Col>
                                <video className="mb-4" width="100%" controls>
                                    <source src={"/cuhk-trs/videos/topics/topic3/Media1-1-2.mp4"} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Col>
                        </Row>
                        <Row>
                            <h6>With Stereo Image Measurements</h6>
                            <Col>
                                <video className="mb-4" width="100%" controls>
                                    <source src={"/cuhk-trs/videos/topics/topic3/Media1-2-1.mp4"} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Col>
                            <Col>
                                <video className="mb-4" width="100%" controls>
                                    <source src={"/cuhk-trs/videos/topics/topic3/Media1-2-2.mp4"} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Col>
                        </Row>
                        <Row>
                            <h6>With Raw Point Cloud Measurements</h6>
                            <Col>
                                <video className="mb-4" width="100%" controls>
                                    <source src={"/cuhk-trs/videos/topics/topic3/Media1-3-1.mp4"} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Col>
                            <Col>
                                <video className="mb-4" width="100%" controls>
                                    <source src={"/cuhk-trs/videos/topics/topic3/Media1-3-2.mp4"} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <h4>3.2: Image-Based Control of Surgical Robots</h4>
                        <Row>
                            <h6>Surgical Tool Control</h6>
                            <Col>
                                <video className="mb-4" width="100%" controls>
                                    <source src={"/cuhk-trs/videos/topics/topic3/Media2-1-1.mp4"} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Col>
                            <Col>
                                <video className="mb-4" width="100%" controls>
                                    <source src={"/cuhk-trs/videos/topics/topic3/Media2-1-2.mp4"} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Col>
                            <Col>
                                <video className="mb-4" width="100%" controls>
                                    <source src={"/cuhk-trs/videos/topics/topic3/Media2-1-3.mp4"} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Col>
                        </Row>
                        <Row>
                            <h6>Laparoscope Control</h6>
                            <Col>
                                <Figure>
                                    <Figure.Image src="/cuhk-trs/images/topics/topic3/Picture2.png" />
                                </Figure>
                            </Col>
                            <Col>
                                <video className="mb-4" width="100%" controls>
                                    <source src={"/cuhk-trs/videos/topics/topic3/Media2-2-1.mp4"} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Col>
                        </Row>
                        <Row>
                            <h6>Flexible Endoscope Control in Narrow Environments</h6>
                            <Col>
                                <video className="mb-4" width="100%" controls>
                                    <source src={"/cuhk-trs/videos/topics/topic3/Media2-3-1.mp4"} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <h4>3.3: Coordination Control of Surgical Robots</h4>
                        <Row>
                            <h6>Dual-Arm Cooperative Needle Insertion</h6>
                            <Col md={6}>
                                <Figure>
                                    <Figure.Image src="/cuhk-trs/images/topics/topic3/Picture3.png" />
                                </Figure>
                            </Col>
                            <Col md={3}>
                                <video className="mb-4" width="100%" height="200" controls>
                                    <source src={"/cuhk-trs/videos/topics/topic3/Media3-1-1.mp4"} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Col>
                            <Col md={3}>
                                <video className="mb-4" width="100%" height="200" controls>
                                    <source src={"/cuhk-trs/videos/topics/topic3/Media3-1-2.mp4"} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Col>
                        </Row>
                        <Row>
                            <h6>Three-Arm Cooperative Needle Insertion</h6>
                            <Col md={6}>
                                <Figure>
                                    <Figure.Image src="/cuhk-trs/images/topics/topic3/Picture4.png" />
                                </Figure>
                            </Col>
                            <Col md={3}>
                                <video className="mb-4" width="100%" height="200" controls>
                                    <source src={"/cuhk-trs/videos/topics/topic3/Media3-2-1.mp4"} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Col>
                            <Col md={3}>
                                <video className="mb-4" width="100%" height="200" controls>
                                    <source src={"/cuhk-trs/videos/topics/topic3/Media3-2-2.mp4"} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Col>
                        </Row>
                        <Row>
                            <h6>Dual-Arm Cooperative Suturing</h6>
                            <Col>
                                <video className="mb-4" width="100%" controls>
                                    <source src={"/cuhk-trs/videos/topics/topic3/Media3-3-1.mp4"} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Col>
                            <Col>
                                <video className="mb-4" width="100%" controls>
                                    <source src={"/cuhk-trs/videos/topics/topic3/Media3-3-2.mp4"} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <h4>3.4: Surgeon-Robot Collaboration Control</h4>
                        <Row>
                            <h6>Control the Laparoscope to Follow Surgeons' Tools</h6>
                            <Col>
                                <video className="mb-4" width="100%" controls>
                                    <source src={"/cuhk-trs/videos/topics/topic3/Media4-1-1.mp4"} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Col>
                        </Row>
                        <Row>
                            <h6>Robotic Uterus Manipulator to Assist Surgeons' Operations</h6>
                            <Col>
                                <video className="mb-4" width="100%" controls>
                                    <source src={"/cuhk-trs/videos/topics/topic3/Media4-2-1.mp4"} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Topic3;
