/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Button , Modal , ModalBody , ModalFooter } from 'reactstrap';
import Waterprocedure from './hotwaterprocedure';

const HotWater = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="link" onClick={toggle}>Hot Water Burn</Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
        <ModalBody>
          <Waterprocedure />
           </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default HotWater;