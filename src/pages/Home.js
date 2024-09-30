import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const carouselInfo = [
    { "src": "/cuhk-trs/images/gallery/icra-2024-yokohama/Picture1.jpg", "alt": "ICRA 2024", "url": "/gallery/icra-2024-yokohama/" },
    { "src": "/cuhk-trs/images/gallery/icra-2024-yokohama/Picture2.jpg", "alt": "ICRA 2024", "url": "/gallery/icra-2024-yokohama/" },
    { "src": "/cuhk-trs/images/gallery/icra-2023-london/Picture1.jpg", "alt": "ICRA 2023", "url": "/gallery/icra-2023-london/" }
]

function Home() {
    return (
        <Container>
            <Row className="justify-content-center">
                <Carousel className="w-75">
                    {carouselInfo.map((item, i) =>
                        <Carousel.Item key={i}>
                            <Image
                                src={item.src}
                                className="d-block w-100"
                                style={{ height: '70vh', objectFit: 'contain' }}
                                alt={item.alt}
                            />
                        </Carousel.Item>
                    )}
                </Carousel>
            </Row>
            <Row>
                <h3 className='mt-5'>Welcome Message</h3>
                <p>
                    Welcome to the homepage of the research project “Image-guided Automatic Robotic Surgery”, which is funded by the Research Grants Committee, Hong Kong University Grants Committee of the Hong Kong Special Administrative Region, under the Theme-based Research Scheme (Eighth round, 2018/19). Our team, which complies of expertise in engineering and medicine from local universities and internationally renowned institutions, is pleased to present our research output on this website with regards to surgical robotics in Hong Kong.
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
