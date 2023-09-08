"use strict";
// CHAINING PROMISES ADDED WITH WEATHER API
import {apiObj} from '../api-secret/secret.js';
const url = "https://api.weatherapi.com/v1/current.json?key=" + apiObj.weatherAPI + "&q=Gurgaon&aqi=yes";

const fetchWeatherInfo = function (apikey, location, aqi){
    const weatherApiURL = "https://api.weatherapi.com/v1/current.json?key=" + apikey + "&q=" + location + "&aqi=" + aqi;
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


// GLOBAL MARKET OPEN/CLOSE STATUS
const alphaVantageAPIGM = function(apiKey){
    const marketStatusURL = "https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=" + apiKey;
    return fetch(marketStatusURL);
}
const callGlobalMarketStatusFunc = function (){
    const api = apiObj.alphaVantageAPI;
    return alphaVantageAPIGM(api);
}

callGlobalMarketStatusFunc()
.then(function(response){
    if(!response.ok){
        throw new Error("Some error has occured while fetching from alpha vantage");
    }else{
        return response.json();
    }
})
.then(function(result){
    console.log(result);
})
.catch(function(error){
    console.log(error);
});

// CUSTOM PROMISE
const fetchUserData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const userData = { name: "Alice", age: 28 };
        resolve(userData);
      }, 1000);
    });
  };
  
  const updateUserEmail = (user) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        user.email = "alice@example.com";
        resolve(user);
      }, 1000);
    });
  };
  
  fetchUserData()
    .then(updateUserEmail)
    .then((user) => {
      console.log(user); 
    })
    .catch((error) => {
      console.error(error);
    });
  