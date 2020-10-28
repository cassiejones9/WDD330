// const links [
//   {
//     label: "Week 1 notes",
//     url: "week1/index.html;
// }
// ]

//     const links = [
// { week: 1, label: 'Notes', url: 'week1.html', },
// { week: 2, label: 'Notes', url: 'week2.html', },
// { week: 3, label: 'Notes', url: 'week3.html', },
// ];

// const ol = document.getElementById('ol');
// links.forEach(link => {
// let li = document.createElement('li');
// let a = document.createElement('a');
// a.setAttribute('href', link.url);
// a.innerText = link.label;
// li.appendChild(a);
// ol.appendChild(li);
// });


function loadStory() {
    var storyName = document.getElementById("name_input").value;
    var storyHTML = localStorage.getItem(storyName);
    document.getElementById("story_editor").value = storyHTML;
}

function saveStory() {
    var storyName = document.getElementById("name_input").value;
    var storyHTML = document.getElementById("story_editor").value;
    localStorage.setItem(storyName, storyHTML);
}

function displayStory() {
    var storyName = document.getElementById("name_input").value;
    var storyHTML = localStorage.getItem(storyName);
    document.getElementById("story_display").innerHTML = storyHTML;
}


// Week 3 - Event Listeners
// const clickParagraph = document.getElementById('click');
// clickParagraph.addEventListener('click', () => console.log('click'));
// clickParagraph.addEventListener('mousedown', () => console.log('down'));
// clickParagraph.addEventListener('mouseup', () => console.log('up'));

// const dblclickParagraph = document.getElementById('dblclick');
// dblclickParagraph.addEventListener('dblclick', highlight);

// function highlight(event) {
//     event.target.classList.toggle('highlight');
// }

// const mouseParagraph = document.getElementById('mouse');
// mouseParagraph.addEventListener('mouseover', highlight);
// mouseParagraph.addEventListener('mouseout', highlight);

// const brokenLink = document.getElementById('broken');
// brokenLink.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log('Broken Link!');
// });

// Chapter 8, Forms
// For week 4
// console.log(document.forms);
// const form = document.forms['search'];
// // const [input,button] = form.elements;
// const input = form.elements.searchInput;
// input.addEventListener('focus', () => alert('focused'), false);


// form.addEventListener ('submit', search, false);
// function search() {
//     alert(' Form Submitted');
//     event.preventDefault();
// }

// const form = document.forms['hero'];
// form.addEventListener('submit', makeHero, false);
// function makeHero(event) {
//     event.preventDefault(); // prevent the form from being submitted
//     const hero = {}; // create an empty object
//     hero.name = form.heroName.value; // create a name property based on the input field's value
//     alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
//     return hero;
// }
