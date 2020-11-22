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
https://pokeapi.co/api/v2/


function getPokemon(url = "https://pokeapi.co/api/v2/pokemon/ditto") {
    return getJSON(url);
}

function renderPokeList(pokemon, pokeListElement) {
    if (pokeListElement == null) return;
    let ul = document.createElement("ul");
    let variablename = document.getElementById("pokeList");
    var ulString = `
    <ul></ul>`;
    ul.innerHTML = ulString;
    variablename.appendChild(ul);
    pokemon.forEach(poke => {
        let ul = document.createElement("ul");
        let pokeListString = `
            <ul>${poke.name}</ul>`;
        ul.innerHTML = pokeListString;
        ul.theShip = poke;
        variablename.appendChild(ul);
    });
}

async function showPokeman(url) {
    // console.log(url);
    const pokeResults = await getPokemon(url);
    // console.log(shipResults);
    const pokeListElement = document.getElementById("pokeList");
    // console.log(shipListElement);
    pokeListElement.innerHTML = '';
    renderPokeList(pokeResults.results, pokeListElement);
    // console.log(renderShipList);
}