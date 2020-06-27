/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Button , Modal , ModalBody , ModalFooter } from 'reactstrap';
import BruisedIprocedure from './bruisedeyeprocedure';

const BruisedI = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="link" onClick={toggle}>Bruised Eye</Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
        <ModalBody>
          <BruisedIprocedure />
         </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default BruisedI;