import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const contactInfo = [
    { "name": "Miss Elizabeth Ko", "post": "Centre Manager", "phoneNo": "3943-9873", "email": "pyko@cuhk.edu.hk" },
    { "name": "Miss Coco Cheung", "post": "Executive Officer", "phoneNo": "3943-0815", "email": "cocohtcheung@cuhk.edu.hk" }
]

function Contact() {
    return (
        <Container>
            <Row>
                <h3>Contact</h3>
                {contactInfo.map((item, i) =>
                    <p key={"contact" + i.toString()}>
                        <strong>{item.name}</strong><br />
                        {item.post}<br />
                        Email: <a href={"mailto:" + item.email}>{item.email}</a>
                    </p>
                )}
                {/* <p>Address: 2/F, Academic Bldg No. 1,  The Chinese University of Hong Kong, Shatin</p> */}
            </Row>
        </Container>
    );
}

export default Contact;
