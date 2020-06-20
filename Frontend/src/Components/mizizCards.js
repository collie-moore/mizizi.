import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck, CardBody
} from 'reactstrap';
import './mizizi.css';
import { Link } from 'react-router-dom';
import SignUp from './signupmodal';

const Cards = (props) => {
  return (
      <div className="">
     <div className="">  
    <CardDeck>
      <Card >
        <CardImg top width="100%" src="/img/download.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle><b>COVID-19</b></CardTitle>
          <CardText>Learn more about COVID-19 here!.</CardText>
          <Button outline color="secondary">Learn More</Button>
        </CardBody>
      </Card>
      
      <Card>
        <CardImg top width="100%" src="/img/firstaid.png" alt="Card image cap" />
        <CardBody>
          <CardTitle><b>FIRST AID</b></CardTitle>
          <CardText>Learn more about first aid here!.</CardText>
          <Link to="/firstAid">Learn More</Link>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/img/symptoms.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle><b>SYMPTOMS CHECKER</b></CardTitle>
          <CardText>Check out what you maybe suffering from.</CardText>
          <SignUp />
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/img/findachemist.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle><b>FIND A CHEMIST</b></CardTitle>
          <CardText>Check out the nearest chemist in your location.</CardText>
          <SignUp />
        </CardBody>
      </Card>
    </CardDeck>
    </div>  

      </div>
  );
};

export default Cards;