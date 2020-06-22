import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck, CardBody
} from 'reactstrap';
import './myCard.css';
import { Link } from 'react-router-dom';
import SignUp from './signupmodal';

const Cards = (props) => {
  return (
      <div className="card">
     <div className="">  
    <CardDeck>
    <Card lg='3'>
        <CardImg top width="100%" src="/img/download.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle><b>COVID-19</b></CardTitle>
          <CardText>Learn more about COVID-19 here!.</CardText>
          <Link></Link>
        </CardBody>
        <Link to="/Covid19"> <Button color="primary" size="lg-4">Learn more</Button></Link>
      </Card>      
      <Card>
        <CardImg top width="100%" src="/img/firstaid.png" alt="Card image cap" />
        <CardBody>
          <CardTitle><b>FIRST AID</b></CardTitle>
          <CardText>Learn more about first aid here!.</CardText>
        </CardBody>
        <Link to="/firstAid"><Button color="primary" size="sm">Learn More</Button></Link>
      </Card>
      <Card>
        <CardImg top width="100%" src="/img/symptoms.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle><b>SYMPTOMS CHECKER</b></CardTitle>
          <CardText>Check out what you maybe suffering from.</CardText>
        </CardBody>
        <Link to="/Mysign"><Button color="primary" size="sm">Get Started</Button></Link>
      </Card>
      <Card>
        <CardImg top width="100%" src="/img/findachemist.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle><b>FIND A CHEMIST</b></CardTitle>
          <CardText>Check out the nearest chemist in your location.</CardText>
         </CardBody>
         <Link to="FindChemist"><Button color="primary" size="sm">Find Chemist</Button></Link>
      </Card>
    </CardDeck>
    </div>  
      </div>
  );
};

export default Cards;