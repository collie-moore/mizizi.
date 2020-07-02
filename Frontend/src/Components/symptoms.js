import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input,  } from 'reactstrap';
import './sigg.css'

const Symptoms = (props) => {
  return (
    <div >
      <div><h2><strong>Symptoms Checker</strong></h2></div>
      
    <Form className='container1'>
      <Row form>
      </Row>
      <Col >
      <FormGroup>
        <Label for="exampleEmail">Input your symptoms</Label>
        
        <Input />
        </FormGroup>
        </Col>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleAge">Date of Birth</Label>
            <Input type="text" name="age" id="exampleAge"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleRegion">Region</Label>
            <Input type="text" name="Region" id="exampleRegion"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleGender">Gender</Label>
            <Input type="text" name="Gender" id="exampleGender"/>
          </FormGroup>  
        </Col>
      </Row>
      <Button color="primary" size="sm">Submit</Button>
    </Form>
 </div>
  );
}

export default Symptoms;
