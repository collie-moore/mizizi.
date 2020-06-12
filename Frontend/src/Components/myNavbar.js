import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import './myNavbar.css'

const Navbar0 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="">
    <div className = "">
      <Navbar outline color="primary">
        <NavbarBrand href="/"><h2 style={{ color: 'black' }}> Mizizi</h2></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/"><h3 style={{ color: 'black' }}>About Us </h3></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href= ""><h3 style={{ color: 'black' }}>Services</h3></NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText><h3 style={{ color: 'black' }}>Accurate info...here...now </h3></NavbarText>
        </Collapse>
      </Navbar>
    </div>
    </div>
  );
}

export default Navbar0;