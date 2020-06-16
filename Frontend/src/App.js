import React from 'react';
import './App.css';
import Cards from './Components/mizizCards';
import Example from './Components/myCard';
import Footer from './Components/myFooter';
import Navbar0 from './Components/myNavbar';

function App() {
 
  return (
  <div className="App">
    <Navbar0 />
    <br>
    </br>
    <Example/>
    <br>
    </br>
    <Cards /> 
    <br>
    </br>
    < Footer/>
    </div> 
  );
}
export default App;
