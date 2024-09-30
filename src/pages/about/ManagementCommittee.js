import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

const members = [
    { "initial": "yhliu", "name": "Prof. Liu Yunhui", "email": "yhliu@mae.cuhk.edu.hk", "title1": "Choh-Ming Li Professor", "title2": "Director, T Stone Robotics Institute, CUHK" },
    { "initial": "jysung", "name": "Prof. Sung Joseph Jao Yiu", "email": "josephsung@ntu.edu.sg", "title1": "Dean and Distinguished University Professor, Lee Kong Chian School of Medicine, NYU", "title2": "" },
    { "initial": "qhmeng", "name": "Prof. Meng Max Qing Hu", "email": "mengqh@sustech.edu.cn", "title1": "Chair Professor, Electronic & Electrical Engineering, SUSTech", "title2": "" },
    { "initial": "wychiu", "name": "Prof. Chiu Philip Wai Yan", "email": "philipchiu@cuhk.edu.hk", "title1": "Professor, Department of Surgery, CUHK", "title2": "" },
    { "initial": "dsun", "name": "Prof. Sun Dong", "email": "medsun@cityu.edu.hk", "title1": "Secretary for Innovation, Technology and Industry, Innovation, Technology and Industry Bureau, HKSAR Government", "title2": "" },
    { "initial": "kwkwok", "name": "Prof. Kwok Ka Wai", "email": "kwokkw@mae.cuhk.edu.hk", "title1": "Professor, Mechanical and Automation Engineering, CUHK", "title2": "" },
    { "initial": "cftong", "name": "Prof. Tong Michael Chi Fai", "email": "mtong@cuhk.edu.hk", "title1": "Professor and Chairman, Otorhinolaryngology, Head and Neck Surgery, CUHK", "title2": "" },
    { "initial": "kwau", "name": "Prof. Au Samuel Kwok Wai", "email": "samuelau@cuhk.edu.hk", "title1": "Associate Professor, Mechanical and Automation Engineering, CUHK", "title2": "" },
    { "initial": "paheng", "name": "Prof. Heng Pheng Ann", "email": "pheng@cse.cuhk.edu.hk", "title1": "Professor, Computer Science & Engineering, CUHK", "title2": "" },
    { "initial": "thcheung", "name": "Dr. Cheung Tak Hong", "email": "thcheung@cuhk.edu.hk", "title1": "Consultant, Gynecology, CUHK", "title2": "" },
]

function ManagementCommittee() {
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
                    <h3>Management Committee</h3>
                    {members.map((member, i) =>
                        <Row key={"member_" + i.toString()}>
                            <Col md={4}>
                                <Link to={"mailto:" + member.email}>
                                    <Image
                                        src={'./images/prof/' + member.initial + '.jpg'}
                                        alt={member.initial} title={member.initial}
                                        className='float-end'
                                    />
                                </Link>
                            </Col>
                            <Col md={8}>
                                <p>
                                    <Link to={"mailto:" + member.email}>{member.name}</Link>
                                    <strong>{member.initial === "yhliu" ? " (Chairperson)" : ""}</strong><br />
                                    {member.title1}<br />
                                    {member.title2}
                                </p>
                            </Col>
                        </Row>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default ManagementCommittee;
