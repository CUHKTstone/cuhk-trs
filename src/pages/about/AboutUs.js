import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

const members = [
    {
        "role": "Project Coorindater (PC)",
        "member": [
            { "initial": "yhliu", "name": "Prof. Liu Yunhui", "url": "http://www3.mae.cuhk.edu.hk/people/list.php?name=yhliu", "title1": "Choh-Ming Li Professor", "title2": "Director, T Stone Robotics Institute, CUHK" }
        ]
    },
    {
        "role": "Co-Principal Investigator (Co-PI)",
        "member": [
            { "initial": "jysung", "name": "Prof. Sung Joseph Jao Yiu", "url": "https://aims.cuhk.edu.hk/converis/portal/Person/5001905?auxfun=&lang=en_GB", "title1": "Dean and Distinguished University Professor, Lee Kong Chian School of Medicine, NYU", "title2": "" },
            { "initial": "qhmeng", "name": "Prof. Meng Max Qing Hu", "url": "http://www.ee.cuhk.edu.hk/en-gb/people/academic-staff/chairman/30-prof-qing-hu-max-meng", "title1": "Chair Professor, Electronic and Electrical Engineering, SUSTech", "title2": "" },
            { "initial": "wychiu", "name": "Prof. Chiu Philip Wai Yan", "url": "http://www.med.cuhk.edu.hk/eng/about_us/faculty_management/Deanery/InstitutionalAffairs/philip_chiu.jsp", "title1": "Professor, Department of Surgery, CUHK", "title2": "" },
            { "initial": "jhuang", "name": "Prof. Huang Jie", "url": "http://www.mae.cuhk.edu.hk/~jhuang/", "title1": "Choh-Ming Li Professor", "title2": "Mechanical and Automation Engineering, CUHK" },
            { "initial": "dsun", "name": "Prof. Sun Dong", "url": "http://www.cityu.edu.hk/mbe/medsun/", "title1": "Secretary for Innovation, Technology and Industry, Innovation, Technology and Industry Bureau, HKSAR Government", "title2": "" },
            { "initial": "kwkwok", "name": "Prof. Kwok Ka Wai", "url": "http://hub.hku.hk/cris/rp/rp01924", "title1": "Professor, Mechanical and Automation Engineering, CUHK", "title2": "" },
            { "initial": "cftong", "name": "Prof. Tong Michael Chi Fai", "url": "http://www.ent.cuhk.edu.hk/staff-profiles/professor-tong-chi-fai-michael", "title1": "Professor and Chairman, Otorhinolaryngology, Head and Neck Surgery, CUHK", "title2": "" },
            { "initial": "kwau", "name": "Prof. Au Samuel Kwok Wai", "url": "http://www.mae.cuhk.edu.hk/people/list.php?name=samuelau", "title1": "Associate Professor, Mechanical and Automation Engineering, CUHK", "title2": "" },
            { "initial": "whliao", "name": "Prof. Liao Wei Hsin", "url": "http://www.mae.cuhk.edu.hk/~whliao/", "title1": "Professor and Chairman, Mechanical and Automation Engineering, CUHK", "title2": "" },
            { "initial": "yyam", "name": "Prof. Yam Yeung", "url": "http://www3.mae.cuhk.edu.hk/people/list.php?name=yyam", "title1": "Research Professor, Mechanical and Automation Engineering, CUHK", "title2": "" },
            { "initial": "paheng", "name": "Prof. Heng Pheng Ann", "url": "http://www.cse.cuhk.edu.hk/~pheng/", "title1": "Professor, Computer Science & Engineering, CUHK", "title2": "" },
            { "initial": "thcheung", "name": "Dr. Cheung Tak Hong", "url": "http://www.obg.cuhk.edu.hk/cheung-tak-hong1/", "title1": "Consultant, Gynecology, CUHK", "title2": "" },
        ]
    },
    {
        "role": "Co-Investigator (Co-I)",
        "member": [
            { "initial": "xli", "name": "Prof. Li Xiang", "url": "http://www.mae.cuhk.edu.hk/people/list.php?name=xiangli", "title1": "Associate Professor, Automation, Tsinghua University", "title2": "" },
            { "initial": "ykchan", "name": "Prof. Chan Jason Ying Kuen", "url": "http://www.ent.cuhk.edu.hk/staff-profiles/dr-chan-ying-kuen-jason", "title1": "Assistant Professor, Otorhinolaryngology, Head and Neck Surgery, CUHK", "title2": "" },
            { "initial": "zwang", "name": "Prof. Wang Zerui", "url": "http://www.wangzerui.com/", "title1": "Co-founder, Cornerstone Robotics Limited", "title2": "" },
            { "initial": "cgreiffenhagen", "name": "Prof. Greiffenhagen Christian", "url": "http://www.cuhk.edu.hk/soc/GREIFFENHAGEN_Christian.html", "title1": "Assistant Professor, Sociology, CUHK", "title2": "" },
        ]
    },
    {
        "role": "Collaborator",
        "member": [
            { "initial": "rhtaylor", "name": "Prof. Taylor Russell H.", "url": "https://www.cs.jhu.edu/~rht/", "title1": "Professor, Computer Science, Johns Hopkins University", "title2": "" },
            { "initial": "gyang", "name": "Prof. Yang Guangzhong", "url": "http://www.ent.cuhk.edu.hk/staff-profiles/dr-chan-ying-kuen-jason", "title1": "Founding Dean, Institute of Medical Robotics, Shanghai Jiao Tong University", "title2": "" },
            { "initial": "jsorger", "name": "Dr. Sorger Jonathan", "url": "https://www.linkedin.com/in/jonathan-sorger-81560", "title1": "Vice President, Medical Research, Intuitive Surgical", "title2": "" },
            { "initial": "nbradly", "name": "Prof. Nelson Bradly", "url": "http://www.msrl.ethz.ch/the-lab/team/Brad_Nelson.html", "title1": "Professor, Mechanical & Process Engineering, ETH Zürich", "title2": "" },
            { "initial": "pfiorini", "name": "Prof. Fiorini Paolo", "url": "http://profs.sci.univr.it/~fiorini/", "title1": "Professor, Computer Science, University of Verona", "title2": "" },
        ]
    },
]

function AboutUs() {
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
                    <h3>About Us</h3>
                    {members.map((role, i) =>
                        <div key={"role_" + i.toString()}>
                            <h5>{role.role}</h5>
                            {role.member.map((member, j) =>
                                <Row key={"role_" + i.toString() + "_member_" + j.toString()}>
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
                                            <Link to={member.url}>{member.name}</Link><br />
                                            {member.title1}<br />
                                            {member.title2}
                                        </p>
                                    </Col>
                                </Row>
                            )}
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default AboutUs;
