import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function Subtopic({ content, subTopicCount }) {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <h5>Subtopics</h5>
                    <ul>
                        <li><Link to='/project-overview'>Project Overview</Link></li>
                        {Array.from({ length: subTopicCount }, (_, index) => (
                            <li><Link to={'/subtopic-' + (index + 1).toString()}>{"Subtopic " + (index + 1).toString()}</Link></li>
                        ))}
                    </ul>
                </Col>
                <Col md={8}>
                    <h3>{content.title}</h3>
                    <p>{"PI: " + content.pi}<br />{"CO-PI: " + content['co-pi']}</p>
                    <p>{content.description}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Subtopic;