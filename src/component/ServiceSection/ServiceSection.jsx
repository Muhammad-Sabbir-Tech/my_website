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
                                <Col md={6} className="mb-3">
                                    <Card className="h-100">
                                        <Card.Body>
                                            <div className="text-center pb-3 pt-4">
                                                <img style={{ height: "120px" }} src='/images/designAndDevelopment.png' />
                                            </div>
                                            <div className="text-center pb-4">
                                                <h4 className="fw-bold">Website design & development</h4>
                                                <p className="px-0 px-md-5">Design or Develop Website as Per Your Requiremnts from Scrach or Existing Design Templets</p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} className="mb-3">
                                    <Card className="h-100">
                                        <Card.Body>
                                            <div className="text-center pb-3 pt-4">
                                                <img style={{ height: "120px" }} src='/images/webApplication.png' />
                                            </div>
                                            <div className="text-center pb-4">
                                                <h4 className="fw-bold">Web application development</h4>
                                                <p className="px-0 px-md-5">Develop High Secured and Professional Web Application / Software as Per Your Requiremnts </p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} className="mb-3">
                                    <Card className="h-100">
                                        <Card.Body>
                                            <div className="text-center pb-3 pt-4">
                                                <img style={{ height: "120px" }} src='/images/bugFix.png' />
                                            </div>
                                            <div className="text-center pb-4">
                                                <h4 className="fw-bold">Bug Fixes</h4>
                                                <p className="px-0 px-md-5">Fix any Bugs Related to PHP , MySQL , Laravel , CSS , JS</p>
                                            </div>
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