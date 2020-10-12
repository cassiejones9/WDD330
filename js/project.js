// function addNewItem() {
//     const listItem = document.createElement("li");
//     const newItem = document.getElementById("newItem");
//     const t = document.createTextNode(newItem);
//   listItem.appendChild(t);
//   if (newItem === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("listItems").appendChild(listItem);
//   }
//   document.getElementById("newItem").value = "";

//   const span = document.createElement("SPAN");
//   const txt = document.createTextNode("\u00D7");
// //   span.className = "close";
//   span.appendChild(txt);
//   listItem.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }

// class ToDoModel {
//     constructor(key) {
//       // key for localStorage saving and lookup
//       this.key = key;
//       // try and read from localStorage to see if there are any pre-existing todos...otherwise set the list to an empty array
//       this.toDos = readFromLS(this.key) || [];
//     }
//     getToDos() {
//       // make sure the stored list of toDos matches what is in localstorage. Do we really need to do this? Maybe not.
//       this.toDos = readFromLS(this.key);
//       //check to make sure we found something...mention that maybe this error checking may be better done in the readFromLS function
//       if (!this.toDos) {
//         this.toDos = [];
//       }
//       return this.toDos;
//     }
//     // this would be done last if you still have time...and if you haven't blown too many minds yet :)  If you do get here...mention how similar this method is with getToDos...they could probably be combined easily.
//     filterToDos(completed = true) {
//       this.toDos = readFromLS(this.key);
//       // return a list of either completed or not completed toDos based on the parameter.
//       return this.toDos.filter(item => item.completed === hidden);
//     }
//     addToDo(value) {
//       // use Date.now() for UTC millisecond string.
//       const newToDo = {
//         id: new Date(),
//         content: value,
//         completed: false
//       };
//       this.toDos.push(newToDo);
//       writeToLS(this.key, this.toDos);
//     }
//     findTodo(id) {}
//     completeTodo(id) {}
//   }
//   function writeToLS(key, data) {
//     // we can use JSON.stringify to convert our object to a string that can be stored in localStorage.
//     window.localStorage.setItem(key, JSON.stringify(data));
//   }
  
//   function readFromLS(key) {
//     // the string we retrieve from localStorage needs to be converted back to an object with JSON.parse
//     return JSON.parse(window.localStorage.getItem(key));
//   }
  
//   // Controller
//   export default class ToDoController {
//     constructor(listElement) {
//       // opted to store the listElement inside the class.
//       this.listElement = listElement;
//       // create a new instance of our model and add it to the controller.
//       this.toDoModel = new ToDoModel('todo');
//       this.listToDos();
//     }
  
//     newToDo(value) {
//       this.toDoModel.addToDo(value);
//       this.listToDos();
//     }
  
//     listToDos(hidden = true) {
//       renderList(this.toDoModel.getToDos(), this.listElement, hidden);
//     }
//   }
//   // View code here
//   function renderList(list, element, hidden) {
//     console.log(list);
//     element.innerHTML = '';
  
//     list.forEach(toDo => {
//       const item = document.createElement('li');
//       const formattedDate = new Date(toDo.id).toLocaleDateString('en-US');
  
//       item.innerHTML = `${formattedDate}: ${toDo.content}`;
//       element.appendChild(item);
//     });
//   }
  
  // Another model for OOP in Javascript is factory functions.  This is an example of the todoModel as a factory function
  // factory function
  // function ToDoModel(key) {
  //   const readFromLS = function(key) {
  //     return JSON.parse(window.localStorage.getItem(key));
  //   };
  //   const writeToLS = function(key, data) {
  //     window.localStorage.setItem(key, JSON.stringify(data));
  //   };
  //   let toDos = readFromLS(key) || [];
  //   return {
  //     get: function() {
  //       return toDos;
  //     },
  //     add: function(value) {
  //       // use Date.now() for UTC millisecond string.
  //       const newToDo = {
  //         id: new Date(),
  //         content: value,
  //         completed: false
  //       };
  //       toDos.push(newToDo);
  //       writeToLS(key, toDos);
  //     }
  //   };
  // }
  // const myToDos = ToDoModel('todo');


function addNewItem() {
    const listItem = form.addNewItem.value;
     
}