"use client"
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

function ServiceSection(props) {
    return (
        <>
            <section className="serviceSection">
                <Container className="sectionDefaultMargin">

                    <Row>
                        <Col md="5" sm="12" className="solutionTitle">
                            <h4>Solutions</h4>
                            <h2>Custom Website Development Tailored to Your Requirements</h2>
                        </Col>
                        <Col md="7" sm="12">
                            <Row>
                                <Col md={6} className="mb-3 howItWorkBox">
                                    <Card>
                                        <Card.Body>
                                                <img src='/images/cutom-design.svg' />
                                                <h4>Customize Website Design</h4>
                                                <p>Design or Develop Website as Per Your Requiremnts from Scrach or Existing Design Templets</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} className="mb-3 howItWorkBox">
                                    <Card>
                                        <Card.Body>
                                            <img src='/images/developing.svg' />
                                            <h4>Website development</h4>
                                            <p>Design or Develop Website as Per Your Requiremnts from Scrach or Existing Design Templets</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} className="mb-3 howItWorkBox">
                                    <Card>
                                        <Card.Body>
                                            <img src='/images/cutom-design.svg' />
                                            <h4>Application Development</h4>
                                            <p>Develop High Secured and Professional Web Application / Software as Per Your Requiremnts</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} className="mb-3 howItWorkBox">
                                    <Card>
                                        <Card.Body>
                                            <img src='/images/cutom-design.svg' />
                                            <h4>Bug Fixes</h4>
                                            <p>Develop High Secured and Professional Web Application / Software as Per Your Requiremnts</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>





                    </Row>
                </Container>
            </section>
        </>
    );
}

export default ServiceSection;