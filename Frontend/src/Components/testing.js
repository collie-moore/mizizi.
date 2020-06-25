import React from 'react';

function Testrequest() {
    var http = require("https");
    var options = {
        "method": "GET",
        "hostname": "priaid-symptom-checker-v1.p.rapidapi.com",
        "port": null,
        "path": "/symptoms?format=json&language=en-gb",
        "headers": {
            "x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
            "x-rapidapi-key": "8384a30b45mshd82923e01e66c7fp1d4035jsn9cc1bd51e260",
            "useQueryString": true
        }
    };
    var req = http.request(options, function (res) {
        var chunks = [];
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
        res.on("end", function () {
            var body = Buffer.concat(chunks);
            console.log(body.toString());
        });
    });
    req.end();

    return(
        <div>{ Testrequest()}</div>
        );
}

   
export default Testrequest;