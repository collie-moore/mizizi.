import React, {Component} from "react";
import axios from 'axios';
import './signin.css';
import { Link } from 'react-router-dom';
import { Button, Col, Row} from 'reactstrap';

class Login extends Component{
constructor(props){
    super(props)

    this.state={
        Email:'',
        Password:'',
    }
}
changeHandler = (e) =>{
    this.setState({[e.target.name]: e.target.value})
}
submitHandler = e =>{
    e.preventDefault()
    console.log(this.state)
    axios.post('#', this.state)
    .then(response =>{
        console.log(response)
    })
    .catch(error =>{
        console.log(error)
    })
}
//const Login = (props) => {
    render(){
        const{Email, Password} = this.state
        return (
        <div className="container bg-339FFF">
            <Row className='container2'>
                    
                       
                <form className="forma" onSubmit={this.SubmitHandler}>
                <Col sm="2"></Col>
                <Col sm='8'>
                    <h3> Login</h3>

                    <div className="form-group">
                        <label className="lab">Email address</label><br />
                        <input type="email" className="form-control" name="Email" value={Email} placeholder="Enter email" onChange={this.changeHandler} />
                    </div>

                    <div className="form-group">
                        <label className="lab">Password</label><br />
                        <input type="password" className="form-control" name="Password" value={Password} placeholder="Enter password" onChange={this.changeHandler} />
                    </div>

                    
                <div className="cee custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div><br/>
                    
                <Link to="/symptoms"><Button type="submit" className="button" onClick={() => ('')}>Submit</Button></Link>
                <br />
                <p className="forgot ">
                <Link to="/reset"><Button color="link" className="btnSignIn" >forgot password</Button></Link>
                    </p>
                    </Col>
                </form>
                
                <Col sm="2"></Col>
            </Row>
            </div>
            );
        }

    }
    
export default Login;