import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

function News({ content, newsYearList }) {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <h5>News</h5>
                    <ul>
                        {newsYearList.map((year, index) => (
                            <li key={"news-" + year.toString()}>
                                <Link to={'/news-' + year.toString()}>{"News " + year.toString()}</Link>
                            </li>
                        ))}
                    </ul>
                </Col>
                <Col md={8}>
                    <h3>{"News " + content.year.toString()}</h3>
                    {content.news.length === 0 ?
                        (<p>Coming soon...</p>) :
                        content.news.map((news, index) => (
                            <Row>
                                <Col md={5}>
                                    <Link to={news.url}>
                                        <Image src={news.img} className="w-100" />
                                    </Link>
                                </Col>
                                <Col md={7}>
                                    <p><Link to={news.url} style={{ "color": "black", "textDecoration": "none" }}>{news.date}</Link></p>
                                    <p>{news.title}</p>
                                </Col>
                            </Row>
                        ))
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default News;