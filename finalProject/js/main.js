
import {psebows} from './psebows.js';

document.getElementById("findbowbutton").onclick = filterResults;

function determineLevel() {
    const levelSelected = document.getElementById("level");
    const levelValue = levelSelected.options[levelSelected.selectedIndex].value;
    return levelValue;
}

function determineType() {
    const typeSelected = document.getElementById("type");
    const typeValue = typeSelected.options[typeSelected.selectedIndex].value;
    return typeValue;
}

function determineCategory() {
    const catSelected = document.getElementById("category");
    const catValue = catSelected.options[catSelected.selectedIndex].value;
    return catValue;
}

function filterResults() {
    const level = determineLevel();
    const type = determineType();
    const category = determineCategory();
    const filteredBows = psebows.filter(bow => bow.level == level && bow.type == type && bow.category == category);
    console.log(filteredBows);
    const results = renderBows(filteredBows);
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
    resultsDiv.appendChild(results);
}

// This is just a function to get ideas on how to display the bows and the info
function renderBows(filteredBows) {
    const list = document.createElement("ul");
    filteredBows.forEach(bow => {
        const item = document.createElement("li");
        item.innerHTML = `
            <hr>
            <h3>${bow.name}</h3>
            <div><img src="${bow.imgSrc}" alt="${bow.imgAlt}" class="image"></div>
                <div class = "detail">
                    <div>
                        <h5>Draw Weight</h5>
                        <p>${bow.drawWeight}</p>
                    </div>
                    <div>
                        <h5>Draw Length</h5>
                        <p>${bow.drawLength}</p>
                    </div>
                    <div>
                        <h5>Mass Weight</h5>
                        <p>${bow.massWeight}</p>
                    </div>
                    <div>
                        <h5>Speed</h5>
                        <p>${bow.speed}</p>
                    </div> 
                    <div>
                        <h5>Axle to Axle</h5>
                        <p>${bow.axle2axle}</p>
                    </div> 
                    <div>
                        <h5>Colors Available</h5>
                        <p>${bow.color}</p>
                    </div> 
                    <div>
                        <h5>Where to buy this item:</h5>
                        <a href="${bow.url}" target="_blank" class="purchasebutton">${bow.name}</a>
                    </div>
                </div>
                `;
        list.appendChild(item);
    });
    return list;
}