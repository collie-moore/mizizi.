import React, {Component} from "react";
import axios from 'axios';
import './signin.css';

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
            <form className="forma" onSubmit={this.SubmitHandler}>
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
                  
            <button type="submit" className="button" onClick={() => ('')}>Submit</button>
            <br />
            <p className="forgot ">
                Forgot <a href="./reset.js">password?</a>
                </p>
            </form>
            </div>
            );
        }

    }
    
export default Login;