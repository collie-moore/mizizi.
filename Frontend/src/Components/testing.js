/* eslint-disable no-undef */
import React from 'react';

const Call = (props) => {


function Mycall(){
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
        console.log(jsonData)
    })
    .catch( (err) => {
        console.log('ERROR:' , err.message);
    });
}

return(
    <div>
        { Mycall()}
        
    </div>
)

}

export default Call;