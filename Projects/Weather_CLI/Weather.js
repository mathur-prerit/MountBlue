require('dotenv').config()
const fetch = require("node-fetch");

//Taking input from CLI
let inputCity= process.argv;
inputCity=inputCity[2];

if (inputCity===undefined){
	inputCity='Jalore';
}


//Importing weather API
let apiKey=process.env.apiKey//Generate your own id by any weather API.
let url=`http://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&APPID=${apiKey}`;//Use your own API fetching URL.
//console.log(url)

//Code for requesting data from api
fetch(url).then(response =>{
	if (response.ok){
		return response.json();
	}
	else{
		console.log('City name error');

	}

//Printing out the response
}).then(jsonResponse=>{
	let condition=jsonResponse['weather'][0]['description'];
	let temp=jsonResponse['main']['temp'];
	let country=jsonResponse['sys']['country'];
	let cityName=jsonResponse['name'];
	console.log(`The temperature in ${cityName}, ${country} is ${temp} Celsius and have ${condition} conditions.`);
});




















