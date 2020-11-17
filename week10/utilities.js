// const url = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02";

export async function getJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            const fetchJson = await response.json();
            return fetchJson;
        }
    } catch (error) {
        console.log(error);
    }
}

export const getLocation = function (options) {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};

// function returnJSON() {
//     const response = getJSON(url);
//     return response;
    
// }

// console.log(returnJSON());



// async function showQuakes(url) {
//     // console.log(url);
//     const weatherResults = await getWeather(url);
//     // console.log(shipResults);
//     const weatherElement = document.getElementById("quakeList");
//     // console.log(shipListElement);
//     weatherElement.innerHTML = '';
//     renderQuakeList(weatherResults.results, weatherElement);
//     // console.log(renderShipList);
// }

// showQuakes();

// export function getJSON(url) {
//     return fetch(url)
//         .then(function(response) {
//             if (!response.ok) {
//                 throw Error(response.statusText);
//             } else {
//                 // this returns the json object
//                 return response.json();
//             }
//         })
//         .catch(function(error) {
//             console.log(error);
//         });
// }


// if you want the website to be dynamic, you would use this function below
// function getWeather(url = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02") {
//     return getJSON(url);
// }



