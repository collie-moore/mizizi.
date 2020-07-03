
import React from 'react';
import './myNavbar.css'
import SettingsMenu from './logo';

import {  Navbar,  NavbarBrand, } from 'reactstrap';
 
const Nav = (props) => {
 
 
  return (
    <div>
      <Navbar className="nav" light>
        <NavbarBrand href="/" className="mr-auto"><h3><strong>Mizizi</strong></h3></NavbarBrand>
        <ul className="nav-link">
          <SettingsMenu />
        </ul>
      </Navbar>
    </div>
  );
}
 
export default Nav;