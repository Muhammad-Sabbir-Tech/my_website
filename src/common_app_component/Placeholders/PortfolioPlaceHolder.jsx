import React from 'react';
import { Card, Col, Placeholder, Row } from 'react-bootstrap';

function PortfolioPlaceHolder(props) {
    return (
        <>
            <Row>
                <Col md={6} lg={3} className="mb-3">
                    <Card className="h-100">
                        <Card.Body>
                            <Placeholder as="h1" className="w-100" animation="glow">
                                <Placeholder style={{ height: "180px" }} xs={12} />
                            </Placeholder>

                            <Placeholder as="h4" animation="glow">
                                <Placeholder xs={12} />
                            </Placeholder>
                            <Placeholder as="p" animation="glow">
                                <Placeholder xs={12} />
                                <Placeholder xs={12} />
                            </Placeholder>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-3">
                    <Card className="h-100">
                        <Card.Body>
                            <Placeholder as="h1" className="w-100" animation="glow">
                                <Placeholder style={{ height: "180px" }} xs={12} />
                            </Placeholder>

                            <Placeholder as="h4" animation="glow">
                                <Placeholder xs={12} />
                            </Placeholder>
                            <Placeholder as="p" animation="glow">
                                <Placeholder xs={12} />
                                <Placeholder xs={12} />
                            </Placeholder>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-3">
                    <Card className="h-100">
                        <Card.Body>
                            <Placeholder as="h1" className="w-100" animation="glow">
                                <Placeholder style={{ height: "180px" }} xs={12} />
                            </Placeholder>

                            <Placeholder as="h4" animation="glow">
                                <Placeholder xs={12} />
                            </Placeholder>
                            <Placeholder as="p" animation="glow">
                                <Placeholder xs={12} />
                                <Placeholder xs={12} />
                            </Placeholder>
                        </Card.Body>
                    </Card>
                </Col>
                 <Col md={6} lg={3} className="mb-3">
                    <Card className="h-100">
                        <Card.Body>
                            <Placeholder as="h1" className="w-100" animation="glow">
                                <Placeholder style={{ height: "180px" }} xs={12} />
                            </Placeholder>

                            <Placeholder as="h4" animation="glow">
                                <Placeholder xs={12} />
                            </Placeholder>
                            <Placeholder as="p" animation="glow">
                                <Placeholder xs={12} />
                                <Placeholder xs={12} />
                            </Placeholder>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default PortfolioPlaceHolder;