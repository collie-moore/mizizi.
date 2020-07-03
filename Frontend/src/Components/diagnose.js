/*import React , { Component } from 'react';
 //import Asymptoms from "./Asymptoms";

class Diagnosis extends Component{
   state = {
    diag: []  //Object that stores the output of the API call
 }
  componentDidMount(){
    const ln = '&language=en-gb';
    const sym = '?symptoms=%5B234%2C11%5D';
    const yob = '&year_of_birth=1984';
    const gen = '&gender=male';
    const uri = 'https://priaid-symptom-checker-v1.p.rapidapi.com/diagnosis' + sym + ln + gen + yob;
    
  
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
      //console.log(jsonData)
      const fetchedDiags = [];
      for (const key of keys){
            fetchedDiags.push({
                ...jsonData[key],
              id: key
            });
       this.setState({ diag:  fetchedDiags});
      
      }
      //console.log(this.state.diag)
    })
    .catch( (err) => {
       // console.log('ERROR:' , err.message);
    });
  }
    render(){
      return(
      <div>
  <center><h5> User Diagnosis</h5></center>
      {
        this.state.diag.map((udiag) => (
          <div key={udiag.id.Issue.ID}>    
             <center><h6>{udiag.id.Issue.Name}</h6></center>   
        </div>

    ))}
    </div>
     )
 }

}
export default Diagnosis;*/