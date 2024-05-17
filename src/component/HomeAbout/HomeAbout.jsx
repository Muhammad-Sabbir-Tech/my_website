"use client"
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import style from "./HomeAboutStyle.module.css"
import { BiCaretRight, BiChevronRight, BiRightArrow } from 'react-icons/bi';
import AboutSectionPlaceHolder from '@/src/common_app_component/Placeholders/AboutSectionPlaceHolder';

function HomeAbout(props) {
    return (
        <>
            <section className={style.homeAboutWrapper + " sectionDefaultMargin"}>
                <Container>
                    <Row className="">
                        {/* image */}
                        <Col md={6} lg={5} className="mb-5 mb-md-0">
                            <h1 className="sectionHeaderTitle d-md-none text-center mb-4">ABOUT ME</h1>
                            <img className="img-fluid" src='/images/aboutImage.png' />
                        </Col>
                        {/* about content */}
                        <Col md={6} lg={7} className="d-flex flex-column align-items-start justify-content-between">
                            <div className="w-100">
                                <h1 className="sectionHeaderTitle d-none d-md-block">ABOUT ME</h1>
                                <h3><span style={{ color: "rgb(30, 234, 166)" }} className="">I AM</span> MUHAMMAD SABBIR HOSSAIN</h3>
                                <p className={style.aboutDescription}>I am a Professional Web Developer, having 4+ years of experience in Web Designing & Development. I have Practical Knowledge about developing Responsive, Dynamic & Attractive WebSites Or Web-Based Applications. I have Worked on Small projects to Large Scale Websites and Application Locally, and abroad. I am very passionate and dedicated to my work. Contact Me if you need any further information or any help. Here are a few technologies I&apos;ve been working with recently:</p>

                                <ul className={style.aboutList}>
                                    <li>⮞ Mongo DB | MySQL</li>
                                    <li>⮞ Express JS | Nest JS</li>
                                    <li>⮞ React JS | Next JS</li>
                                    <li>⮞ Node js</li>
                                </ul>
                            </div>
                            <Button className="mt-4">Read more..</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default HomeAbout;