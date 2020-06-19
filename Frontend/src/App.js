import React from 'react';
import './App.css';
import Cards from './Components/mizizCards';
import Example from './Components/myCard';
import Footer from './Components/myFooter';
import Navbar0 from './Components/myNavbar';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import FirstAid from './Components/firstAid';
function App() {
 
  return (
    <Router>
      <div className="App">
    <Navbar0 />
    <br>

    </br>
    
    <Example/>
    <br>
    </br>
    <Cards /> 
   
   <br></br>
   <Switch >
     <Route path="/firstAid" component={FirstAid} />
   </Switch>
    <br>
    </br>
    < Footer/>
    
    
    
    </div> 
    </Router>
  
  );
}
export default App;
