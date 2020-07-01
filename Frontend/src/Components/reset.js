import React from "react";
import './res.css';
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

const Fogg = (props) => { 
    return ( 
        <div className="fort" >
        <form className="fot">
            <Row>
                <Col sm="6">
                
            <h3>Forgot password?</h3>

            <div className="form-group">
                <label className="code">Secret code</label><br />
                <input type="text" className="form-control" placeholder="000000" />
            </div>

            <div className="form-group">
                <label className="code">Email address</label><br />
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label className="code">Password</label><br />
                <input type="password" className="form-control" placeholder="Enter new password" />
            </div>
            <div className="form-group">
            <label className="code">Re-enter Password</label><br />
            <input type="password" className="form-control" placeholder="Re-Enter new password" />

        </div>
            <Link to="/Mysign" ><button onclick="window.location.href='#';"type="submit" className="btn btn-primary btn-block">Reset</button></Link>
            
            </Col>
            <Col sm="6"></Col>
            </Row>
        </form>
        </div>
);
}
export default Fogg;