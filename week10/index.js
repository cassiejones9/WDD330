import { getJSON, getLocation } from './utilities.js';

const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

const quakes = getJSON(baseUrl);
const location = getLocation();
location.then(result => console.log(result.coords.latitude)); //this should be step 4 to marry location and pull quakes.
// console.log(quake);
console.log(location);