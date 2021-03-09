import { MDBNavbarNav } from "mdbreact";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function NavTabs() {
  return (
    <Navbar className="mr-3 ml-3" expand="lg">
      <Navbar.Brand  href="#home" style={{fontSize:"30px", color:"black"}}>Mia Dilberovic</Navbar.Brand>
      <MDBNavbarNav right>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" style={{fontSize:"25px", color:"black"}}>Home</Nav.Link>
          <Nav.Link href="/about" style={{fontSize:"25px", color:"black"}}>About Me</Nav.Link>
          <Nav.Link href="/work" style={{fontSize:"25px", color:"black"}}>Work</Nav.Link>
          <Nav.Link href="/contact" style={{fontSize:"25px", color:"black"}}>Contact</Nav.Link>
          <Nav.Link href="/art" style={{fontSize:"25px", color:"black"}}>Art</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </MDBNavbarNav>
    </Navbar>
  );
}
export default NavTabs;
