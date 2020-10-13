//create an array of hikes
const hikeList = [
    {
        name: "Bechler Falls",
        imgSrc: "bechler.jpg",
        imgAlt: "Image of Bechler Falls",
        distance: "3.5 miles",
        difficulty: "Easy",
        description:
            "Beautiful short hike along the Bechler river to Bechler Falls",
        directions:
            "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
    },
    {
        name: "Teton Canyon",
        imgSrc: "teton.jpg",
        imgAlt: "Image of Teton Canyon",
        distance: "3 miles",
        difficulty: "Easy",
        description: "Beautiful short (or long) hike through Teton Canyon.",
        directions:
            "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Stateline Road for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
    },
    {
        name: "Denanda Falls",
        imgSrc: "denanda.jpg",
        imgAlt: "Image of Bechler Falls",
        distance: "7 miles",
        difficulty: "Moderate",
        description:
            "Beautiful hike through Bechler meadows river to Denanda Falls",
        directions:
            "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
    }
];

const imgBasePath = "../images/";
//on load grab the array and insert it into the page on load

// function showHikeList() {
//     const listElement = document.getElementById("hikes");
//     listElement.innerHTML = "";
//     hikeList.forEach(hike => {
//         listElement.appendChild(renderOneHikeLight(hike));
//     });
// }

// function createHike(hike) {
//     //   li holds everything
//     const item = document.createElement("li");
//     const img = document.createElement("img");
//     console.dir(img);
//     img.alt = hike.imgAlt;
//     img.src = hike.imgSrc;
//     const title = document.createElement("h2");
//     title.innerText = hike.name;
//     item.appendChild(img);
//     item.appendChild(title);
//     return item;
// }

function renderHikeList(parent, hikes){
    hikes.forEach(hike => {
        parent.appendChild(renderOneHikeLight(hike));
    });
}

function renderOneHikeLight(hike) {
    const item = document.createElement("li");
    item.classList.add('light');
    item.setAttribute('data-name', hike.name);
    item.innerHTML = ` <h2>${hike.name}</h2>
    <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
    <div>
            <div>
                <h3>Distance</h3>
                <p>${hike.distance}</p>
            </div>
            <div>
                <h3>Difficulty</h3>
                <p>${hike.difficulty}</p>
            </div>
    </div>`;

    item.addEventListener("touchend", event => {
        console.dir(event);
        console.dir(event.currentTarget);
        const hikeName = event.currentTarget.children[0].innerText;
        console.log(hikeName);
        renderOneHikeFull(hikeName);
    })

    return item;
}

function renderOneHikeFull(hikeName) {
    const listElement = document.getElementById("hikes");
    listElement.innerHTML = "";
    const hike = hikeList.find(item => item.name == hikeName);
    listElement.appendChild(renderHikeFull(hike));

    return listElement;
}

function renderHikeFull(hike) {
    const item = document.createElement("li");
    item.innerHTML = `
        <img src="${hike.imgSrc}" alt = "${hike.imgAlt}">
        <h2>${hike.name}</h2>
        <div>
            <h3>Distance</h3>
            <p>${hike.distance}</p>
        </div>
        <div>
            <h3>Difficulty</h3>
            <p>${hike.difficulty}</p>
        </div>
        <div>
            <h3>Description</h3>
            <p>${hike.description}</p>
        </div>
        <div>
            <h3>How To Get There</h3>
            <p>${hike.directions}</p>
        </div>


      `;
      return item;
}


function buildBackButton() {
        const backButton = document.createElement("button");

        return backButton;
    }



