import React, { Component } from 'react'
import Corona from "./Components/navbar/Navbar";
import SignUp from './Components/SignUp'
import About from './Components/About'
import Footer from './Components/myFooter'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GlobalStyle from './styles/Global';
import Login from './Components/LogIn';
import MyCard from './Components/myCard';
import Cards from './Components/mizizCards';
import Covid19 from './Components/Covid19';


class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <Router>
       <>
        <Corona
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />
        <Switch>
        <Route path="/Home" exact component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="./GoogleApiWrapper" component={Covid19}/>
          <Route path="/Login" component={Login}/>
          <Route path="/SignUp" component={SignUp}/>
        </Switch>
       <Footer/>
        
      </>
      </Router>
    
    )
  }
}
const Home=()=>(
  <div>
 <MyCard/>
 <Cards/>
  </div>
);

export default App