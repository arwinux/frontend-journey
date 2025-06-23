// let todos = [];

let filterValue = "all";

const todoInput = document.querySelector(".todo__input-text");
const todoForm = document.querySelector(".todo__form");
const todoItems = document.querySelector(".todo__items");
const selectFilter = document.querySelector(".todo__filter-button")



todoForm.addEventListener("submit", addNewTodo);
selectFilter.addEventListener("change", e => {
  filterValue = e.target.value;
  filterTodo();
});

document.addEventListener("DOMContentLoaded", (e) => {
  const todos = getAllTodos();
  createTodos(todos);
});

function addNewTodo(e) {
  e.preventDefault();

  if (!todoInput.value.trim()) return;

  const newTodo = {
    id: Date.now(),
    title: todoInput.value.trim(),
    createdAt: new Date().toISOString(),
    isCompleted: false
  };

  // todos.push(newTodo);
  saveTodo(newTodo);
  filterTodo();


}

function createTodos(todos) {
  let result = "";
  todos.forEach((todo, index) => {
    result += `
<div class="todo__item ${todo.isCompleted && "completed"}">
  <div class="todo-item__contents">
    <div class="todo-item__numbertext">
      <div class="todo-item__number">${index + 1}</div>
      <p class="todo-item__text">${todo.title}</p>
    </div>
    <p class="todo-item__date">${new Date(todo.createdAt).toLocaleDateString('en-CA')}</p>
  </div>
  <div class="todo-item__actions">
    <button class="action btn todo-item__complete" data-todo-id=${todo.id} type="button">✔</button>
    <button class="action btn todo-item__edit" data-todo-id=${todo.id} type="button">✎</button>
    <button class="action btn todo-item__delete" data-todo-id=${todo.id} type="button">🗑</button>
  </div>
</div>
`;
  });

  todoItems.innerHTML = result;
  todoInput.value = "";

  const removeBtns = [...document.querySelectorAll(".todo-item__delete")];
  removeBtns.forEach((btn) => btn.addEventListener("click", removeTodo));

  const checkBtns = [...document.querySelectorAll(".todo-item__complete")];
  checkBtns.forEach((btn) => btn.addEventListener("click", checkTodo));

  const showModalEditBtns = [...document.querySelectorAll(".todo-item__edit")];
  showModalEditBtns.forEach((btn) => btn.addEventListener("click", editTode));

}

function filterTodo() {

  let todos = getAllTodos();

  switch (filterValue) {
    case "all": {
      createTodos(todos);
      break;
    }
    case "completed": {
      const filteredTodos = todos.filter(t => t.isCompleted === true);
      createTodos(filteredTodos);
      break;
    }
    case "uncompleted": {
      const filteredTodos = todos.filter(t => t.isCompleted === false);
      createTodos(filteredTodos);
      break;
    }
    default: createTodos(todos);

  }
}

function removeTodo(e) {
  let todos = getAllTodos();
  const todoId = Number(e.target.dataset.todoId);
  todos = todos.filter(t => t.id !== todoId);
  saveAllTodo(todos);
  filterTodo();
}

function checkTodo(e) {
  const todos = getAllTodos();
  const todoId = Number(e.target.dataset.todoId);
  const todo = todos.find(t => t.id === todoId);
  todo.isCompleted = !todo.isCompleted;
  saveAllTodo(todos);
  filterTodo();
}

function editTode(e) {
  let todos = getAllTodos();
  const modalNote = document.querySelector(".modal__note");

  const todoId = Number(e.target.dataset.todoId);
  const todo = todos.find(t => t.id === todoId);
  modalNote.value = "";
  modalNote.value = todo.title;
  console.log(todo);



  const showModal = document.querySelector(".modal").classList;
  const closeModal = document.querySelector(".todo-item__close");
  closeModal.addEventListener("click", () => { showModal.add("hidden") })

  if (showModal.contains("hidden")) {
    showModal.remove("hidden");
  };

  const editBtn = document.querySelector(".modal-item__edit");
  editBtn.addEventListener("click", () => {
    todo.title = modalNote.value;
    todo.createdAt = new Date(todo.createdAt).toLocaleDateString('en-CA');
    saveAllTodo(todos);
    filterTodo();
    showModal.add("hidden");
  });


}

// localStorage => web Api

function getAllTodos() {
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  return savedTodos;
}

function saveTodo(todo) {
  const savedTodos = getAllTodos();
  savedTodos.push(todo);
  localStorage.setItem("todos", JSON.stringify(savedTodos))
  return savedTodos;
}

function saveAllTodo(todos) {
  localStorage.setItem("todos", JSON.stringify(todos))
}


