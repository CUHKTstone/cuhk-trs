import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const patentInfo = [
  {
    "title": "Compliant Safe Joint and Manufacturing Method Thereof",
    "details": [
      "US Patent: US 10,208,806 [Date of Patent: 19 Feb 2019]"
    ],
    "research_translation": ""
  },
  {
    "title": "Systems and Methods for 3D Laparoscopic Surface Reconstruction",
    "details": [
      "US Patent: US 10,839,542 B2 [Date of Patent: 17 Nov 2020]"
    ],
    "research_translation": ""
  },
  {
    "title": "A Robotic Platform to Navigate MRI-guided Focused Ultrasound System",
    "details": [
      "US Provisional Pat.: US 63/159,392 [Filed on 10 Mar 2021]",
      "PCT Pat.: PCT/CN2022/079908 [Filed on 9 Mar 2022]"
    ],
    "research_translation": ""
  },
  {
    "title": "A Steerable Arm For Use In Endoscopic Surgical Procedures",
    "details": [
      "US Provisional Pat.: US 63/141,613 [Filed on 26 Jan 2021]",
      "PCT Pat.: PCT/CN2022/073108 [Filed on 21 Jan 2022]",
      "TW App.: 111102650 [Filed on 21 Jan 2022]"
    ],
    "research_translation": "Prof. K.W. Kwok’s IRIS group developed robotic surgical instrument for endoscopic surgery, of which the IP was protected under a collaboration agreement with Agilis Robotics via the HKU Technology Transfer Office (TTO)."
  },
  {
    "title": "Fluid-driven Robotic Needle Positioner for Image-Guided Percutaneous Interventions",
    "details": [
      "US Provisional Pat.: US 63/053,798 [Filed on 24 Jul 2020]"
    ],
    "research_translation": ""
  },
  {
    "title": "Visual Servoing of An MR-safe Soft Manipulator for Transoral Laser Microsurgeries",
    "details": [
      "US Provisional Pat: US 63/021,692 [Filed on 8 May 2020]"
    ],
    "research_translation": ""
  },
  {
    "title": "Enhanced Magnetic Resonance Imaging Guidance for Robotic Transoral Surgery",
    "details": [
      "US Provisional Pat.: US 62/898,072 [Filed on 10 Sep 2019]"
    ],
    "research_translation": "Prof. K.W. Kwok's IRIS group applied soft robotics in developing a world-first MRI-guided transoral laser therapy, of which the IP was protected under a collaboration agreement with Signate Life Sciences Ltd via the HKU Technology Transfer Office (TTO)."
  },
  {
    "title": "Real-time Surface Shape Sensing for Flexible Structures Using Fiber Bragg Gratings",
    "details": [
      "US Pat.: US 16/449,063 [Filed on 21 Jun 2019]",
      "CN Pat.: CN 201910552110.1 [Filed on 24 Jun 2019]"
    ],
    "research_translation": ""
  },
]

function Patent() {
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
          <h3>Patent</h3>
          <ol>
            {patentInfo.map((item, i) =>
              <li key={i} className='pb-4'>
                {'"' + item.title + '"'}<br />
                {item.details.map((detail, j) =>
                  <span key={j}>{detail}<br /></span>
                )}
                {item.research_translation !== "" ? "Research Translation: " + item.research_translation : ""}
              </li>
            )}
          </ol>
        </Col>
      </Row>
    </Container>
  );
}

export default Patent;