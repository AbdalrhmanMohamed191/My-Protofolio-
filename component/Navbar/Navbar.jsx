import React from "react";
import {
  Navbar as BNavbar,
  Button,
  Container,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return ( 
    <BNavbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        {/* Brand */}
        <BNavbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-4 text-primary"
        >
          Proto<span className="text-light">folio</span>
        </BNavbar.Brand>

        <BNavbar.Toggle aria-controls="navbar-nav" />

        <BNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-2">
            {/* Public Links */}
            <Nav.Link as={Link} to="/" className="fw-semibold">
              Home
            </Nav.Link>

            <Nav.Link href="#about" className="fw-semibold">
              About
            </Nav.Link>

            <Nav.Link href="#projects" className="fw-semibold">
              Projects
            </Nav.Link>

            <Nav.Link href="#contact" className="fw-semibold">
              Contact
            </Nav.Link>

            
          </Nav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
};
