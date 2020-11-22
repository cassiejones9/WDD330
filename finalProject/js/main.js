const psebows = [{
    name: 'Xpedite NXT',
    imgSrc: '../images/xpeditenxt.png',
    imgAlt: 'Expedite Next Compound Bow',
    drawWeight: '60, 70, 80',
    drawLength: '24.5" - 30"',
    massWeight: '4.74 lbs',
    speed: '360 fps',
    axle2axle: '33"',
    level: 'advanced',
    category: 'hunting',
    type: 'compound',
    color: 'Black, Tan, First Light Fusion, Kuiu Verde, Mossy Oak Country, Realtree Edge, Kryptek Altitude',
    url: 'https://psearchery.com/xpedite-nxt/',
},
{
    name: 'Drive XL',
    imgSrc: '../images/drivexl.png',
    imgAlt: 'Drive XL Compound Bow',
    drawWeight: '60, 70',
    drawLength: '26.5 -32"',
    massWeight: '3.9 lbs',
    speed: '327-319 fps',
    axle2axle: '33"',
    level: 'advanced',
    category: 'hunting',
    type: 'compound',
    color: 'Mossy Oak Country, Kuiu Verde, Black',
    url: 'https://psearchery.com/drive-xl/',
},
{
    name: 'Drive SD',
    imgSrc: '../images/drivesd.png',
    imgAlt: 'Drive SD Compound Bow',
    drawWeight: '40, 50',
    drawLength: '22" - 25.5"',
    massWeight: '3.7 lbs',
    speed: 'n/a',
    axle2axle: '29.5"',
    level: 'beginner',
    category: 'hunting',
    type: 'compound',
    color: 'Mossy Oak Country, Kuiu Verde, Black',
    url: 'https://psearchery.com/drive-sd/',
},
{
    name: 'Citation',
    imgSrc: '',
    imgAlt: 'Citation Compound Bow',
    drawWeight: '50, 60',
    drawLength: '28" - 33.5"',
    massWeight: '5.2 lbs',
    speed: '314 - 306 fps',
    axle2axle: '40"',
    level: 'Intermediate',
    category: 'competition',
    type: 'compound',
    color: 'White, Satin Mercury, Sky Blue, Platinum Titanium, Orange, Navy Blue, Good Vibes, Black, Black Cherry, American Flag',
    url: 'https://psearchery.com/citation/',
},
{
    name: 'Perform X',
    imgSrc: '../images/performx.png',
    imgAlt: 'Perform X Compound Bow',
    drawWeight: '50, 60',
    drawLength: '26.5" - 32"',
    massWeight: '5.2 lbs',
    speed: '332 - 324 fps',
    axle2axle: '40"',
    level: 'intermediate',
    category: 'target',
    type: 'compound',
    color: 'American Flag, Good Vibrations, Black Cherry, White, Navy Blue, Black, Platinum Titanium, *Sky Blue, *Orange, *Satin Mercury, *Premium colors additional charge',
    url: 'https://psearchery.com/perform-x/',
},
{
    name: 'Centrix LD',
    imgSrc: '../images/centrixld.png',
    imgAlt: 'Centrix LD Compound Bow',
    drawWeight: '50, 60',
    drawLength: '26.5" - 32"',
    massWeight: '3.9 lbs',
    speed: '327-319 fps',
    axle2axle: '33"',
    level: 'intermediate',
    category: 'target',
    type: 'compound',
    color: 'Platinum Titanium, Purple, Rose Gold, Black Cherry, White',
    url: 'https://psearchery.com/centrixld/',
},
{
    name: 'Supra Focus XL LD',
    imgSrc: 'suprafocusxlld.png',
    imgAlt: 'Supra Focus XL LD Compound Bow',
    drawWeight: '50, 60',
    drawLength: '28" - 33.5"',
    massWeight: '5.3 lbs',
    speed: '312-304 fps',
    axle2axle: '40"',
    level: 'intermediate',
    category: 'target',
    type: 'compound',
    color: 'American Flag, Good Vibrations, Black Cherry, White, Navy Blue, Black, Platinum Titanium, *Sky Blue, *Orange, *Satin Mercury, *Premium colors additional charge',
    url: 'https://psearchery.com/suprafocus-xl-ld/',
},
{
    name: 'Bandit NXT',
    imgSrc: '../images/banditnxt.png',
    imgAlt: 'Bandit NXT Compound Bow',
    drawWeight: '40, 50',
    drawLength: '20.5" - 26"',
    massWeight: '3.7 lbs',
    speed: '307 - 299 fps',
    axle2axle: '28"',
    level: 'beginner',
    category: 'target',
    type: 'compound',
    color: 'Kuiu Verde, Mossy Oak Country, First Lite Fusion, RealTree Edge, Black, Tan',
    url: 'https://psearchery.com/bandit-nxt/',
},
{
    name: 'Evo NXT 33',
    imgSrc: '../images/evonxt.png',
    imgAlt: 'Evo NXT 33 Compound Bow',
    drawWeight: '50, 60, 65, 70, 80',
    drawLength: '26.5" - 31.5"',
    massWeight: '4.5 lbs',
    speed: '322 - 314 fps',
    axle2axle: '33"',
    level: 'beginner',
    category: 'target',
    type: 'compound',
    color: 'Mossy Oak Country, Kuiu Verde, First Lite Fusion, RealTree Edge, Black, Tan',
    url: 'https://psearchery.com/evo-nxt-33/',
},
{
    name: 'Carbon Air Stealth Mach 1',
    imgSrc: '../images/carbonairstealth.png',
    imgAlt: 'Carbon Air Stealth Mach 1',
    drawWeight: '50, 60, 65, 70, 80',
    drawLength: '25" - 30.5"',
    massWeight: '3.5 lbs',
    speed: '332 - 324 fps',
    axle2axle: '32"',
    level: 'beginner',
    category: 'hunting',
    type: 'compound',
    color: 'Black, Kuiu Verde, Mossy Oak Country, First Lite Fusion',
    url: 'https://psearchery.com/carbon-air-stealth-mach-1/',
},
];

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
    const levelResultsAdvanced = psebows.filter(level => level == "advanced" );
    const levelResultsIntermediate = psebows.filter(level => level == "advanced" );
    const levelResultsBeginner = psebows.filter(level => level == "advanced" );
    const typeResultsCompound = psebows.filter(type => type == "compound" );
    const typeResultsRecurve = psebows.filter(type => type == "recurve" );
    const catResultsCompetition = psebows.filter(category => category == "competition" );
    const catResultsHunting = psebows.filter(category => category == "hunting" );
    const level = determineLevel();
    const type = determineType();
    const category = determineCategory();
    if (level = levelResultsAdvanced) {
        renderBows(level, type, category);
    }
}

function displayResults() {
    const level = determineLevel();
    const type = determineType();
    const category = determineCategory();
    

    // filtering would happen here
    // renderBows(); // render bows that fit that description

}


// This is just a function to get ideas on how to display the bows and the info
function renderBows() {
    const item = document.createElement("li");
    item.innerHTML = `
        <h3>${psebows.name}</h3>
        <div class="image"><img src="${psebows.imgSrc}" alt="${psebows.imgAlt}"></div>
        <div class = "detail">
          <div>
              <h5>Draw Weight</h5>
              <p>${psebows.drawWeight}</p>
          </div>
          <div>
              <h5>Draw Length</h5>
              <p>${psebows.drawLength}</p>
          </div>
          <div>
              <h5>Mass Weight</h5>
              <p>${psebows.massWeight}</p>
          </div>
          <div>
              <h5>Speed</h5>
              <p>${psebows.speed}</p>
          </div> 
          <div>
              <h5>Axle to Axle</h5>
              <p>${psebows.axle2axle}</p>
          </div> 
          <div>
              <h5>Colors Available</h5>
              <p>${psebows.color}</p>
          </div> 
        </div>
        </div>`;
    return item;
}