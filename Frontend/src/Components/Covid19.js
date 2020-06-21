import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Row, Col
} from 'reactstrap';
import './myCard.css'

const Covid19 = (props) => {
  return (
    <div>
      <div className='card'> <h3><strong>More information about COVID 19 pandemic in Kenya</strong></h3></div>
     <div className='card'>
     <Row>
        <Col  sm='6'>
        <Card>
         <CardBody>
          <CardTitle><strong><h3>Locations of the COVID-19 testing loactions in the country</h3></strong></CardTitle>
          <CardText>Our Next sprint, sprint 3 will see this area populated with a map showing all the locations of the testing centers in the country.</CardText>
        </CardBody>
      </Card>  
        </Col>
        <Col  sm='6'>
        <Card>
         <CardBody>
          <CardTitle><strong><h3>Heat Map showing the locations of the COVID-19 confirmed cases in the country</h3></strong></CardTitle>
          <CardText>Our Next sprint, sprint 3 will see this area populated with a map showing all the locations of the testing centers in the country.</CardText>
        </CardBody>
      </Card>  
        </Col>

      </Row>
     </div>
    </div>
  );
};

export default Covid19;