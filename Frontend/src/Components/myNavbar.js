
import React from 'react';
import './myNavbar.css'
import SettingsMenu from './logo';

function Nav() {

  return (
    <div>
      <nav className='nav'>
      <h3>Mizizi</h3>
        <ul className="nav-link">
          <SettingsMenu />
        </ul>
      </nav>
    
    </div>
  );
}

export default Nav;