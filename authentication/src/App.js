import React from 'react';
import './App.css';
import Login from './mysign';
import Navbar0 from'./myNavbar';
import Sign from './signup';
import Pass from './reset.js';

function App() {
 
  return (
    <div className="App">
  <Navbar0 />
  <br />
     <Login />
     <br />
     <Sign />
    <br />
    <Pass />
     </div>
  );
}

export default App;
