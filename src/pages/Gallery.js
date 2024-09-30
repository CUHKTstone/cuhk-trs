import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import { Link } from "react-router-dom";

function Gallery({ contents, event }) {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <h5>Meetings and Workshops</h5>
                    <ul>
                        {contents.map((content, i) => (
                            <li key={i}>
                                <Link to={'/gallery/' + content.root}>{content.title}</Link>
                            </li>
                        ))}
                    </ul>
                </Col>
                <Col md={8}>
                    <h3>{event.title}</h3>
                    <Row>
                        {event.images.map((image, i) => (
                            <Col key={i} md={6}>
                                <Figure>
                                    <Figure.Image src={"/cuhk-trs/images/gallery/" + event.root + "/" + image.filename} className="w-100" />
                                    <Figure.Caption>{image.caption}</Figure.Caption>
                                </Figure>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Gallery;