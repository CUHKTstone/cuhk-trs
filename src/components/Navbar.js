import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'; // To integrate with React Router

function NavigationBar() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Image-guided Automatic Robotic Surgery</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Brand href="http://www.cuhk.edu.hk" title="CUHK">
                            <img src="./images/Icon_cuhk.png" alt="CUHK" />
                        </Navbar.Brand>
                        <Navbar.Brand href="http://www.hku.hk" title="HKU">
                            <img src="./images/Icon_hku.png" alt="HKU" />
                        </Navbar.Brand>
                        <Navbar.Brand href="https://www.cityu.edu.hk/" title="CityU">
                            <img src="./images/Icon_cityu.png" alt="CITYU" />
                        </Navbar.Brand>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar bg="light" expand="lg" className="pb-4">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto justify-content-center w-100">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/news">
                                <Nav.Link>News</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/welcome-message">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/project-overview">
                                <Nav.Link>Subtopics</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/events">
                                <Nav.Link>Events</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/publicity">
                                <Nav.Link>Publicity</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/tech-transfer">
                                <Nav.Link>Tech Transfer</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/project-introduction">
                                <Nav.Link>Project Introduction</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/pi-introduction">
                                <Nav.Link>PI Introduction</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/journal-papers">
                                <Nav.Link>Journal Papers</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/conference-papers">
                                <Nav.Link>Conference Papers</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/trs-symposium-2019">
                                <Nav.Link>TRS Symposium 2019</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <Nav.Link>Contact</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;
