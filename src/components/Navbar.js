import React from "react";
import images from "../assets/images";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Form, Button, NavDropdown, Card } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar className="shadow" bg="dark" expand="lg" variant="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand href="/" alt="logo">
          <img src={images.LogoNav} className="navbar-logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto"></Nav>
          <Nav className="my-4 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#action1">
              <Link to="/" className="text-decoration-none text-secondary">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#">Profile</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Button variant="primary">
              <Link to="/signup" className="text-white text-decoration-none">
                Registration
              </Link>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
