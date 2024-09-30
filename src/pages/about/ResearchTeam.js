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
            { "initial": "yhliu", "name": "Prof. Liu Yunhui", "email": "yhliu@mae.cuhk.edu.hk", "title1": "Choh-Ming Li Professor", "title2": "Director, T Stone Robotics Institute, CUHK" }
        ]
    },
    {
        "role": "Co-Principal Investigator (Co-PI)",
        "member": [
            { "initial": "jysung", "name": "Prof. Sung Joseph Jao Yiu", "email": "josephsung@ntu.edu.sg", "title1": "Dean and Distinguished University Professor, Lee Kong Chian School of Medicine, NYU", "title2": "" },
            { "initial": "qhmeng", "name": "Prof. Meng Max Qing Hu", "email": "mengqh@sustech.edu.cn", "title1": "Chair Professor, Electronic and Electrical Engineering, SUSTech", "title2": "" },
            { "initial": "wychiu", "name": "Prof. Chiu Philip Wai Yan", "email": "philipchiu@cuhk.edu.hk", "title1": "Professor, Department of Surgery, CUHK", "title2": "" },
            { "initial": "jhuang", "name": "Prof. Huang Jie", "email": "jhuang@mae.cuhk.edu.hk", "title1": "Choh-Ming Li Professor", "title2": "Mechanical and Automation Engineering, CUHK" },
            { "initial": "dsun", "name": "Prof. Sun Dong", "email": "medsun@cityu.edu.hk", "title1": "Secretary for Innovation, Technology and Industry, Innovation, Technology and Industry Bureau, HKSAR Government", "title2": "" },
            { "initial": "kwkwok", "name": "Prof. Kwok Ka Wai", "email": "kwokkw@mae.cuhk.edu.hk", "title1": "Professor, Mechanical and Automation Engineering, CUHK", "title2": "" },
            { "initial": "cftong", "name": "Prof. Tong Michael Chi Fai", "email": "mtong@cuhk.edu.hk", "title1": "Professor and Chairman, Otorhinolaryngology, Head and Neck Surgery, CUHK", "title2": "" },
            { "initial": "kwau", "name": "Prof. Au Samuel Kwok Wai", "email": "samuelau@cuhk.edu.hk", "title1": "Associate Professor, Mechanical and Automation Engineering, CUHK", "title2": "" },
            { "initial": "whliao", "name": "Prof. Liao Wei Hsin", "email": "whliao@mae.cuhk.edu.hk", "title1": "Professor and Chairman, Mechanical and Automation Engineering, CUHK", "title2": "" },
            { "initial": "yyam", "name": "Prof. Yam Yeung", "email": "yyam@mae.cuhk.edu.hk", "title1": "Research Professor, Mechanical and Automation Engineering, CUHK", "title2": "" },
            { "initial": "paheng", "name": "Prof. Heng Pheng Ann", "email": "pheng@cse.cuhk.edu.hk", "title1": "Professor, Computer Science & Engineering, CUHK", "title2": "" },
            { "initial": "thcheung", "name": "Dr. Cheung Tak Hong", "email": "thcheung@cuhk.edu.hk", "title1": "Consultant, Gynecology, CUHK", "title2": "" },
        ]
    },
    {
        "role": "Co-Investigator (Co-I)",
        "member": [
            { "initial": "xli", "name": "Prof. Li Xiang", "email": "xiangli@tsinghua.edu.cn", "title1": "Associate Professor, Automation, Tsinghua University", "title2": "" },
            { "initial": "ykchan", "name": "Prof. Chan Jason Ying Kuen", "email": "jasonchan@ent.cuhk.edu.hk", "title1": "Assistant Professor, Otorhinolaryngology, Head and Neck Surgery, CUHK", "title2": "" },
            { "initial": "zwang", "name": "Prof. Wang Zerui", "email": "zerui.j.wang@gmail.com", "title1": "Co-founder, Cornerstone Robotics Limited", "title2": "" },
            { "initial": "cgreiffenhagen", "name": "Prof. Greiffenhagen Christian", "email": "christian.greiffenhagen@polyu.edu.hk", "title1": "Associate Professor of Sociology, Applied Social Sciences, PolyU", "title2": "" },
        ]
    },
    {
        "role": "Collaborator",
        "member": [
            { "initial": "rhtaylor", "name": "Prof. Taylor Russell H.", "email": "rht@jhu.edu", "title1": "Professor, Computer Science, Johns Hopkins University", "title2": "" },
            { "initial": "gyang", "name": "Prof. Yang Guangzhong", "email": "gzyang@sjtu.edu.cn", "title1": "Founding Dean, Institute of Medical Robotics, Shanghai Jiao Tong University", "title2": "" },
            { "initial": "jsorger", "name": "Dr. Sorger Jonathan", "email": "jonathan.sorger@intusurg.com", "title1": "Vice President, Medical Research, Intuitive Surgical", "title2": "" },
            { "initial": "nbradly", "name": "Prof. Nelson Bradly", "email": "bnelson@ethz.ch", "title1": "Professor, Mechanical & Process Engineering, ETH Zürich", "title2": "" },
            { "initial": "pfiorini", "name": "Prof. Fiorini Paolo", "email": "paolo.fiorini@univr.it", "title1": "Professor, Computer Science, University of Verona", "title2": "" },
        ]
    },
]

function ResearchTeam() {
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
                    <h3>About Us</h3>
                    {members.map((role, i) =>
                        <div key={"role_" + i.toString()}>
                            <h5>{role.role}</h5>
                            {role.member.map((member, j) =>
                                <Row key={"role_" + i.toString() + "_member_" + j.toString()}>
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
                                            <Link to={"mailto:" + member.email}>{member.name}</Link><br />
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

export default ResearchTeam;
