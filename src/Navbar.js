import React, { useState, useEffect, Component } from "react";
import {Navbar, Nav, NavDropdown, Form, Button, FormControl} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';

function NavbarComp(props) {
  return (
    <>
      <Navbar className="pt-4" expand="lg">
        <div className="container">
          <Navbar.Brand href="#home">Auxillium</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="mr-2" href="#home">Team</Nav.Link>
              <Nav.Link className="mr-2" href="#link">White paper</Nav.Link>
              <Nav.Link className="mr-2" href="#link">Github</Nav.Link>
              <Nav.Link className="mr-2" href="#link">Community</Nav.Link>
              <Nav.Link className="mr-2" href="#link">Contact</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Button style={{border: "solid white 2px", borderRadius: "6px"}} href="#home" onClick={props.connectAccount}>{props.user ? `${props.user.account.substring(0, 4)}...${props.user.account.slice(-4)}` : "Connect metamask"}</Button>
            </Nav>
          </Navbar.Collapse>
      </div>
    </Navbar>
    </>
  );
}

export default NavbarComp;
