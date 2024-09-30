import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-light py-3">
            <Container>
                <Row>
                    <Col className="text-end">
                        <p>
                            <Link to='http://www.cuhk.edu.hk/'>CUHK</Link>&nbsp;|&nbsp;
                            <Link to='http://ri.cuhk.edu.hk/'>T Stone Robotics Institute</Link>&nbsp;|&nbsp;
                            <Link to='/privacy'>Privacy</Link>&nbsp;|&nbsp;
                            <Link to='/discliamer'>Discliamer</Link>&nbsp;|&nbsp;
                            <Link to='/contact'>Contact Us</Link>
                        </p>
                        <p>Copyright © 2024 T Stone Robotics Institute, The Chinese University of Hong Kong. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
