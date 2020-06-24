import React from "react";
import{Input, Button}from 'reactstrap';
import {Link} from 'react-router-dom'
import './sigg.css';

const SignUp = (props) => { 
        return (
            <div className="container" >
            <form className="con">
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label className="labo">User name</label><br />
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label className="labo">Phone</label><br />
                    <input type="number" className="form-control" placeholder="07********" />
                </div>

                <div className="form-group">
                    <label className="labo">Email address</label><br />
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label className="labo">Password</label><br />
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                <label className="labo">Payment method</label><br />
               <Input type="select" className="select" placeholder="select">
               <option>Mpesa</option>
               <option>Paypal</option>
               <option>Airtel money</option>
               <option>Mastercard</option>
               <option>Tkash</option>
             </Input>
            </div>
            <br></br>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <br></br>
                <p className="have text-right">
                    Have an account? <Link to="/LogIn"><Button color="link">Log In</Button></Link>
                    
                </p>
            </form>
            </div>
        );
    }
export default SignUp;