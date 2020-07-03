import React from 'react';
import { Card, CardText, CardBody,  CardTitle,  Button, Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom'
import './sigg.css'

const Diagnosis = (props) => {
  return (
    <div >
      <h2><strong>Diagnosis</strong></h2>
      <Row className='container1'>
        <Col sm='8'>
        <Card>
          <CardBody>
          <CardTitle><h3><strong>Here are your results!</strong></h3></CardTitle>
          <CardText>Please see below the results from the symptoms checker</CardText>
          <Form>
          <FormGroup>
        <Label for="exampleAddress">Patient Name</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder=""/>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Year of Birth</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Gender</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="" />
          </FormGroup>
        </Col>
      </Row>
      
      
    </Form>
    <div>
      <p>Detected ailness: </p>
    </div>
    
    <FormGroup>
        <Label for="exampleText">Recommended Steps</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
          
        </CardBody>
        </Card>
        </Col>
         <Col sm='4'>
            <br>
            </br>
        <Card>
          <Link to="/FindChemist"><Button color="primary" size="sm">Find A Chemist</Button></Link>
         </Card>

         <br>
         </br>
         <Card>
          <Link to="/"><Button color="primary" size="sm">Print Report</Button></Link>
         </Card>
        
        </Col>
      </Row>
      
    </div>
  );
};

export default Diagnosis;