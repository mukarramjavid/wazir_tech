import React from "react";
import { Navbar, Nav, Container,Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        {" "}
        <NavLink className="navbar-brand" to="/">
          Wazir Tech
        </NavLink>
        <Navbar.Toggle
          className="navbar_Collapse"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavLink
              activeClassName="hoverEffect"
              className="nav-link"
              to="/service"
              exact
            >
              Services
            </NavLink>
            <NavLink
              activeClassName="hoverEffect"
              className="nav-link"
              to="/about"
            >
              About
                
            </NavLink>
            <NavLink
              activeClassName="hoverEffect"
              className="nav-link"
              to="/contact"
            >
              Contact <Badge pill variant="info">
    New
  </Badge>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
