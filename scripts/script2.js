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
        " having LAT = " +
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

// call function
const callFunctionGreeting = function (greetString, userAge, userLocation){
  console.log(greetString + "!, " + this.name + ", you are " + userAge + " year old and you live in " + userLocation);
}

callFunctionGreeting.call({name:"Steve"}, "Hello", 23,"Varanasi");

// APPLY FUNCTION
const applyfunctionGreeting = function (greet, age, location){
  console.log(greet + "!, " + this.name + ", you are " + age + " year old and you live in " + location)
}

applyfunctionGreeting.apply({name:"Ravichandran"}, ["Hola", 33, "Karnataka"]);


// BIND FUNCTION
function greet(greetStr, punc) {
  return `${greetStr}, ${this.fName} ${this.lName}${punc}`;
}


const greetJohn = greet.bind({
  fName: 'Bruce',
  lName: 'Wayne'
}, 'HI'); 
console.log(greetJohn('!!!! '));

// Immediately Invoked Function Expressions (IIFE)
const counter = (
  function(){
    let count = 0;
    return {
      getcount : function(){
        return count;
      },
      increment : function(){
        count++;
      }
    };
  })();

console.log("Current COUNT VALUE IS = " + counter.getcount());
counter.increment();
console.log("Current COUNT VALUE IS = " + counter.getcount());
counter.increment();
counter.increment();
console.log("Current COUNT VALUE IS = " + counter.getcount());

// IIFE with arguement
for (var i = 0; i < 5; i++) {
  (function (index) {
      console.log(index);
  })(i);
}

// CLOSURE IN JAVASCRIPT

const clickHandlerUtil = function(){
  let count = 0;
  return function(){
    count++;
    console.log("Learn more button clicked " + count + " times!!");
  }
}
const learMoreHandlerClicked = clickHandlerUtil();
document.querySelector("#learnMore").addEventListener("click", learMoreHandlerClicked);

const createNewUser = function (name, occupation){
  let userName = name;
  let userOccupation = occupation;
  const getName = function(){
    return userName;
  }
  const setName = function(name){
    userName = name;
  }
  const getOccupation = function(){
    return userOccupation;
  }
  const setOccupation = function(occupation){
    userOccupation = occupation;
  }
  return {getName: getName,
    setName: setName,
    getOccupation: getOccupation,
    setOccupation: setOccupation
  }
}

const user1 = createNewUser("Walter White", "High school chemistry teacher");
console.log(user1.getName() + " is a " + user1.getOccupation())
user1.setName("Heisenberg");
user1.setOccupation("Cook and an Artist");
console.log(user1.getName() + " is a " + user1.getOccupation())
