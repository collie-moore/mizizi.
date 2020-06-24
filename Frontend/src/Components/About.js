import React from 'react';
import {Jumbotron, Button} from 'reactstrap';
import './myCard.css';


const About = (props) => {
  return (
      <div>
     <Jumbotron>
        <h1 className="display-3">This is Mizizi</h1>
        <p className="lead">We are dedicated to providing accurate and adequate medical information to all our users whenever and wherever they are. Mizizi give you the power to be informed, carry out procidures, locate nearest chemist and even book a n appointment, all from the palm of your hand. Try us today.</p>
        <hr className="my-2" />
        <p>We leverage the power of the internet to provide you with realtime information in the medical field.</p>
        <p className="lead">
          <Button color="primary">Contact Us</Button>
        </p>
      </Jumbotron>
      </div>
  );
}

export default About;