
import React from 'react';
import {Row, Col, Card, CardImg} from 'reactstrap';
import './sigg.css';
 //The about Us page after clicking learn more on the jumbotron
const About = (props) => {
  return (
      <div className='container1'>
        <h3><strong>About Us</strong></h3>
        <br>
        </br>
        <Row className='container2'>
          <Col sm='8'>
              <p>We are a Kenya Tech company specializing in providing accurate and reliable medical information to our end users. our objective is to give the best information to our users who have no access to medical institutions due to reasons like work, natural calamities aor even remote locations with no access to hospitals.</p>
              <p>We have partners with stakeholders in the medical field and the Ministry of Health to provide the best service we can. Numerous chains of chemists and pharmacies are working together with us to serve our users with the best medical service in the country.</p>
              <p>Users are able to use symptom checker to diagonize themselves and order medication right on the app. We also provide robust information on the COVID-19 pandemic, location of the national testing centers, and the current confirmed cases of the virus and where they were recorded. </p>
          </Col>
          <Col sm='4'>
          <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Members of Mizizi Team" />
 
      
      </Card>
          </Col>

        </Row>
        
      </div>
  );
}

export default About;