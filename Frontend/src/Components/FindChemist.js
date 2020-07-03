/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import config from './config2';
import './sigg.css';


const mapStyles = {
  width: '100%',
  height: '80%'
};
const containerStyle = {
  position: 'relative',  
  width: '100%',
  height: '100%'
}

export class FindChemist extends Component {
  state = {
    showingInfoWindow: false,  
    activeMarker: {},          
    selectedPlace: {}          
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    return (
      <div className="maploc" >
        <div className='container2'>
          <h4><strong>Our Partner Chemists and Pharmacies</strong></h4>
          <p>All our Chemist and Phamacy partner will appear on this map with their contacts and their working hours</p>
        </div>
      <Map
        google={this.props.google}
        zoom={7}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}>
           <Marker
              title={'Mizizi Chemist'}
              name={'SOMA'}
              position={{lat: -1.300974, lng: 36.807236}} />
 
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({ apiKey: config.apiKey })(FindChemist);