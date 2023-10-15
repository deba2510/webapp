"use strict";

class GeoCoding{
    #geoCodingKey = "6799d4492a73982bdf7893be7e1ca16c0398143f";
    getGeoCodingkey(){
        return this.#geoCodingKey;
    }
}

const geoCodApiKey = (new GeoCoding()).getGeoCodingkey();


const responseFromFetch = function(response){
    // throw new Error("Error inside responseFromFetch")
    return response.json();
}

const extractCountryDetails = function(data){
    console.log(data[0]);
}

const extractCountryName = function(data){
    const country = data.response.features[0].properties.country;
    const urlGetCountryDetails = `https://restcountries.com/v3.1/name/${country}`;
    return fetch(urlGetCountryDetails)
    .then(responseFromFetch)
    .then(extractCountryDetails);
}

const extractLocationInfo = function(data){
    const {lat,lon} = data;
    const urlGetCountryName = `https://api.geocodify.com/v2/reverse?api_key=${geoCodApiKey}&lat=${lat}&lng=${lon}`;
    return fetch(urlGetCountryName)
    .then(responseFromFetch)
    .then(extractCountryName);
}

const extractIPInfo = function(data){
    // throw  new Error("Error inside extractIPInformation");
    const urlGetLocationFromIP = `http://ip-api.com/json/${data.ip}`
    return fetch(urlGetLocationFromIP)
    .then(responseFromFetch)
    .then(extractLocationInfo)
}

const getMyIPAddress = function(ipaddress){
    return fetch(ipaddress)
    .then(responseFromFetch)
    .then(extractIPInfo)
}


const urlGetPublicIP = "https://api.ipify.org/?format=json";

getMyIPAddress(urlGetPublicIP)
.catch(function(error){
    console.log(error);
});
