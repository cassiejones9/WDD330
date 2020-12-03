
import { bows } from './bows.js';

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
    const filteredBows = bows.filter(bow => bow.level == level && bow.type == type && bow.category == category);
    // console.log(filteredBows);
    const results = renderBows(filteredBows);
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
    resultsDiv.innerHTML = results;
    // console.log(resultsDiv);
    // console.log(resultsDiv.querySelectorAll(".bowbox1"));
    // console.log(resultsDiv.getElementsByTagName("h3")[1].innerHTML);
    // console.log(resultsDiv.getElementsByTagName("h3")[0].innerHTML);
    let newArray = resultsDiv.querySelectorAll(".bowbox1");
    for (var i=0; i <newArray.length; i++){
        console.log(newArray[i].getElementsByTagName("h3")[0].innerHTML);
        let bowname = newArray[i].getElementsByTagName("h3")[0].innerHTML;
        newArray[i].addEventListener('click', (event) => renderOneBow(bowname));
    }
    
}

// This is just a function to get ideas on how to display the bows and the info
function renderBows(filteredBows) {
    let item = "";
    filteredBows.forEach(bow => {
        item += `
            <div class="bowbox1">
                <h3>${bow.name}</h3>
                <div><img src="${bow.imgSrc}" alt="${bow.imgAlt}" class="image"></div>
                    <div class = "detail">
                        <div>
                            <h5>Draw Weight</h5>
                            <p>${bow.drawWeight}</p>
                        </div>
                        <div>
                            <h5>Mass Weight</h5>
                            <p>${bow.massWeight}</p>
                        </div>
                        <div>
                            <h5>Axle to Axle</h5>
                            <p>${bow.axle2axle}</p>
                        </div> 
                        <div>
                            <h4>Click Here for More Information</h4>
                        </div>
                    </div>
                </div>
                `;
        // list.appendChild(item);
    });
    return item;
}

function renderOneBow(bowname) {
    let specificBow = bows.filter(bow => bow.name == bowname);
    let item = "";
    item += `
        <div class="bowbox2">
        <h3>${specificBow[0].name}</h3>
        <div><img src="${specificBow[0].imgSrc}" alt="${specificBow[0].imgAlt}" class="image"></div>
            <div class = "detail">
                <div>
                    <h5>Draw Weight</h5>
                    <p>${specificBow[0].drawWeight}</p>
                </div>
                <div>
                    <h5>Draw Length</h5>
                    <p>${specificBow[0].drawLength}</p>
                </div>
                <div>
                    <h5>Mass Weight</h5>
                    <p>${specificBow[0].massWeight}</p>
                </div>
                <div>
                    <h5>Speed</h5>
                    <p>${specificBow[0].speed}</p>
                </div> 
                <div>
                    <h5>Axle to Axle</h5>
                    <p>${specificBow[0].axle2axle}</p>
                </div> 
                <div>
                    <h5>Colors Available</h5>
                    <p>${specificBow[0].color}</p>
                </div> 
                <div>
                    <h5>Where to buy this item:</h5>
                    <a href="${specificBow[0].url}" target="_blank" class="purchasebutton">${specificBow[0].name}</a>
                </div>
                <div>
                    <h5>Save this item to my favorites List</h5>
                    
                </div>
            </div>
        </div>
        `;
        let resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = "";
        resultsDiv.innerHTML = item;
}

// function saveBow(bow) {
//     let currentDateAndTime = new Date();
//     let bowsaved = document.getElementById(bow).value;
//     localStorage.setItem(bowsaved);

//     let allBows = JSON.parse(storedBows);
//     if (allBows == null) {
//         allBows = []
//     }
//     allBows.push();
//     let allBowsString = JSON.stringify(allBows);
//     localStorage.setItem("all_bows", allBowsString);
//     showSavedBows();

// }

// function showSavedBows() {
//     let storedBows = localStorage.getItem("all_bows");
//     let allBows = JSON.parse(storedBows);
//     if(allBows != null) {
//         let favoritesDisplayed = document.getElementById('favorites');
//         favoritesDisplayed.innerHTML = "";
//         let numberOfNotes = allNotes.length;
//         for (let i = 0; i < numberOfNotes; i++) {
//             let aNote = allNotes[i]
//             favoritesDisplayed.innerHTML += "<hr><p>" + aNote + "</p>"
//         };

//     };
// }
// <button onclick="${saveBow($bow.name)}" class="save">Save to Favorites</button>