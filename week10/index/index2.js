async function getJSON(url) {
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


function getMovies(url = "http://example.com/movies.json") {
    return getJSON(url);
}

function renderMovieList(movies, movieListElement) {
    if (movieListElement == null) return;
    let ul = document.createElement("ul");
    let variablename = document.getElementById("movieList");
    var ulString = `
    <ul></ul>`;
    ul.innerHTML = ulString;
    variablename.appendChild(ul);
    movies.forEach(movie => {
        let ul = document.createElement("ul");
        let movieListString = `
            <ul>${moive.name}</ul>`;
        ul.innerHTML = movieListString;
        ul.theShip = movie;
        variablename.appendChild(ul);
    });
}

async function showMovies(url) {
    // console.log(url);
    const movieResults = await getMovies(url);
    // console.log(shipResults);
    const movieListElement = document.getElementById("movieList");
    // console.log(shipListElement);
    movieListElement.innerHTML = '';
    renderMovieList(movieResults.results, movieListElement);
    // console.log(renderShipList);