import React from "react";
import { Navbar, Nav, ButtonGroup, Button, NavDropdown } from "react-bootstrap";
import "./Navbar.scss";

const Navigation = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">MAGBANK</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#cartao">Cartão</Nav.Link>
        <Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
        <Nav.Link href="#faq">Faq</Nav.Link>
      </Nav>
      <ButtonGroup aria-label="Basic example">
        <Button variant="outline-secondary">
          <NavDropdown title="Acessar minha conta" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Button>
        <Button variant="outline-secondary">Abra sua conta</Button>
      </ButtonGroup>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
