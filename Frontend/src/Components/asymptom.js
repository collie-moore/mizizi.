/*import React , { Component } from 'react';
 //import Asymptoms from "./Asymptoms";

class Symptom extends Component{
   state = {
    asymptom: []  //Object that stores the output of the API call
 }
  componentDidMount(){
    const qp = '?language=en-gb';
    const uri = 'https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms' + qp;
    
  
  let h = new Headers();
  h.append('x-rapidapi-host', 'priaid-symptom-checker-v1.p.rapidapi.com');
  h.append('x-rapidapi-key', '8384a30b45mshd82923e01e66c7fp1d4035jsn9cc1bd51e260');
  h.append('useQueryString', 'true');
  
  let req = new Request( uri, {
    method: 'GET',
    headers: h
  });
    fetch(req)
    .then( (response) => {
        if(response.ok){
            return( response.json())
        } else {
            throw new Error('BAD http stuff');
        }
    })
    .then( (jsonData)=>{
      const keys = Object.values(jsonData);
      const fetchedAsymptoms = [];
      for (const key of keys){
            fetchedAsymptoms.push({
                ...jsonData[key],
              id: key
            });
       this.setState({ asymptom:  fetchedAsymptoms});
       
      }
    })
    .catch( (err) => {
        //console.log('ERROR:' , err.message);
    });
  }
    render(){
      return(
      <div>
  <center><h5>Symptoms list</h5></center>
      {
        this.state.asymptom.map((symptom) => (
          <div key={symptom.id.ID}>    
             <center><h6>{symptom.id.Name}</h6></center>   
        </div>

    ))}
    </div>
     )
 }

}
export default Symptom;*/