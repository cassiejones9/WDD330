// import { ls } from './ls.js';

const comments = [{
    name: hikeList.name,
    date: Date.now(),
    content: "",
}]

export default class Comments {
    constructor(elementId) {
        this.parentElement = document.getElementById(elementId);
        // we need a back button to return back to the list. This will build it and hide it. When we need it we just need to remove the 'hidden' class
        this.backButton = this.buildBackButton();
    }


    getAllComments() {

    }

    // A method to add an event listener to the submit button.
    submitButton() {

    }

    filterCommentsByName() {

    }

    addComment() {

    }


}


function renderCommentList(hike){

}
