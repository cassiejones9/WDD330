import { qs, writeToLS, readFromLS, bindTouch } from "./utils.js";
//  private code here. Not exported from the module
// we need a place to store our list of todos in memory
let liveToDos = null;

// View code here
function renderList(list, element, hidden) {
  console.log(list);
  element.innerHTML = "";

  list.forEach(toDo => {
    const item = document.createElement("li");
    const formattedDate = new Date(toDo.id).toLocaleDateString("en-US");

    item.innerHTML = `<input type="checkbox"><label>${toDo.content}</label><button>X</button>`;
    element.appendChild(item);
  });
}
function getToDos(key) {
  if (liveToDos === null) {
    // we need to go read the list from the data store
    liveToDos = readFromLS(key) || [];
  }

  return liveToDos;
}

function addToDo(value, key) {
  // use Date.now() for UTC millisecond string.
  const newToDo = {
    id: new Date(),
    content: value,
    completed: false
  };

  liveToDos.push(newToDo);
  writeToLS(key, liveToDos);
}
// this would be done last if you still have time...and if you haven't blown too many minds yet :)  If you do get here...mention how similar this method is with getToDos...they could probably be combined easily.
function filterToDos(key, completed = true) {
  let toDos = getToDos(key);

  // return a list of either completed or not completed toDos based on the parameter.
  return toDos.filter(item => item.completed === hidden);
}
function findTodo(id) {}
function completeTodo(id) {}

// public
export default class ToDos {
  constructor(listElement, key) {
    // opted to store the listElement inside the class.
    this.listElement = listElement;
    // key for localStorage saving and lookup
    this.key = key;
    // why bind here?
    bindTouch("#addToDo", this.newToDo.bind(this));
    this.listToDos();
  }

  newToDo() {
    const task = document.getElementById("todoInput");
    addToDo(task.value, this.key);
    task.value = "";
    this.listToDos();
  }

  listToDos(hidden = true) {
    renderList(getToDos(this.key), this.listElement, hidden);
  }
}
