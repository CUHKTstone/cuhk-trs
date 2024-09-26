import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-light py-3">
            <Container>
                <Row>
                    <Col className="text-end">
                        <p>
                            <a href='http://www.cuhk.edu.hk/'>CUHK</a>&nbsp;|&nbsp;
                            <a href='http://ri.cuhk.edu.hk/'>T Stone Robotics Institute</a>&nbsp;|&nbsp;
                            <a href='/privacy'>Privacy</a>&nbsp;|&nbsp;
                            <a href='/discliamer'>Discliamer</a>&nbsp;|&nbsp;
                            <a href='/contact'>Contact Us</a>
                        </p>
                        <p>Copyright © 2024 T Stone Robotics Institute, The Chinese University of Hong Kong. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
