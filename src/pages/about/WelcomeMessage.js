import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

function WelcomeMessage() {
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
                    <h3>Welcome Message</h3>
                    <p>
                        Welcome to the homepage of the research project “Image-guided Automatic Robotic Surgery”, which is funded by the Research Grants Committee, Hong Kong University Grants Committee of the Hong Kong Special Administrative Region, under the Theme-based Research Scheme (Eighth round, 2018/19). The objective of this project is to establish a world-class research center in surgical robotics in Hong Kong by forming an interdisciplinary team with the necessary expertise in engineering and medicine from local universities, and collaborating with internationally-respected institutions. The research team is comprised of more than 20 from The Chinese University of Hong Kong, The University of Hong Kong, City University of Hong Kong, Intuitive Surgical Inc., Imperial College London, Johns Hopkins University, and others.
                    </p>
                    <p className="text-end">
                        <Image src="./images/yhliu-150x150.jpg" style={{"width": 100, "height": 100}}/><br/>
                        <strong>
                            Prof. Yunhui LUI<br/>
                            Project Coordinator<br/>
                            Director, T Stone Robotics Institute, The Chinese University of Hong Kong
                        </strong>
                    </p>


                    <h4>About Prof. Yunhui LUI</h4>
                    <p>
                        Professor Yunhui Liu is Choh-Ming Li Professor of Mechanical and Automation Engineering at the Faculty of Engineering. He is also a Visiting Professor of Harbin Institute of Technology; a ChangJiang Professor of the National University of Defense Technology (NUDT), and a Visiting Professor at Beijing Institute of Technology. He is the director of CUHK T Stone Robotics Institute and the director of the Joint Center for Intelligent Sensing and Systems of CUHK and NUDT.
                    </p>
                    <p>
                        Professor Liu is a scholar in robotics and automation. His research interests include vision-based robotics, medical robotics, service robots, and machine intelligence. In vision-based robotics, he and his team are making efforts in integrating computer vision with robotic systems and applying the technology to autonomous driving of industrial vehicles, robotic grasping, and image-based automated robotic surgery. Their work led to two start-up companies: VisionNav Robotics Limited and SmartEye Tech Limited. In medical robotics, his work is focused on the development of surgical robots that can help surgeons side-by-side in supportive tasks or automate surgical steps in robotic surgery. The assistive surgical robots developed by his group for sinus surgery and hysterectomy have undergone clinical trials at the Prince of Wales Hospital. His group is also developing robotic systems for construction and logistics industries.
                    </p>
                    <p>
                        Professor Liu has published over 300 papers in refereed journals and conference proceedings and was listed in the Highly Cited Authors (Engineering) by Thomson Reuters in 2013. The Ph.D. students supervised by him have become faculty members of universities in USA, Canada, UK, Hong Kong and the Mainland China. Professor Liu has received numerous research awards from international journals and conferences and government agencies. His research is widely fund by Hong Kong RGC, ITF, NSFC, the national strategic development grant, etc.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default WelcomeMessage;
