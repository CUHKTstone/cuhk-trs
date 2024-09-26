import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const carouselInfo = [
    { "src": "images/event1.jpg", "alt": "Event 1" },
    { "src": "images/visit1.jpg", "alt": "Visit 1" },
    { "src": "images/visit2.jpg", "alt": "Visit 2" }
]

function Home() {
    return (
        <Container>
            <Row className="justify-content-center">
                <Carousel className="w-75">
                    {carouselInfo.map((item, i) =>
                        <Carousel.Item key={"carousel_img_" + i.toString()}>
                            <Image src={item.src} className="d-block w-100" alt={item.alt} />
                        </Carousel.Item>
                    )}
                </Carousel>
            </Row>
            <Row>
                <h3>Welcome Message</h3>
                <p>
                    Welcome to the homepage of the research project “Image-guided Automatic Robotic Surgery”, which is funded by the Research Grants Committee, Hong Kong University Grants Committee of the Hong Kong Special Administrative Region, under the Theme-based Research Scheme (Eighth round, 2018/19). The objective of this project is to establish a world-class research center in surgical robotics in Hong Kong by forming an interdisciplinary team with the necessary expertise in engineering and medicine from local universities, and collaborating with internationally-respected institutions.
                </p>
                <p className="text-end">
                    Prof. Yunhui LUI<br />
                    Project Coordinator<br />
                    Director, T Stone Robotics Institute, The Chinese University of Hong Kong
                </p>
            </Row>
        </Container>
    );
}

export default Home;
