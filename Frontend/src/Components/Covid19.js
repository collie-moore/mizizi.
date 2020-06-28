import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle,  Button, Row, Col, Badge
} from 'reactstrap';
import {Link} from 'react-router-dom'
import './sigg.css'

const Covid19 = (props) => {
  return (
    <div >
      <h2><strong>Learn More About the Covid-19 Pandemic in Kenya.</strong></h2>
      <Row className='container1'>
        <Col sm='6'>
        <Card>
          <CardBody>
          <CardTitle><h3><strong>COVID-19 testing centers</strong></h3></CardTitle>
          <CardText>In efforts to combat the Covid-19 virus, the governnment has set up testing centers across the country, individuals will be tested for free..</CardText>
          <Link to="/MapComponent"><Button color="primary" size="sm">Find a Testing Center</Button></Link>
        </CardBody>
      </Card>
        </Col>
        <Col sm='6'>
        <Card>
          <CardBody>
          <CardTitle><h3><strong>COVID-19 confirmed cases in the country.</strong></h3></CardTitle>
          <CardText>Every day, new cases continue to be confirmed across the country. Currently Nairobi, Mombasa, Busia are some of the hotspot of the pandemic, see the complete heatmap and more information in the map</CardText>
          <Link to="/Covid19Locations"><Button color="primary" size="sm">Check out Locations</Button></Link>
        </CardBody>
      </Card>
        </Col>
      </Row>
      <div className='container2'>
      <h4>What do you know about <Badge color="primary">COVID-19?</Badge></h4>
      </div>
      <Row className='container1'>
        <Col sm='4'>
        <Card>
          <CardBody>
          <CardTitle><h3><strong>What is Covid-19</strong></h3></CardTitle>
          <CardText>The coronavirus disease (COVID-19) is an infectious disease caused by a new strain of coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019.</CardText>
          
        </CardBody>
      </Card>
        </Col>
        <Col sm='4'>
        <Card>
          <CardBody>
          <CardTitle><h3><strong>Symptoms</strong></h3></CardTitle>
          <CardText>
            <p>Most common symptoms:</p>
            <p>Fever, Dry cough and tiredness</p>
          </CardText>
          
        </CardBody>
      </Card>
        </Col>
        <Col sm='4'>
        <Card>
          <CardBody>
          <CardTitle><h3><strong>Prevention</strong></h3></CardTitle>
          <CardText>
            <p>Wash your hands regularly with soap and water, or clean them with alcohol-based hand rub.</p>
            <p>Maintain at least 1 metre distance between you and people coughing or sneezing.</p>
            </CardText>
        
        </CardBody>
      </Card>
        </Col>
      </Row>
      
    </div>
  );
};

export default Covid19;