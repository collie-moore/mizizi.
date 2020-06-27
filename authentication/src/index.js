import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './mysign';
import Navbar0 from'./myNavbar';
import Sign from './signup';
import Pass from './reset.js';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="./mysign.js">Login</Link>
        </li>
        <li>
          <Link to="./signup.js">Sign up</Link>
        </li>
        <li>
          <Link to="./reset.js">Forgot password</Link>
        </li>
      </ul>
      <Route path="./App.js" component={App} />
      <Route path="/mysign.js" component={Login} />
      <Route path="/myNavbar.js" component={Navbar0} />
      <Route path="/signup.js"component={Sign}/>
      <Route path="/reset.js"component={Pass}/>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
