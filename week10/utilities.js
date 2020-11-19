// const url = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02";

export async function getJSON(url) {
    try {
        const response = await fetch(url);
        // console.log(response);
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            const fetchJson = await response.json();
            // console.log(fetchJson);
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

