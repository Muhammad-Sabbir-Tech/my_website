"use client"
import React from 'react';
import { Container } from 'react-bootstrap';
import style from "./TechSectionStyle.module.css"

function TechSection(props) {
    return (
        <>
            <Container className="sectionDefaultMargin">
                <h1 className="sectionHeaderTitle text-center mb-4">Technology</h1>
                <div className="d-flex align-items-center justify-content-center flex-wrap">
                    <div className={style.techItem + " m-3"} >
                        <div className={style.techItemImg}>
                            <img className="img-fluid" src="/images/nodejs.svg" />
                        </div>
                        <hr className="pt-0 mt-0" />
                        <p className="text-center">NODEJS</p>
                    </div>

                    <div className={style.techItem + " m-3"} >
                        <div className={style.techItemImg}>
                            <img className="img-fluid" src="/images/expressjs.svg" />
                        </div>
                        <hr className="pt-0 mt-0" />
                        <p className="text-center">EXPRESSJS</p>
                    </div>

                    <div className={style.techItem + " m-3"} >
                        <div className={style.techItemImg}>
                            <img className="img-fluid" src="/images/nestjs.svg" />
                        </div>
                        <hr className="pt-0 mt-0" />
                        <p className="text-center">NESTJS</p>
                    </div>

                    <div className={style.techItem + " m-3"} >
                        <div className={style.techItemImg}>
                            <img className="img-fluid" src="/images/mysql.svg" />
                        </div>
                        <hr className="pt-0 mt-0" />
                        <p className="text-center">MYSQL</p>
                    </div>

                    <div className={style.techItem + " m-3"} >
                        <div className={style.techItemImg}>
                            <img className="img-fluid" src="/images/mongodb.svg" />
                        </div>
                        <hr className="pt-0 mt-0" />
                        <p className="text-center">MONGO DB</p>
                    </div>

                    <div className={style.techItem + " m-3"} >
                        <div className={style.techItemImg}>
                            <img className="img-fluid" src="/images/sequelize.svg" />
                        </div>
                        <hr className="pt-0 mt-0" />
                        <p className="text-center">SEQUELIZE</p>
                    </div>

                    <div className={style.techItem + " m-3"} >
                        <div className={style.techItemImg}>
                            <img className="img-fluid" src="/images/mongoose.svg" />
                        </div>
                        <hr className="pt-0 mt-0" />
                        <p className="text-center">MONGOOSE</p>
                    </div>

                    <div className={style.techItem + " m-3"} >
                        <div className={style.techItemImg}>
                            <img className="img-fluid" src="/images/typescript.svg" />
                        </div>
                        <hr className="pt-0 mt-0" />
                        <p className="text-center">TYPESCRIPT</p>
                    </div>

                    <div className={style.techItem + " m-3"} >
                        <div className={style.techItemImg}>
                            <img className="img-fluid" src="/images/react.svg" />
                        </div>
                        <hr className="pt-0 mt-0" />
                        <p className="text-center">REACTJS</p>
                    </div>

                    <div className={style.techItem + " m-3"} >
                        <div className={style.techItemImg}>
                            <img className="img-fluid" src="/images/nextjs.svg" />
                        </div>
                        <hr className="pt-0 mt-0" />
                        <p className="text-center">NEXTJS</p>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default TechSection;