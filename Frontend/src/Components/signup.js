import React, {Component} from "react";
import{Input , Button, Row, Col }from 'reactstrap';
import axios from 'axios';
import './sigg.css';
import { Link } from 'react-router-dom';

class Sign extends Component{
    constructor(props){
        super(props)

        this.state={
            UserId:'',
            Phone:'',
            Email :'',
            Password:'',
        }
    }
    changeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = e =>{
        e.preventDefault()
        //console.log(this.state)
        axios.post('#', this.state)
        .then(response =>{
           // console.log(response)
        })
        .catch(error => {
            //console.log(error)
        })
    }
//const Sign = (props) => { 
render(){
    const{ UserId, Phone, Email, Password } = this.state
        return (
            <div className="cont" >
                <Row>
            <form className="con" onSubmit= {this.submitHandler}>
                <Col sm="12">
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label className="labo">User name</label><br />
                    <input type="text" className="form-control" name="UserId"value={UserId} placeholder="First name" onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label className="labo">Phone</label><br />
                    <input type="number" className="form-control" name="Phone" value={Phone}placeholder="07********" onChange={this.changeHandler} />
                </div>

                <div className="form-group">
                    <label className="labo">Email address</label><br />
                    <input type="email" className="form-control" name="Email" value={Email} placeholder="Enter email" onChange={this.changeHandler} />
                </div>

                <div className="form-group">
                    <label className="labo">Password</label><br />
                    <input type="password" className="form-control"name="Password" value={Password} placeholder="Enter password" onChange={this.changeHandler} />
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
                <br></br>
                <p className="have text-right">
                    Have an account? <Link to="/Mysign"><Button color="link" className="btnSignIn" >Sign in</Button></Link>
                    
                </p>
                </Col>
            </form>
            </Row>
            </div>
        );

    }
}

export default Sign;