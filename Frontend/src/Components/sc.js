/*import React, { Component } from "react";
import Asymptoms from "./asymptom";
export default class DisplayApi extends Component {
  
  state = {
    asymptom: []  //Object that stores the output of the API call
  }

  //calling the API
  componentDidMount() {
    var url = "priaid-symptom-checker-v1.p.rapidapi.com/symptoms";
    //fetch is gonna make a GET request to the endpoint
    fetch(url, {
      method: 'GET',
      path: '/symptoms?format=json&language=en-gb',
      headers: {
        'x-rapidapi-host' : 'priaid-symptom-checker-v1.p.rapidapi.com',
        'x-rapidapi-key' : '8384a30b45mshd82923e01e66c7fp1d4035jsn9cc1bd51e260',
        'Content-Type' : 'application/json'
      }
      //converts output to json
    }).then(res => res.json())
    //sets value of the state to the output from the Call
    .then((data) => {
      this.setState({ asymptom: data})
    })
    //logs errors to teh console
    .catch(console.log)
  }

  render(){
    return(
      <Asymptoms asymptom={this.state.asymptom} />
    )
  }
}*/


