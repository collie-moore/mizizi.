/* eslint-disable no-undef */
import React from 'react';
import DisplayApi from './sc';

const Call = (props) => {


function Mycall(){
    const uri = 'priaid-symptom-checker-v1.p.rapidapi.com/symptoms';

let h = new Headers();
h.append('x-rapidapi-host', 'priaid-symptom-checker-v1.p.rapidapi.com/symptoms');
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
        <DisplayApi />
    </div>
)

}

export default Call;