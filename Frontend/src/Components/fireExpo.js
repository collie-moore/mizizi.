/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Button , Modal , ModalBody , ModalFooter  } from 'reactstrap';
import AppApi from './testApi';

const FireExpose = (props) => {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="link" onClick={toggle}>Exposure to fire</Button>
      <Modal color="blue" isOpen={modal} fade={false} toggle={toggle} className="burnproc">
        <ModalBody>
          <AppApi />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default FireExpose;