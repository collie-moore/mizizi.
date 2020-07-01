/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Button , Modal , ModalBody , ModalFooter } from 'reactstrap';
import Beeprocedure from './beestingprocedure';

const Beesting = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="link" onClick={toggle}>Bee sting</Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
        <ModalBody>
            <Beeprocedure />
         </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Beesting;