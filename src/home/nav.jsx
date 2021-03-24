import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <div className="sticky">
        <Navbar
          collapseOnSelect
          expand="lg"
          fixed="top"
          bg="dark"
          variant="dark"
        >
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/Program">About</Nav.Link>
              {/* <Nav.Link href="/Design">Skills</Nav.Link> */}
              <Nav.Link href="/Hobbie">Project</Nav.Link>
              {/* <Nav.Link href="/Gallery">Gallery</Nav.Link> */}
              <Nav.Link href="/Contact">Contact</Nav.Link>
              {/* <Nav.Link href="https://matias.ma/nsfw/">Trust Me</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Menu;
