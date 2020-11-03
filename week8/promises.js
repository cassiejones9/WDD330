// Helper function
async function getJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            const fetchJson = await resonpse.json();
            return fetchJson;
        }
    } catch (error) {
        console.log(error);
    }
}

// pulls all the ships
function getShips(url = "https://swapi.dev/api/starships/") {
    return getJSON(url);
}

// takes the ships, makes a list of all of them
function renderShipList(ships, shipListElement) {
    const list = shipListElement.children[1];
    list.innerHTML = "";
    ships.forEach(function (ship) {
        let listItem = document.createElement("tr");
        listItem.innerHTML = `
        <td><a href="${ship.url}">${ship.name}</a></td>
        <td>${ship.length}</td>
        <td>${ship.crew}</td>
        `;
        listItem.addEventListener("click", function (e) {
            e.preventDefault();
            getShipDetails(ship.url);
        });
        list.appendChild(listItem);
    });
}

// this is a stretch goal
function renderShipDetails(shipData) {
    console.log(shipData);
}

// uses Prev and Next buttons to show next set and previous set
async function showShips(url = "https://swapi.dev/api/starships/") {
    const shipResults = await getShips(url);
    const shipListElement = document.getElementById("shipList");
    renderShipList(results.results, shipListElement);
    if (results.next) {
        const next = document.getElementById("next");
        next.ontouchend = () => {
            showShips(data.next);
        };
    }
    if (results.previous) {
        const prev = document.getElementById("prev");
        prev.ontouchend = () => {
            showShips(data.previous);
        };
    }
}

// stretch goal, get the details when you click on a ship
async function getShipDetails(url) {
    const ship = await getShips(url);
    renderShipDetails(ship);
}