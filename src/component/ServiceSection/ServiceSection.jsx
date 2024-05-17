"use client"
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

function ServiceSection(props) {
    return (
        <>
            <Container className="sectionDefaultMargin">
                <h1 className="sectionHeaderTitle text-center mb-4">Services</h1>
                <Row>
                    <Col md={4} className="mb-3">
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

                    <Col md={4} className="mb-3">
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

                    <Col md={4} className="mb-3">
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
            </Container>
        </>
    );
}

export default ServiceSection;