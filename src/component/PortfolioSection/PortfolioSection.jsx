"use client"
import React from 'react';
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap';
import style from "./PortfolioStyle.module.css"
import Link from 'next/link';
import PortfolioPlaceHolder from '@/src/common_app_component/Placeholders/PortfolioPlaceHolder';

function PortfolioSection(props) {
    const description = "Introducing the Bulk Sender App, your comprehensive solution for streamlined communication. Effortlessly manage contacts and groups, sending personalized SMS to individuals or entire groups. Choose between standard or dynamic SMS options, ensuring your messages resonate with recipients. With features like group messaging and customizable dynamic fields, the Bulk Sender App caters to your diverse communication needs. Stay informed with detailed delivery reports, tracking message counts and sender numbers for efficient communication management."
    return (
        <>
            <Container className="sectionDefaultMargin">
                <h1 className="sectionHeaderTitle text-center mb-4">Portfolio</h1>
                <Row>
                    <Col md={6} lg={3}>
                        <Card className="h-100">
                            <Card.Body>
                                <div className={style.portfolioImageContainer}>
                                    <img className="img-fluid" src="/images/portfolio3.png" />
                                </div>
                                <div>
                                    <Link href={"/"}><h4 className="fw-bold  text-muted">Shop Management</h4></Link>
                                    <Badge bg="warning me-1">Node JS</Badge>
                                    <Badge bg="warning me-1">MySQL</Badge>
                                    <Badge bg="warning me-1">Express JS</Badge>
                                    <Badge bg="warning me-1">Sequelize</Badge>
                                    <Badge bg="warning me-1">React JS</Badge>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={3}>
                        <Card className="h-100">
                            <Card.Body>
                                <div className={style.portfolioImageContainer}>
                                    <img className="img-fluid" src="/images/portfolio.png" />
                                </div>
                                <div>
                                    <Link href={"/"}><h4 className="fw-bold  text-muted">School Management</h4></Link>
                                    <Badge bg="warning me-1">Node JS</Badge>
                                    <Badge bg="warning me-1">MySQL</Badge>
                                    <Badge bg="warning me-1">Express JS</Badge>
                                    <Badge bg="warning me-1">Nest JS</Badge>
                                    <Badge bg="warning me-1">Sequelize</Badge>
                                    <Badge bg="warning me-1">React JS</Badge>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={3}>
                        <Card className="h-100">
                            <Card.Body>
                                <div className={style.portfolioImageContainer}>
                                    <img className="img-fluid" src="/images/portfolio2.png" />
                                </div>
                                <div>
                                    <Link href={"/"}><h4 className="fw-bold  text-muted">Bulk Sender</h4></Link>
                                    <Badge bg="warning me-1">Node JS</Badge>
                                    <Badge bg="warning me-1">MySQL</Badge>
                                    <Badge bg="warning me-1">Express JS</Badge>
                                    <Badge bg="warning me-1">Sequelize</Badge>
                                    <Badge bg="warning me-1">React JS</Badge>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={3}>
                        <Card className="h-100">
                            <Card.Body>
                                <div className={style.portfolioImageContainer}>
                                    <img className="img-fluid" src="/images/portfolio.png" />
                                </div>
                                <div>
                                    <Link href={"/"}><h4 className="fw-bold  text-muted">Task Manager</h4></Link>
                                    <Badge bg="warning me-1">Node JS</Badge>
                                    <Badge bg="warning me-1">MySQL</Badge>
                                    <Badge bg="warning me-1">Express JS</Badge>
                                    <Badge bg="warning me-1">Sequelize</Badge>
                                    <Badge bg="warning me-1">React JS</Badge>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div className="text-center">
                    <Button className="mt-4">Show more</Button>
                </div>
            </Container>
        </>
    );
}

export default PortfolioSection;