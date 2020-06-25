
import React from 'react';
import './App.css';
import Cards from './Components/mizizCards';
import Footer from './Components/myFooter';
import Navbar0 from './Components/myNavbar';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Covid19 from './Components/Covid19';
import FindChemist from './Components/FindChemist';
import SymptomChecker from './Components/SymptomsChecker';
import MyCard from './Components/myCard';
import FirstAid from './Components/firstAid';
import SignUp from './Components/signupmodal';
import About from './Components/About';

function App() {
 
  return (
    <div className="App">
        <Router>
          <Navbar0 />
            <Switch >
              <Route path="/" exact component={Home} />
              <Route path="/About" component={About} />
              <Route path="/FirstAid" component={FirstAid} />
              <Route path="/Covid19" component={Covid19} />
              <Route path="/SymptomChecker" component={SymptomChecker}/>
              <Route path="/FindChemist" component={FindChemist} />
              <Route path="/signup" component={SignUp} />
              <Route path="/FindChemist" component={FindChemist} />
            </Switch>
          < Footer/>
        </Router>
    </div> 
   
  
  );
}

const Home =()=>(
  <div>
    <MyCard/>
    <Cards />   
  </div>
)

export default App;
