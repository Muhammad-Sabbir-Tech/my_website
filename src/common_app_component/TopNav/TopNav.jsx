"use client"
import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import style from './TopNavStyle.module.css'
import { FaBarsProgress } from 'react-icons/fa6';

function TopNav(props) {
    return (
        <>
            <Navbar fixed="top" collapseOnSelect expand="lg" className={style.topNavContainer}>
                <Container>
                    <Navbar.Brand href="#home" className="text-white">
                        {/* React-Bootstrap */}
                        <img style={{height:"50px"}} src='/images/logo.png'/>
                    </Navbar.Brand>
                    <Navbar.Toggle className="text-white" aria-controls="responsive-navbar-nav" >
                        <FaBarsProgress />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#features" className="text-white">About</Nav.Link>
                            <Nav.Link href="#pricing" className="text-white">Service</Nav.Link>
                            <Nav.Link href="#pricing" className="text-white">Portfolio</Nav.Link>
                            <Nav.Link href="#pricing" className="text-white">Contact-us</Nav.Link>
                        </Nav>
                        <Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default TopNav;