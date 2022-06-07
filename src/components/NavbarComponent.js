import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import images from "../assets/images";

export const NavbarComponent = () => {
  return (
    <Navbar className="shadow" bg="dark" expand="lg" variant="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand href="/" alt="logo">
          <img src={images.LogoNav} className="navbar-logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto"></Nav>
           <NavDropdown className="btn btn-primary dropleft" title="Registration" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/signup">Registrate company</NavDropdown.Item>
          <NavDropdown.Item href="/employed-create">Registrate employs</NavDropdown.Item>
          </NavDropdown>
          <Nav className="my-4 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#home">
              <Link to="/" className="text-decoration-none text-secondary">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="/#about">About</Nav.Link>
            <Nav.Link href="/#prices">Prices</Nav.Link>
            <Nav.Link href="/#team">Team</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

