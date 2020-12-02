
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
    resultsDiv.addEventListener('click', (event) => renderOneBow(children[i].getElementByTagName("h3")[0].innerHTML));
}

// This is just a function to get ideas on how to display the bows and the info
function renderBows(filteredBows) {
    let item = "";
    // const item = document.createElement("div");
    // const list = document.createElement("ul");
    filteredBows.forEach(bow => {
        item += `
            <div class="bowbox">
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
                    </div>
                </div>
                `;
        // list.appendChild(item);
    });
    return item;
}

function renderOneBow(bow) {
    let item = "";
    item.innerHTML = `
        <div class="bowbox">
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
                <div>
                    <h5>Save this item to my favorites List</h5>
                    <button onclick="${saveBow(bow.name)}" class="save">Save to Favorites</button>
                </div>
            </div>
        </div>
        `;
    return item;
}

function saveBow(bow) {
    let currentDateAndTime = new Date();
    let bowsaved = bow;
    localStorage.setItem(bowsaved);

    let desc_box = document.getElementById('description_input')
    let aNoteDescription = desc_box.value
    let text_box = document.getElementById('note_editor')
    let aNoteText = text_box.value
    let aCompleteNote = currentDateAndTime.toLocaleString() + "--"
        + aNoteDescription
    aCompleteNote += "<p>" + aNoteText + "</p>"

    let storedBows = localStorage.getItem("all_bows")
    let allBows = JSON.parse(storedBows)
    if (allBows == null) {
        allBows = []
    }
    allBows.push(aCompleteNote)
    let allBowsString = JSON.stringify(allBows)
    localStorage.setItem("all_bows", allBowsString)
    showSavedBows()
    // document.getElementById('description_input').value = null
    // document.getElementById('note_editor').value = null
    desc_box.value = null
    text_box.value = null
}

function showSavedBows() {
    let storedBows = localStorage.getItem("all_bows")
    let allBows = JSON.parse(storedBows)
    if(allBows != null) {
        let noteDisplayer = document.getElementById('all_notes_display')
        noteDisplayer.innerHTML = null
        let numberOfNotes = allNotes.length
        for (let i = 0; i < numberOfNotes; i++) {
            let aNote = allNotes[i]
            noteDisplayer.innerHTML += "<hr><p>" + aNote + "</p>"
        }
    }
}