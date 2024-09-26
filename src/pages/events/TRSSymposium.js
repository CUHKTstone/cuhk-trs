import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';

const figureContent = [
    { "src": "TRSymposium1.jpg", "caption": "Prof. Tim LÜTH, Technische Universität München, Germany" },
    { "src": "TRSymposium2.jpg", "caption": "Prof. Paolo FIORINI, University of Verona, Italy" },
    { "src": "TRSymposium7.jpg", "caption": "Prof. Danail STOYANOV, University College London, United Kingdom" },
    { "src": "TRSymposium6.jpg", "caption": "Dr. Christos BERGELES, King's College London, United Kingdom" },
    { "src": "TRSymposium3.jpg", "caption": "Prof. Kai XU, Shanghai Jiao Tong University, China" },
    { "src": "TRSymposium8.jpg", "caption": "Prof. Shijie GUO, Hebei University of Technology, China" },
    { "src": "TRSymposium9.jpg", "caption": "Prof. Ka Wai KWOK, The University of Hong Kong" },
    { "src": "TRSymposium11.jpg", "caption": "Mr. Salvatore VIRGA, Technische Universität München, Germany " },
    { "src": "TRSymposium21.jpg", "caption": "Dr. Yueming JIN, The Chinese University of Hong Kong" },
    { "src": "TRSymposium20.jpg", "caption": "Dr. Zhe MIN, The Chinese University of Hong Kong" },
    { "src": "TRSymposium13.jpg", "caption": "" },
    { "src": "TRSymposium12.jpg", "caption": "" },
]

function TRSSymposium() {
    return (
        <Container>
            <Row>
                <h1>TRS Symposium 2019</h1>
                <p>
                    Event   : TRS Symposium 2019 - Image-guided Automatic Robotic Surgery<br />
                    Date    : 9 November, 2019 (Saturday)<br />
                    Time    : 9:00 a.m. - 5:30 p.m.<br />
                    Venue  : LT1, G/F, Yasumoto International Academic Park (YIA), The Chinese University of Hong Kong
                </p>
                <p>This symposium provided a forum for researchers in medical robotics to share their latest results, and to explore synergies and research collaboration opportunities on all aspects of surgical robotics. The symposium convened esteemed researchers from The Chinese University of Hong Kong, The University of Hong Kong, City University of Hong Kong, Technische Universität München, University of Verona, Shanghai Jiao Tong University, Hebei University of Technology, and so forth.  It included talks, and lab tours to enrich discussions among attendees about the most recent innovations and trends in the field.</p>
                <Image src="./images/trs-symposium-2019/TRS-symposium.jpg" />
                <Image src="./images/trs-symposium-2019/TRSymposium4.jpg" />
            </Row>
            <Row>
                {figureContent.map((content, index) => (
                    <Col md={6}>
                        <Figure>
                            <Figure.Image src={"./images/trs-symposium-2019/" + content.src} />
                            <Figure.Caption>{content.caption}</Figure.Caption>
                        </Figure>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default TRSSymposium;
