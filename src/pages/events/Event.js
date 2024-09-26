import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

function Event({ content, eventsYearList }) {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <h5>Events</h5>
                    <ul>
                        {eventsYearList.map((year, index) => (
                            <li key={"events-" + year.toString()}>
                                <Link to={'/events-' + year.toString()}>{"Event " + year.toString()}</Link>
                            </li>
                        ))}
                    </ul>
                </Col>
                <Col md={8}>
                    <h3>{"News " + content.year.toString()}</h3>
                    {content.events.length === 0 ?
                        (<p>Coming soon...</p>) :
                        content.events.map((event, index) => (
                            <Row>
                                <Col md={5}>
                                    <Link to={event.url}>
                                        <Image src={event.img} className="w-100" />
                                    </Link>
                                </Col>
                                <Col md={7}>
                                    <p><Link to={event.url} style={{ "color": "black", "textDecoration": "none" }}>{event.title}</Link></p>
                                    <p>Date: {event.date}<br/>Venue: {event.venue}</p>
                                </Col>
                            </Row>
                        ))
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default Event;