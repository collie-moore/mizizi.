import React, {Component} from 'react';
import Avatar from 'react-avatar';
import './ava.css';
import './myNavbar.css';
//monday

class SettingsMenu extends Component {
    state = {
        open: false,
      };
      handleButtonClick = () => {
        this.setState(state => {
          return {
            open: !state.open,
          };
        });
      };
    
render() {
    return (
      <div className="App">
      <nav className='nav'>
        <h3>Mizizi</h3>
        <ul className="nav-link"></ul>
     
        <div className="container">
          <Avatar className="tar" type="button" class="button"  name="User" size={40} round="50%" onClick={this.handleButtonClick}>
            
          </Avatar>
          <br />
          {this.state.open && (
          <div class="dropdown">
              <ul>
                  <li src="./signup.js">Sign up</li>
                  <li src="./mysign.js">Login</li>
                  <li src="./res.js">Password Reset </li>
                  <li>Account details</li>
             </ul>
         </div>
         )}
        </div>
        </nav>
      </div>
    );
          }
        }
export default SettingsMenu;