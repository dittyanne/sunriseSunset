// api url: https://api.sunrise-sunset.org/json?lat=40.740411&lng=-73.991355
let request= new XMLHttpRequest();
let url="https://api.sunrise-sunset.org/json?lat=40.740411&lng=-73.991355";
request.open("GET",url,true); //"GET"=string letting the api know what we want, url=tells the api where to go, true=..."POST"=giving information to the server, "PUT"=changing data,"DELETE"=deletes data
request.onload = function(){
    // Begin accessing JSON data here. Data stored in request.response
    let data=JSON.parse(this.response);//JSON.parse=takes JSON and creates a javascript object; this=binding/ownership/owning object("request");
    let sunrise = document.getElementById('sunrise');
    let sunset = document.getElementById('sunset');
    if(request.status >= 200 && request.status <400){
        sunrise.textContent = convertToEST(data.results.sunrise);
        sunset.textContent = convertToEST(data.results.sunset);
    }
};

request.send();

function convertToEST(utc){
    let utcHours = utc.substr(0,utc.indexOf(":"));//in js, strings are handled as arrays
    let utcMinSec = utc.substr(utc.indexOf(":")+1);
    let est = parseInt(utcHours,10)-5;
    est += ":" + utcMinSec;
    return est;
};
