import React from "react";
import{Input}from 'reactstrap';
import './sigg.css';

const Sign = (props) => { 
        return (
            <div className="cont" >
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
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="have text-right">
                    Have an account? <a href="/.mysign.js">sign in</a>
                    
                </p>
            </form>
            </div>
        );
    }
export default Sign;