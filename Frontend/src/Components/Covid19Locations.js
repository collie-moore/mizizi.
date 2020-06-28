import React from 'react';
import { Container, Row, Col,   CardImg, 
     Table } from 'reactstrap';
import './sigg.css'

const Covid19Locations = (props) => {
  return (
      <div>
          <br>
          </br>
      <div>
          <h4><strong>Covid-19 Cases and Location in Kenya</strong></h4>
               
      </div>
      <br>
          </br>
    <Container>
         <Table responsive>
      <thead>
        <tr>
          <th>Confirmed Cases</th>
          <th>Confirmed Recoveries</th>
          <th>Confirmed Deaths</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ color: 'blue' }}><strong>6,070</strong></td>
          <td style={{ color: 'green' }}><strong>1,971</strong></td>
          <td style={{ color: 'red' }}><strong>143</strong></td>      
        </tr>      
      </tbody>
    </Table>
      <div className='container1'>
      <Row>
      <Col sm='6'>
            <CardImg  src="/img/kenya.gif" alt="Card image cap" />
            
      </Col>
      <Col sm='6'>
            <div>
                <h4><strong>Basic protective measures against COVID-19</strong></h4>
               
            </div>
      </Col>
      </Row>
      </div>
      
       
 
        
      

    
    </Container>
    </div>
  );
}

export default Covid19Locations;