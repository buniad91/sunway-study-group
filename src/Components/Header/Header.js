import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import AboutUS from '../About US/about us/AboutUS';
import { Link } from 'react-router-dom';
import WhySSG from '../About US/why ssg/WhySSG';
import MissionVision from '../About US/mission & vission/MissionVision';

const Header = () => {
    return (
        <div>
            <div></div>
            <BrowserRouter>
                <div>
                    <Navbar className="nav-bg" expand="lg">
                        <Container>
                            <Navbar.Brand href="#home"><img className="logo" src="https://i.ibb.co/XxzXZFN/Whats-App-Image-2021-12-05-at-8-06-48-PM.jpg" alt="Whats-App-Image-2021-12-05-at-8-06-48-PM" border="0" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" className="xyz" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Link className="Nav-bar" to="/home">Home</Link>

                                    <NavDropdown title="About Us" id="basic-nav-dropdown">
                                        <Link className="Nav-bar company-dropdown" to="/about">About Us</Link> <br />
                                        <Link className="Nav-bar company-dropdown" to="/whyssg">Why SSG ?</Link> <br />
                                        <Link className="Nav-bar company-dropdown" to="/missionvision">Mission & Vision</Link> <br />
                                    </NavDropdown>

                                    <NavDropdown title="Scholarship" id="basic-nav-dropdown">
                                        <Link className="Nav-bar company-dropdown" to="/about">About Us</Link> <br />
                                        <Link className="Nav-bar company-dropdown" to="/whyssg">Why SSG ?</Link> <br />
                                        <Link className="Nav-bar company-dropdown" to="/missionvision">Mission & Vision</Link> <br />
                                    </NavDropdown>

                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="home" element={<Home />} />
                    <Route exact path="about" element={<AboutUS />} />
                    <Route exact path="whyssg" element={<WhySSG />} />
                    <Route exact path="missionvision" element={<MissionVision />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Header;