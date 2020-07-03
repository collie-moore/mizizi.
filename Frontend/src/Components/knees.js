/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Button , Modal , ModalBody , ModalFooter } from 'reactstrap';
import Kneeprocedure from './kneesprocedure';

const ScrapedKnees = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="link" onClick={toggle}>Scraped knees and elbows</Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
        <ModalBody>
          <Kneeprocedure />
         </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ScrapedKnees;