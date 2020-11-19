// import { getJSON, getLocation } from './utilities.js';
import QuakesController from './quakesController.js';

// const quakes = getJSON(baseUrl);
// const location = getLocation();
// location.then(result => console.log(result.coords.latitude)); //this should be step 4 to marry location and pull quakes.

// console.log(getJSON(baseUrl));
// console.log(location);

const newQuakeController = new QuakesController ('#quakeList');
newQuakeController.init();