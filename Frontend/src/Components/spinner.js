import React from 'react';
import { Spinner } from 'reactstrap';

const Spin = (props) => {
  return (
    <div>
      <Spinner style={{ width: '3rem', height: '3rem' }} />{' '}
      <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
    </div>
  );
}

export default Spin;