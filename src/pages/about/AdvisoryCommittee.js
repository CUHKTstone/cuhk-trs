import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

const members = [
    {
        "initial": "tfukuda",
        "name": "Toshio Fukuda (Chairman)",
        "title": "Professor",
        "affiliation": "Department of Mechatronics Engineering, Meijo University"
    },
    {
        "initial": "okhatib",
        "name": "Oussama Khatib",
        "title": "Professor",
        "affiliation": "Department of Computer Science, Stanford University"
    },
    {
        "initial": "pkazanzides",
        "name": "Peter Kazanzides",
        "title": "Research Professor",
        "affiliation": "Department of Computer Science, Johns Hopkins University"
    },
    {
        "initial": "mtomizuka",
        "name": "Masayoshi Tomizuka",
        "title": "Cheryl and John Neerhout, Jr. Distinguished Professor, Professor",
        "affiliation": "Mechanical Engineering, University of California, Berkeley"
    },
    {
        "initial": "pdario",
        "name": "Paolo Dario",
        "title": "Professor",
        "affiliation": "The BioRobotics Institute, Scuola Superiore Sant'Anna"
    },
    {
        "initial": "jzhao",
        "name": "Jie Zhao",
        "title": "Professor",
        "affiliation": "Harbin Institute of Technology"
    },
    {
        "initial": "rvhillegersberg",
        "name": "Richard van Hillegersberg",
        "title": "Professor, Dr.",
        "affiliation": "Department of Surgical Oncology, UMC Utrecht"
    },
    {
        "initial": "lswanstrom",
        "name": "Lee Swanstrom",
        "title": "Clinical Professor",
        "affiliation": "Surgery, Oregon Health and Sciences University"
    },
    {
        "initial": "hwu",
        "name": "Hao Wu",
        "title": "Professor",
        "affiliation": "Shanghai Jiao Tong University"
    },
    {
        "initial": "ydwang",
        "name": "Yu Dong Wang",
        "title": "Professor",
        "affiliation": "Shanghai Jiao Tong University"
    },
    {
        "initial": "sdimaio",
        "name": "Simon DiMaio",
        "title": "Dr.",
        "affiliation": "Intuitive Surgical"
    },
    {
        "initial": "ayoung",
        "name": "Andrew Young",
        "title": "Ir.",
        "affiliation": "Sino Land Company Limited"
    }
]

function AdvisoryCommittee() {
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
                    <h3>Advisory Committee</h3>
                    {members.map((member, i) =>
                        <Row key={i}>
                            <Col md={4}>
                                <Image
                                    src={'./images/prof/' + member.initial + '.jpg'}
                                    alt={member.initial} title={member.initial}
                                    className='float-end'
                                />
                            </Col>
                            <Col md={8}>
                                <p>
                                    <Link to={"mailto:" + member.email}>{member.name}</Link><br />
                                    {member.title}<br />
                                    {member.affiliation}
                                </p>
                            </Col>
                        </Row>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default AdvisoryCommittee;
