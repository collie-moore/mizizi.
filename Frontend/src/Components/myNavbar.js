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
          <Nav style={{ color: 'black' }} className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/"><h3 style={{ color: 'black' }}>About Us </h3></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href= ""><h3 style={{ color: 'black' }}>Services</h3></NavLink>
            </NavItem>
            <NavbarText><h3 style={{ color: 'black' }}>Accurate info...here...now </h3></NavbarText>
            
          </Nav>
          <div className="nav justify-content-center">
                 
                  <li className="nav-item">
                  <a className="nav-link" aria-label="Mizizi on twitter" rel="noopener" href="https://twitter.com/TeamMizizi?s=09" title="Twitter">
                    <svg id="twitter-logo" height="28" data-name="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
                      <rect width="400" height="400" fill="none"/>
                      <path d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23" fill="#fff"/>
                    </svg>
                  </a>
                  </li>
               </div>
               
        </Collapse>
      </Navbar>
    </div>
    </div>
  );
}

export default Navbar0;