// const links [
//   {
//     label: "Week 1 notes",
//     url: "week1/index.html;
// }
// ]

    
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
