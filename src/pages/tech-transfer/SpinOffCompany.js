import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const companyInfo = [
  {
    "name": "Cornerstone",
    "introduction": "Cornerstone Robotics (CSR) is a company dedicated to forging the accessibility of robotic surgery and high-quality medical services to patients in China and worldwide. Cornerstone aims to enhance the accessibility of robotic surgery by focusing on cost, safety, usability, and surgical indication coverage across urology, gynecology, and general surgery. They will demonstrate the system’s efficacy through testing stages including phantom models, animal/cadaver studies, and clinical trials. Additionally, the comprehensive commercialization strategy will facilitate market introduction in Hong Kong, Mainland China, and globally, structured around three main pillars:",
    "points": [
      "Clinical (validation protocol, pre-clinical trial design and implementation, design, and execution of clinical trial)",
      "Regulatory (technical documentation, CE marking pathway).",
      "Marketing (conferences and exhibitions, public relations)."
    ],
    "link": "https://www.csrbtx.com/",
    "video": "cornerstone"
  },
  {
    "name": "Agilis",
    "introduction": "Agilis Robotics is committed to transforming endoluminal surgery with our highly miniaturized and flexible robotic instruments. They further developed the flexible instruments invented in the project to the world-thinnest flexible robot for endoluminal surgical procedures. The robot is to empower surgeons to easily and intuitively remove cancers in both the urinary tract and the gastrointestinal tract – all without any external incisions.",
    "points": [],
    "link": "https://www.agilisrobotics.com/",
    "video": "agilis"
  }
]

function SpinOffCompany() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <h5>Technology Transfer</h5>
          <ul>
            <li><Link to='/patent'>Patent</Link></li>
            <li><Link to='/spin-off-company'>Spin-off Companies</Link></li>
          </ul>
        </Col>
        <Col md={8}>
          <h3>Spin-off Companies</h3>
          {companyInfo.map((company, i) => (
            <div key={i}>
              <h4>{company.name}</h4>
              <p>{company.introduction}
                <ol>
                  {company.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ol>
              </p>
              <p>
                <strong>Website link: </strong>
                <Link to={company.link}>{company.link}</Link>
              </p>
              <video className="mb-4" width="100%" height="400" controls>
                <source src={"./videos/spin-off-companies/" + company.video + ".mp4"} type="video/mp4" /> {/* Update the path */}
                Your browser does not support the video tag.
              </video>
            </div>
          )
          )}
          {/* <ol>
            {companyInfo.map((company, i) =>
              <li key={i} className='pb-4'>
                {'"' + item.title + '"'}<br />
                {item.details.map((detail, j) =>
                  <span key={j}>{detail}<br /></span>
                )}
                {item.research_translation !== "" ? "Research Translation: " + item.research_translation : ""}
              </li>
            )}
          </ol> */}
        </Col>
      </Row>
    </Container>
  );
}

export default SpinOffCompany;