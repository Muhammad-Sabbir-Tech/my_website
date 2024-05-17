"use client"
import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { IoCallSharp, IoLocationSharp, IoMailOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import style from './ContactStyle.module.css'

function ContactSection(props) {
    return (
        <>
            <Container className="sectionDefaultMargin">
                <h1 className="sectionHeaderTitle text-center mb-4">Contact</h1>
                <Row>
                    <Col lg={7} className="mb-3">
                        <Card className="h-100">
                            <Card.Body>
                                <div className="px-md-3 py-4">
                                    <h4 className="text-muted fw-bold pb-3">SEND MESSAGE</h4>
                                    <hr className="pb-4 mb-0" />
                                    <Form >
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    {/* <Form.Label>Name</Form.Label> */}
                                                    <Form.Control size='lg' type="text" placeholder="Enter name" />
                                                </Form.Group>
                                            </Col>

                                            <Col md={6}>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    {/* <Form.Label>Email</Form.Label> */}
                                                    <Form.Control size='lg' type="text" placeholder="Enter email" />
                                                </Form.Group>
                                            </Col>

                                            <Col md={12}>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    {/* <Form.Label>Message</Form.Label> */}
                                                    <Form.Control size='lg' as="textarea" rows={6} placeholder="Enter message" />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Button variant="primary" className="w-100 btn-lg" type="submit">
                                            Send
                                        </Button>
                                    </Form>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={5}>
                        <Card>
                            <Card.Body>
                                <div className="px-MD-3 py-4">
                                    <h4 className="text-muted fw-bold pb-3">GET IN TOUCH WITH ME</h4>
                                    <hr className="pb-4 mb-0" />
                                    <div className="mb-4">
                                        <IoMailOutline style={{ fontSize: "30px" }} className="text-muted me-3" />
                                        <a target="_blank" className="text-muted text-decoration-none" href="mailto:g.shanto18@gmail.com" style={{ fontSize: "20px" }}>g.shanto18@gmail.com</a>
                                    </div>

                                    <div className="mb-4">
                                        <IoIosLink style={{ fontSize: "30px" }} className="text-muted me-3" />
                                        <a target="_blank" href="//www.sabbirinfo.com" className="text-muted text-decoration-none" style={{ fontSize: "20px" }}>www.sabbirinfo.com</a>
                                    </div>

                                    <div className="mb-4 d-flex">
                                        <IoLocationSharp style={{ fontSize: "30px" }} className="text-muted me-3" />
                                        <div>
                                            <a className="text-muted text-decoration-none" style={{ fontSize: "20px" }}>Moddho Katia, Satkhira Sadar, Satkhira, Khulna, Bangladesh.</a>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <IoCallSharp style={{ fontSize: "30px" }} className="text-muted me-3" />
                                        <a className="text-muted text-decoration-none" target="_blank" href="tel:8801521396944" style={{ fontSize: "20px" }}>8801521396944</a>
                                    </div>

                                    <div className="mb-4">
                                        <FaWhatsapp style={{ fontSize: "30px" }} className="text-muted me-3" />
                                        <a target="_blank" href="whatsapp://send?&phone=8801789096018" className="text-muted text-decoration-none" style={{ fontSize: "20px" }}>8801789096018</a>
                                    </div>

                                    <h4 className="text-muted fw-bold mt-5 pb-3">SOCIAL MEDIA</h4>
                                    <hr className="pb-4 mb-0" />
                                    <div className="d-flex align-items-center justify-content-center">
                                        <a target="_blank" href="https://www.facebook.com/g.shanto18" className={style.headerSocialLink}><FaFacebookF /></a>
                                        <a target="_blank" href="https://www.linkedin.com/in/muhammad-sabbir-hossain/" className={style.headerSocialLink}><FaLinkedinIn /></a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ContactSection;