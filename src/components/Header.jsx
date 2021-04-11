import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { isMobile, isTablet } from 'react-device-detect';

const Header = () => {
    if (isMobile || isTablet) {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Iwan Jones</Navbar.Brand>
                </Navbar>
                <Nav className="mobileNav">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <Nav.Link href="#link">Projects</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                </Nav>
            </>
        )
    } else {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#home">Iwan Jones</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Projects</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Header
