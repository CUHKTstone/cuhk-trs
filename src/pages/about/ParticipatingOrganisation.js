import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

const organisations = [
    { "abbreviation": "cuhk", "name": "The Chinese University of Hong Kong" },
    { "abbreviation": "hku", "name": "University of Hong Kong" },
    { "abbreviation": "cityu", "name": "City University of Hong Kong" },
    { "abbreviation": "hopkins", "name": "Johns Hopkins University" },
    { "abbreviation": "imperial", "name": "Imperial College of London" },
    { "abbreviation": "eth", "name": "ETH Zurich" },
    { "abbreviation": "uofverona", "name": "University of Verona" },
    { "abbreviation": "surgical", "name": "Intuitive Surgical" },
    { "abbreviation": "cornerstone", "name": "CornerStone Robotics Limited" },
]

function ParticipatingOrganisation() {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <h5>About</h5>
                    <ul>
                        <li><Link to='/project-introduction'>Project Introduction</Link></li>
                        <li><Link to='/research-team'>Research Team</Link></li>
                        <li><Link to='/participating-organisation'>Participating Organisation</Link></li>
                        <li><Link to='/management-committee'>Management Committee</Link></li>
                        <li><Link to='/advisory-committee'>Advisory Committee</Link></li>
                    </ul>
                </Col>
                <Col md={8}>
                    <h3>Participating Organisation</h3>
                    {organisations.map((organisation, i) =>
                        <Row key={i}>
                            <Col md={4}>
                                <Image
                                    src={'/cuhk-trs/images/organisations/' + organisation.abbreviation + '.jpg'}
                                    className='float-end'
                                    style={{"height": "40px"}}
                                    alt={organisation.abbreviation} title={organisation.abbreviation}
                                />
                            </Col>
                            <Col md={8}>
                                <p><strong>{organisation.name}</strong></p>
                            </Col>
                        </Row>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default ParticipatingOrganisation;
