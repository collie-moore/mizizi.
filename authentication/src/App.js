import React from 'react';
import './App.css';
import Login from './mysign';
import Navbar0 from'./myNavbar';
import Sign from './signup';



function App() {
  return (
    <div className="App">
  <Navbar0 />
  <br />
     <Login />
     <br />
     <Sign />
    </div>
  );
}

export default App;
