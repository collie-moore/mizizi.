import React from 'react';
import { Card, Button, CardTitle, CardText, Col, Jumbotron } from 'reactstrap';

const Moore = (props) => {
  
  return (
    
    <div className="container">
      <div className="row row-content">
        <div className= "col-sm-6">
        <Col sm="4">
        </Col>
        <Jumbotron>
        <h1 className="display-3"> Mizizi</h1>
        <p className="lead">The one stop shop for your medical information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      </div>
      <div className= "col-sm-3">
      <Col sm="">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      </div>
      <div className= "col-sm-3">
      <Col sm="">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      </div>
     
    
    </div>
    </div>

   
   
  );
};

export default Moore;