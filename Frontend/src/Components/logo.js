import React, {Component} from 'react';
import Avatar from 'react-avatar';
import './ava.css';
import './myNavbar.css';
import { Link } from 'react-router-dom';

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
      
          <div className="container">
              <Avatar className="tar" type="button" class="button"  name="User" size={40} round="50%" onClick={this.handleButtonClick}></Avatar>
              <br />
              {this.state.open && (
                  <div class="dropdown">
                    <ul>
                          <Link to="./signup"><li src="./signup.js">Sign up</li></Link>
                          <Link to="./Mysign"><li src="./mysign.js">Login</li></Link>
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