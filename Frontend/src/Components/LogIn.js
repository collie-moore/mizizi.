import React from "react";
import './SignIn.css';

const Login = (props) => {
        return (
        <div className="container bg-339FFF">
            <form className="forma">
               <h3> Login</h3>

                <div className="form-group">
                    <label className="lab">Email address</label><br />
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label className="lab">Password</label><br />
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                
              <div className="cee custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div><br/>
                  
            <button type="submit" className="button">Submit</button>
            <br />
            <p className="forgot ">
                Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>
            );

    }

export default Login;