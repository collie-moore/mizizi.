import React from 'react';
import {Jumbotron, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './myCard.css'


export class Maps extends React.Component {
  render() {
    const mapStyles = {
      width: "100%",
      height: "100%",
    };

    return (
      <div className='' >
        <br>
        </br>
        <div><h3><strong>Locations of the COVID-19 testing Centers</strong></h3></div>
        <div><h4>For information about confirmed cases and their locations in the country,<Link to="/Covid19-heatmap"> <Button color="secondary" size="sm">Click Here</Button></Link></h4></div>
        <Map className='card1'
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: -1.2884, lng: 36.8233 }}
      >
        <Marker position={{ lat: -1.2884, lng: 36.8233 }} />
      </Map>
      </div>
     
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBfx1w0wh0cODVCQ3mfPX9Xz__xa1gSWHA",
})(Maps);