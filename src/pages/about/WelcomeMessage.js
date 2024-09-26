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
                        Professor Yun-hui Liu received a B. Eng. degree in Applied Dynamics from the Beijing Institute of Technology, an M. Eng. degree in Mechanical Engineering from Osaka University, and a Ph.D. degree in Applied Mathematics from the University of Tokyo in 1992. After working at the National Electrotechnical Laboratory of Japan as a Research Scientist, he joined The Chinese University of Hong Kong (CUHK) in 1995 and is currently Choh-Ming Li Professor of Mechanical and Automation Engineering, the Director of the CUHK T Stone Robotics Institute, and the Director of Hong Kong Centre for Logistics Robotics funded by the InnoHK clusters. 
                    </p>
                    <p>
                        He has published more than 500 papers in refereed journals and conference proceedings and was listed in the Highly Cited Authors (Engineering) by Thomson Reuters in 2013. His research interests include vision-based robotics, machine intelligence, and their applications in manufacturing, logistics, healthcare, and construction. Prof. Liu has received numerous research awards from international journals and international conferences in robotics and automation and government agencies. In recent years, he has been actively transferring robotics technologies developed at university labs to industries, and founded or co-founded VisionNav Robotics, CornerStone Robotics, and Zanecon Robotics. He was the Editor-in-Chief of Robotics and Biomimetics and served as an Associate Editor of the IEEE TRANSACTION ON ROBOTICS AND AUTOMATION. He is Fellow of IEEE, HKAES, IEEE and HKIE.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default WelcomeMessage;
