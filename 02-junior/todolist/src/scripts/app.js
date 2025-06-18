let todos = [];
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

function addNewTodo(e) {
  e.preventDefault();

  if (!todoInput.value.trim()) return;

  const newTodo = {
    id: Date.now(),
    title: todoInput.value.trim(),
    createdAt: new Date().toISOString(),
    isCompleted: false
  };

  todos.push(newTodo);
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
            <div class="todo-item__text">${todo.title}</div>
          </div>
          <div class="todo-item__date">${new Date(todo.createdAt).toLocaleDateString('en-CA')}</div>
        </div>
        <div class="todo-item__actions">
          <button class="action btn todo-item__complete" data-todo-id=${todo.id} type="button">✔</button>
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

}

function filterTodo() {
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
  const todoId = Number(e.target.dataset.todoId);
  todos = todos.filter(t => t.id !== todoId);
  createTodos(todos);
}

function checkTodo(e) {
  const todoId = Number(e.target.dataset.todoId);
  const todo = todos.find(t => t.id === todoId);
  todo.isCompleted = !todo.isCompleted;
  filterTodo();
}