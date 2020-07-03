/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import config from './config2';
import './mizizi.css';
import { HOSPITALS } from '../data/hospitals';

const mapStyles = {
  width: '100%',
  height: '80%'
};
const containerStyle = {
  position: 'relative',  
  width: '100%',
  height: '100%'
}

export class MapComponent extends Component {
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
  renderMarker(hospital){
    return (
      <Marker
      title={hospital.title}
      name={hospital.name}
      position={hospital.position} />
    )
  }
  renderMarkers(){
    return HOSPITALS.map((h)=>{
      return this.renderMarker(h)
    })
  }
  render() {
    return (
      <div>   
       <div className='container2'>
       <h4><strong>COVID-19 Facilities Locations in Kenya</strong></h4>
        <p>Number of Beds indicated are for the facilities meant for the patients suffering from the virus and not the total number of hospital beds</p>
        </div>
      <Map google={this.props.google} zoom={8}
      initialCenter={{lat: -1.300974, lng: 36.807236}}
      >
      {this.renderMarkers()}
      <InfoWindow onClose={this.onInfoWindowClose}>
      <div>
      <h1>{this.state.selectedPlace.name}</h1>
      </div>
      </InfoWindow>
    </Map>
    </div>

          );
  }
}

export default GoogleApiWrapper({ apiKey: config.apiKey })(MapComponent);