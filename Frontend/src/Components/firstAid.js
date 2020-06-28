/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import Burn from './burns';
import Cuts from './cuts';
import { Table } from 'reactstrap';
import AcidBurn from './acid';
import HotWater from './hotWater';
import BruisedI from './bruisedEye';
import FireExpose from './fireExpo';
import Bites from './bites';
import Dogbyte from './doggybite';
import './myCard.css'
import ScrapedKnees from './knees';
import Deepcut from './cutdeep';

const FirstAid = (props) => {
 
  return (
    <div className='card'>
      <h1>First Aid Procedures</h1>
      <h4>First aid is an essential life saving service in most emergencies.<br></br>
       Please follow the following instrustions keenly</h4><br></br>

      <Table striped>
        <tbody>
          <tr>
            <td><Burn /></td>
              <td>
                <FireExpose />
                <br></br>
                <AcidBurn />
                <br></br>
                <HotWater />
                <br></br>
              </td>
          </tr>
          <tr>
            <td><Cuts /></td>
            <td><BruisedI />
            <br></br>
            <ScrapedKnees />
            <br></br>
            <Deepcut />
            </td>
            
          </tr>
        
          <tr>
            <td><Bites /></td>
            <td>
              <Dogbyte />
            </td>
            
          </tr>
        </tbody>
      </Table>
    
    </div>
  );
}

export default FirstAid;

