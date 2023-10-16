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

const getMyCountryDetails = function(){
    return fetch(urlGetPublicIP)
    .then(responseFromFetch)
    .then(extractIPInfo)
}


const urlGetPublicIP = "https://api.ipify.org/?format=json";

// getMyCountryDetails()
// .catch(function(error){
//     console.log(error);
// });

const getMyCountryFromIP = async function(){
    const dataMyIPInfo = await (await fetch(urlGetPublicIP)).json();
    
    const urlGetLocationInfo = `http://ip-api.com/json/${dataMyIPInfo.ip}`;
    const dataMyLocationInfo = await (await fetch(urlGetLocationInfo)).json();

    const urlGetCountryName = `https://api.geocodify.com/v2/reverse?api_key=${geoCodApiKey}&lat=${dataMyLocationInfo.lat}&lng=${dataMyLocationInfo.lon}`;
    const dataCountryName = await (await fetch(urlGetCountryName)).json();

    const country = dataCountryName.response.features[0].properties.country
    const urlGetCountryDetails = `https://restcountries.com/v3.1/name/${country}`;
    const dataCountryDetails = await (await fetch(urlGetCountryDetails)).json();
    return dataCountryDetails[0];
};


(async function (){ 
    try{
        const data = await getMyCountryFromIP();
        console.log(data);
    } catch(error){
        console.log(error);
    }
    console.log("this is a mandatory comment")
})();
