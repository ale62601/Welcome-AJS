import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class Menu2 extends React.Component {
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
          <Navbar.Brand href="/Gallery">Back</Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default Menu2;
