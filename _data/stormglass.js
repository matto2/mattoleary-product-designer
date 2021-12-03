const fetch = require("node-fetch");

module.exports = async function() {
    console.log( "Fetching windspeed in santa cruz" );


const lat = 36.9741;
const lng = 122.0308;
const params = 'windSpeed';

return fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
  headers: {
    'Authorization': 'e366130a-d67f-11eb-80ed-0242ac130002-e3661382-d67f-11eb-80ed-0242ac130002'
  }
}).then((response) => response.json()).then((jsonData) => {
 
return {

windspeed: jsonData.windspeed
};
});
};