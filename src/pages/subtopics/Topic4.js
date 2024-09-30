import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import { Link } from "react-router-dom";

function Topic4() {
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
                    <h3>Topic 4: Robotic Surgery Intelligence</h3>
                    <p>During surgical operations, the workflow cannot be carried out as previously planned. Many unexpected happenings occur for various reasons including sensing errors and mis-manipulation. To ensure safety, surgical robots must be equipped with high-level intelligence of making smart decisions under different situations, which is a learning process from experiences. Deep learning provides one of the innovative solutions to robotic surgery intelligence. By learning the mapping from the situations to surgical actions, it would be possible for the robot to acquire the required high-level intelligence. The scientific objective of this topic is to develop an approach learning the surgical intelligence from the huge data of robotic surgery.</p>
                    <div>
                        <h4>4.1: Learning-based surgical scene and object recognition</h4>
                        <p>A novel multi-stage framework was developed to track multiple surgical tools using long-range temporal information, with two strategies for tracking the rotating bounding box and tool tip, improving depth estimation and positioning. Temporal consistency ensures robustness, validated in cadaver experiments. Additionally, a new framework for surgical instrument segmentation optimizes Mask R-CNN with anchor optimization and an improved Region Proposal Network. Cross-dataset evaluations show generalization capability, with cross-dataset training significantly improving segmentation performance.</p>
                        <Row>
                            <Figure>
                                <Figure.Image src="/cuhk-trs/images/topics/topic4/Picture1.png" />
                                <Figure.Caption>Overview of tool-tracking framework and results in ex-vivo and in-vivo surgical videos.</Figure.Caption>
                            </Figure>
                            <Figure>
                                <video width="100%" controls>
                                    <source src={"/cuhk-trs/videos/topics/topic4/Media1-1-1.mp4"} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <Figure.Caption>Experimental results of surgical instrument segmentation</Figure.Caption>
                            </Figure>
                        </Row>
                    </div>
                    <div>
                        <h4>4.2: AutoLaparo: A New Dataset of Integrated Multi-tasks for Image-guided Surgical Automation in Laparoscopic Hysterectomy</h4>
                        <p>To facilitate evaluation of learning-based automation in surgery, we developed the first integrated dataset (named AutoLaparo) with multiple image-based perception tasks using hysterectomoy as examples. The dataset is developed based on full-length videos of entire hysterectomy procedures. Specifically, three different yet highly correlated tasks are formulated in the dataset, including surgical workflow recognition, laparoscope motion prediction, and instrument and key anatomy segmentation. In addition, experimental results with state-of-the-art models are provided as reference benchmarks for further model developments and evaluations on this dataset. The dataset is publicly available at: <a href='https://autolaparo.github.io/'>https://autolaparo.github.io/</a>.</p>
                        <Row>
                            <Figure>
                                <Figure.Image src="/cuhk-trs/images/topics/topic4/Picture2.png" />
                                <Figure.Caption>The proposed dataset for multi-tasks surgical perception</Figure.Caption>
                            </Figure>
                            <Figure>
                                <Row>
                                    {Array.from({ length: 7 }, (_, index) => (
                                        <Col md={3}>
                                            <video key={index} width="100%" controls>
                                                <source src={"/cuhk-trs/videos/topics/topic4/Media2-1-" + (index + 1).toString() + ".mp4"} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </Col>
                                    ))}
                                </Row>
                                <Figure.Caption>Video clips of different surgical phases</Figure.Caption>
                            </Figure>
                        </Row>
                    </div>
                    <div>
                        <h4>4.3: SurRoL: An open-source reinforcement learning-centered simulation platform</h4>
                        <p>Recently, the learning paradigm of embodied AI has demonstrated a promising ability to learn good control policies for various complex tasks, where embodied AI simulators play an essential role in facilitating relevant research. Despite visible efforts that have been made on embodied intelligence in general, surgical embodied intelligence, which should be supported by well-developed and domain-specific simulation environments, has been largely unexplored so far. In this regard, we designed SurRoL, a simulation platform that is dedicated to surgical embodied intelligence with strong focus on learning algorithm support and extendable infrastructure design. With which we hope to pave the way for future research on surgical embodied intelligence.</p>
                        <Figure>
                            <Figure.Image src="/cuhk-trs/images/topics/topic4/Picture3.gif" />
                        </Figure>
                        <Row>
                            <Figure>
                                <Row>
                                    {Array.from({ length: 4 }, (_, index) => (
                                        <Col key={index}>
                                            <Figure>
                                                <Figure.Image src={"/cuhk-trs/images/topics/topic4/Picture" + (index + 4).toString() + ".gif"} />
                                            </Figure>
                                        </Col>
                                    ))}
                                </Row>
                                <Figure.Caption>The system design of SurRoL, which provides dVRK compatible simulation environments and supports ten common surgical tasks.</Figure.Caption>
                            </Figure>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Topic4;
