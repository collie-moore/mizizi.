import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';

import FetchTestData from './FetchTestData';
const ModalExample = (props) => {
    const {
      buttonLabel,
      className
    } = props;
  
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

            <Modal isOpen={modal} toggle={toggle} className={className} >
                <ModalHeader toggle={toggle}>Welcome to Mizizi!! Test your knowledge</ModalHeader>
                <ModalBody>
                    <FetchTestData />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Submit</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;