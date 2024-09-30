import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import { Link } from "react-router-dom";

function Topic2() {
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
                    <h3>Topic 2: Image-guided Surgery Planning and Navigation</h3>
                    <p>
                        Surgical planning is an essential component in automated robotic surgery, which deals with robots' actions deforming, moving on, cutting and suturing soft tissues, etc. The problem is much more challenging than classical robot motion planning because surgical tasks are too complicated to mathematically model and surgical objects vary significantly with individuals. The objective of this topic is to develop a data-driven method to cope with the challenges by making use of the huge image data of robotic surgery at Prince of Wales Hospital (PWH) and Intuitive Surgical Inc.
                    </p>
                    <ul>
                        <li>Data-driven navigation of soft surgical robot</li>
                        <li>Laparoscopic navigation based on online 3-D reconstruction</li>
                        <li>MRI-guided navigation in transoral surgery</li>
                        <li>Image-guided registration in orthopedic surgery</li>
                    </ul>
                    <div>
                        <h4>2.1: Data-driven navigation of soft surgical robot</h4>
                        <p>To resolve cases with deficient visual features in optical camera-based soft robot navigation, we have proposed to fuse the visual information with the sparse strain data collected from the FBG sensors. Utilizing the proposed online learning algorithm and simultaneous localization and mapping (SLAM), the FBG-based pose estimator can be trained and refined directly using data-driven fashion. Prior data collection and additional sensing ground truth is not required. A hybrid controller combining kinematics and data-driven algorithms was proposed to accomplish fast convergence with high accuracy in target tracking tasks. The actual tracking trajectory could keep convergent to the desired even in cases involving external obstacles. Once the robot left the blocked area, the hybrid controller could bring the path back to the desired path in high accuracy again (0.399 ± 0.401 mm), while when using pure model-based control, the robot motion could not return to smooth motion. The image stitching of abdominal-simulator scene clearly demonstrates the details of the scene.</p>
                        <Figure>
                            <Figure.Image src='/cuhk-trs/images/topics/topic2/Picture1.png' />
                            <video width="100%" controls>
                                <source src="/cuhk-trs/videos/topics/topic2/Media1-1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <Figure.Caption>Tracking performance in the swine-viscera-constructed abdominal simulator, with the trajectories of model-based (first cycle) and hybrid (second cycle) controllers</Figure.Caption>
                        </Figure>
                    </div>
                    <div>
                        <h4>2.2: Laparoscopic navigation based on online 3-D reconstruction</h4>
                        <p>We improved the real-time reconstruction module to densely build 3D surgical scenes from a stereo laparoscope and furthermore applied it to the navigation of laparoscope. The learning-based depth estimation module is trained using supervised and unsupervised methods from surgical data for dense depth computation per single frame, followed by the dense visual reconstruction algorithm to reconstruct the entire surgical scene. Using the reconstructed dense 3D structure, a laparoscopic localization module is proposed to achieve coarse-to-fine pose estimation. We evaluated the accuracy of the method on the SCARED dataset, our in-vivo DaVinci robotic surgery dataset, as well as self-collected ex-vivo phantom and tissue-based data. The results shown demonstrate its ability to track the laparoscope in surgical navigation. </p>
                        <Figure>
                            <Figure.Image src='/cuhk-trs/images/topics/topic2/Picture2.png' />
                            <Row>
                                {Array.from({ length: 4 }, (_, index) => (
                                    <Col key={index}>
                                        <video width="100%" controls>
                                            <source src={"/cuhk-trs/videos/topics/topic2/Media2-" + (index + 1).toString() + ".mp4"} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </Col>
                                ))}
                            </Row>
                            <Figure.Caption>Real-time camera pose estimation</Figure.Caption>
                        </Figure>
                    </div>
                    <div>
                        <h4>2.3: MRI-guided navigation in transoral surgery</h4>
                        <p>{"Magnetic resonance (MR) imaging (MRI) provides compelling features for the guidance of interventional procedures, including high-contrast soft tissue imaging, detailed visualization of physiological changes, and thermometry. Laser-based tumor ablation stands to benefit greatly from MRI guidance because 3D resection margins alongside thermal distributions can be evaluated in real time to protect critical structures while ensuring adequate resection margins. We propose an MR-safe soft robotic system for MRI-guided transoral laser microsurgery. Owing to its miniature size and inherent compliance, the soft robot ensures zero electromagnetic interference with MRI and enables safe and dexterous operation within the confined oral and pharyngeal cavities. Submillimeter laser steering accuracy was demonstrated with a mean error < 0.20 mm. MRI compatibility testing demonstrated zero observable image artifacts during robot operation. Ex vivo tissue ablation and a cadaveric head-and-neck trial were carried out under MRI, where we employed MR thermometry to monitor the tissue ablation margin and thermal diffusion intraoperatively."}</p>
                        <Figure>
                            <Figure.Image src='/cuhk-trs/images/topics/topic2/Picture3.png' />
                            <Figure.Caption>MRI-compatible soft fluid-driven robot positioned in the larynx through the oral cavity</Figure.Caption>
                        </Figure>
                        <Figure>
                            <video width="100%" controls>
                                <source src="/cuhk-trs/videos/topics/topic2/Media3-1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <Figure.Caption>MRI-compatible soft fluid-driven robot positioned in the larynx through the oral cavity</Figure.Caption>
                        </Figure>
                    </div>
                    <div>
                        <h4>2.4: Image-guided registration and navigation in orthopedic surgery</h4>
                        <p>We have developed a normal-vector-assisted rigid registration method considering isotropic and anisotropic positional uncertainties for human femur model for surgical navigation in orthopedic surgery. We have established the Bayesian coherent point drift framework that considers uncertainties with both positional and normal vectors, which are both generalized to anisotropic level. A two-stage non-rigid point set registration method is then developed, where the normal vectors are utilized in the first stage and the anisotropic uncertainties are considered in both stages. The proposed method can achieve the rotational and translation error values being 1.1 degree and 0.48 mm respectively, under 90% outliers. The superior performance in robustness to noise and outliers outperforms existing state-of-the-art approaches fin robot-assisted orthopedic surgery.</p>
                        <Figure>
                            <Figure.Image src='/cuhk-trs/images/topics/topic2/Picture4.png' />
                            <Figure.Caption>The qualitative results of different algorithms on the femur and pelvis point sets, respectively. </Figure.Caption>
                        </Figure>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Topic2;
