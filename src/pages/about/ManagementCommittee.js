import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

const members = [
    { "initial": "yhliu", "name": "Prof. Liu Yunhui", "url": "http://www3.mae.cuhk.edu.hk/people/list.php?name=yhliu", "title1": "Choh-Ming Li Professor", "title2": "Director, T Stone Robotics Institute, CUHK" },
    { "initial": "jysung", "name": "Prof. Sung Joseph Jao Yiu", "url": "https://aims.cuhk.edu.hk/converis/portal/Person/5001905?auxfun=&lang=en_GB", "title1": "Dean and Distinguished University Professor, Lee Kong Chian School of Medicine, NYU", "title2": "" },
    { "initial": "qhmeng", "name": "Prof. Meng Max Qing Hu", "url": "http://www.ee.cuhk.edu.hk/en-gb/people/academic-staff/chairman/30-prof-qing-hu-max-meng", "title1": "Chair Professor, Electronic & Electrical Engineering, SUSTech", "title2": "" },
    { "initial": "wychiu", "name": "Prof. Chiu Philip Wai Yan", "url": "http://www.med.cuhk.edu.hk/eng/about_us/faculty_management/Deanery/InstitutionalAffairs/philip_chiu.jsp", "title1": "Professor, Department of Surgery, CUHK", "title2": "" },
    { "initial": "dsun", "name": "Prof. Sun Dong", "url": "http://www.cityu.edu.hk/mbe/medsun/", "title1": "Secretary for Innovation, Technology and Industry, Innovation, Technology and Industry Bureau, HKSAR Government", "title2": "" },
    { "initial": "kwkwok", "name": "Prof. Kwok Ka Wai", "url": "http://hub.hku.hk/cris/rp/rp01924", "title1": "Professor, Mechanical and Automation Engineering, CUHK", "title2": "" },
    { "initial": "cftong", "name": "Prof. Tong Michael Chi Fai", "url": "http://www.ent.cuhk.edu.hk/staff-profiles/professor-tong-chi-fai-michael", "title1": "Professor and Chairman, Otorhinolaryngology, Head and Neck Surgery, CUHK", "title2": "" },
    { "initial": "kwau", "name": "Prof. Au Samuel Kwok Wai", "url": "http://www.mae.cuhk.edu.hk/people/list.php?name=samuelau", "title1": "Associate Professor, Mechanical and Automation Engineering, CUHK", "title2": "" },
    { "initial": "paheng", "name": "Prof. Heng Pheng Ann", "url": "http://www.cse.cuhk.edu.hk/~pheng/", "title1": "Professor, Computer Science & Engineering, CUHK", "title2": "" },
    { "initial": "thcheung", "name": "Dr. Cheung Tak Hong", "url": "http://www.obg.cuhk.edu.hk/cheung-tak-hong1/", "title1": "Consultant, Gynecology, CUHK", "title2": "" },
]

function ManagementCommittee() {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <h5>About</h5>
                    <ul>
                        <li><Link to='/welcome-message'>Welcome Message</Link></li>
                        <li><Link to='/about-us'>About Us</Link></li>
                        <li><Link to='/abstract'>Abstract</Link></li>
                        <li><Link to='/mission-goals'>Mission & Goals</Link></li>
                        <li><Link to='/management-committee'>Management Committee</Link></li>
                    </ul>
                </Col>
                <Col md={8}>
                    <h3>Management Committee</h3>
                    {members.map((member, i) =>
                        <Row key={"member_" + i.toString()}>
                            <Col md={4}>
                                <Link to={member.url}>
                                    <Image
                                        src={'./images/prof/' + member.initial + '.jpg'}
                                        alt={member.initial} title={member.initial}
                                        className='float-end'
                                    />
                                </Link>
                            </Col>
                            <Col md={8}>
                                <p>
                                    <Link to={member.url}>{member.name}</Link>
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
