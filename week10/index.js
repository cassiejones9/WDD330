// import { getJSON, getLocation } from './utilities.js';
import QuakesController from './quakesController.js';

// const quakes = getJSON(baseUrl);
// const location = getLocation();

// console.log(getJSON(baseUrl));
// console.log(location);

const newQuakeController = new QuakesController ('#quakeList');
newQuakeController.init();