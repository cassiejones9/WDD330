import ToDos from './todo.js';

const list = document.getElementById('todoList');
window.myToDos = new ToDos(list, 'todo');

window.addEventListener('load', function(event) {
  window.myTodos.listToDos();
 });