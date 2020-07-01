import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col } from 'reactstrap';

import FetchTestData from './FetchTestData';
const ModalExample = (props) => {
    const {
      buttonLabel    } = props;
  
    const [modal, setModal] = useState(false);
  
  
    const toggle = () => setModal(!modal);
    
  
    return (
        <div>
            <div className="startBtn">
                <Form inline onSubmit={(e) => e.preventDefault()}>
                    {' '}
                    <Button color="link" onClick={toggle}>Start>>{buttonLabel}</Button>
                </Form>
            </div>
        
            <Row className='container2'>
          <Col sm='12'>
            <Modal isOpen={modal} toggle={toggle} className="myMod" >
                <ModalHeader toggle={toggle}>Welcome to Mizizi!! Test your knowledge</ModalHeader>
                <ModalBody>
                    <FetchTestData />
                </ModalBody>
                <ModalFooter>
                    
                    <Button color="primary" onClick={toggle}>I'm Done!</Button>
                </ModalFooter>
            </Modal>
            </Col>
            </Row>
        </div>
    );
}

export default ModalExample;