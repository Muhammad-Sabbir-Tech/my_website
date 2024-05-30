"use client"
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import style from "./HomeAboutStyle.module.css";
import { GoDatabase } from "react-icons/go";
import { SiExpress } from "react-icons/si";
import { FaNodeJs, FaArrowCircleRight } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";

function HomeAbout(props) {
    return (
        <>
            <section className="aboutSection">
                <Container>
                    <Row className="">
                        {/* image */}
                        <Col md={6} lg={5} className="mb-5 mb-md-0">
                            <h1 className="sectionHeaderTitle d-md-none text-center mb-4">ABOUT ME</h1>
                            <img className="img-fluid" src='/images/aboutImage.png' />
                        </Col>
                        {/* about content */}
                        <Col md={6} lg={7} className="d-flex flex-column align-items-start justify-content-between">
                                <h4>ABOUT ME</h4>
                                <h1><span style={{ color: "rgb(30, 234, 166)" }} className="">I am</span> Muhammad Asbbir Hossain</h1>
                                <p>I am a Professional Web Developer, having 4+ years of experience in Web Designing & Development. I have Practical Knowledge about developing Responsive, Dynamic & Attractive WebSites Or Web-Based Applications. I have Worked on Small projects to Large Scale Websites and Application Locally, and abroad. I am very passionate and dedicated to my work. Contact Me if you need any further information or any help. Here are a few technologies I&apos;ve been working with recently:</p>

                                <ul>
                                    <li> <GoDatabase /> Mongo DB | MySQL</li>
                                    <li> <SiExpress /> Express JS | Nest JS</li>
                                    <li> <FaReact /> React JS | Next JS</li>
                                    <li> <FaNodeJs /> Node js</li>
                                </ul>

                            <Button className="readMore">Read More <FaArrowCircleRight /></Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default HomeAbout;