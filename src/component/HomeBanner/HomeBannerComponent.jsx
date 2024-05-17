import React from 'react';
import style from './HomeBanner.module.css'
import { Container } from 'react-bootstrap';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { MdAddIcCall } from "react-icons/md";

function HomeBannerComponent(props) {
    return (
        <>
            <section className="sectionDefaultMargin">
                <div className={style.homeBannerContainer + ""}>
                    <Container className="" >
                        <div className={style.bannerContentWrapper}>
                            <p className={style.heroTitleTop}>Hi, my name is</p>
                            <p className={style.heroTitle + " py-0 my-0"}>Muhammad Sabbir</p>
                            <p className={style.heroSecondTitle + " py-0 my-0"}>I build things for the web.</p>
                            <p className={style.heroDescription}>I&apos;m a full-stack web developer based in Dhaka, Bangladesh specializing in building (and occasionally designing) exceptional, high-quality websites and applications.</p>

                            <div className={style.headerSocialWrapper}>
                                <a target="_blank" href="https://www.facebook.com/g.shanto18" className={style.headerSocialLink}><FaFacebookF /></a>
                                <a target="_blank" href="https://www.linkedin.com/in/muhammad-sabbir-hossain/" className={style.headerSocialLink}><FaLinkedinIn /></a>
                                <a target="_blank" href="mailto:g.shanto18@gmail.com" className={style.headerSocialLink}><BiLogoGmail /></a>
                                <a target="_blank" href="whatsapp://send?&phone=8801789096018" className={style.headerSocialLink}><FaWhatsapp /></a>
                                <a target="_blank" href="tel:8801521396944" className={style.headerSocialLink}><MdAddIcCall /></a>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
}

export default HomeBannerComponent;