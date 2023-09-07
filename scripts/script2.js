"use strict";
// CHAINING PROMISES ADDED WITH WEATHER API
import {apiObj} from '../api-secret/secret.js';
const url = "https://api.weatherapi.com/v1/current.json?key=" + apiObj.weatherAPI + "&q=Gurgaon&aqi=yes";

const fetchWeatherInfo = function (apikey, location, aqi){
    const weatherApiURL = "https://api.weatherapi.com/v1/current.json?key=" + apikey + "&q=" + location + "&aqi=" + aqi;
    console.log(weatherApiURL);
    return fetch(url,{method:"GET"});  //PROMISE
}


const callWeatherAPI = function (location,aqi){
    const apikey = apiObj.weatherAPI;
    return fetchWeatherInfo(apikey,location,aqi);
}

const location = "Kolkata";
const aqi = "yes";

callWeatherAPI(location,aqi)
.then(function(Response){
    if(!Response.ok){
        throw new Error("Some may have occurred while fetching URL through API");
    }
    else{
        return Response.json();  //PROMISE
    }
})
.then(function (result){
    console.log(result);
    const loc = result.location;
    const weatherStatus = result.current;
    console.log(loc.name + 
        " located in " + 
        loc.country + 
        "having LAT = " +
        loc.lat +
        ", LON = " +
        loc.lon + 
        ", has current temperature of " +
        weatherStatus.temp_c +
        " celcius"
        );
})
.catch(function(error){
    console.log(error);
})