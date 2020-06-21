import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Card, Button, CardTitle, CardText, Row, Col, Jumbotron, Container} from 'reactstrap';
import {Link} from 'react-router-dom'
import ModalExample from './Test';
import './myCard.css'
import Myfacts from './facts';



const MyCard = (props) => {

  return (
    <div className="card">
    <Row>
        <Col sm="4">
          <Jumbotron className="container my-card">
          <h1 className="display-3"> Mizizi</h1>
          <p className="lead">The one stop shop for your medical information.</p>
          <hr className="my-2" />
          <p>We are dedicated to provide adequate, acurate and consistent medical information to anyone with no access to hospitals!</p>
          <p className="lead">
          <Link to="/About"> <Button color="primary" size="sm">Learn more</Button></Link>
          </p>
          </Jumbotron>
        </Col>
        <Col sm="4">
          <div className="">
          <Card body>
            <CardTitle><strong>DID YOU KNOW?</strong></CardTitle>
            <Myfacts />
          </Card>
          </div>
        </Col>
        <Col sm="4">
        <div className="cards">
          <Card body>
          <CardTitle><strong>TEST YOUR KNOWLEDGE?</strong></CardTitle>
          <CardText> Your skin works hard. Not only is it the largest organ in the body, but it defends against disease and infection, regulates your temperature and aids in vitamin production.<ModalExample /></CardText>
          </Card>
        </div>
        </Col>
        </Row>
        </div>
  );
};

export default MyCard;