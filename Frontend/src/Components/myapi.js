var request = require("request");
var options = {
  method: 'GET',
  url: 'https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms',
  qs: {format: 'json', language: 'en-gb'},
  headers: {
    'x-rapidapi-host': 'priaid-symptom-checker-v1.p.rapidapi.com',
    'x-rapidapi-key': '8384a30b45mshd82923e01e66c7fp1d4035jsn9cc1bd51e260',
    useQueryString: true
  }
};
request(options, function (error, response, body) {
	if (error) throw new Error(error);
	console.log(body);
});