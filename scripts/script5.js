"use strict";

class GeoCoding{
    #geoCodingKey = "6799d4492a73982bdf7893be7e1ca16c0398143f";
    getGeoCodingkey(){
        return this.#geoCodingKey;
    }
}

const geoCodApiKey = (new GeoCoding()).getGeoCodingkey();


const whereAmI = function(){
    return new Promise(function(resolve,reject){
        navigator.geolocation.getCurrentPosition(resolve,reject);
    }).then(getCountry);
}

const dataFromFetchResponse = function(response){
    return response.json();
}


const getCountry = function(pos){
    const {latitude:lat, longitude:lng} = pos.coords;
    const coords = [lat,lng];
    const url = `https://api.geocodify.com/v2/reverse?api_key=${geoCodApiKey}&lat=${coords[0]}&lng=${coords[1]}`;
    return fetch(url).then(dataFromFetchResponse).then(getCountryDetails);
}

const getCountryDetails = function(data){
    const country = data.response.features[0].properties.country;
    return fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(res){
        return res.json().then(extractDetailsOfMyCountry);
    });
}

const extractDetailsOfMyCountry = function(data){
    console.log(data[0]);
}

whereAmI()
.catch(function(error){
    console.log(error);
});


