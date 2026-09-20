// const todos = [
//   {
//     id: 1789659050947,
//     title:
//       "Buy groceries for the week including fresh vegetables, seasonal fruits, dairy products, cleaning supplies, and a few snacks for the weekend guests",
//     completed: false,
//     createdAt: "2026-09-17T15:30:50.947Z",
//   },
//   {
//     id: 1789659051234,
//     title:
//       "Finish the React project dashboard, fix the remaining bugs in the authentication flow, and prepare the final build for the client demo scheduled for Friday morning",
//     completed: true,
//     createdAt: "2026-09-17T15:30:51.234Z",
//   },
//   {
//     id: 1789659051987,
//     title:
//       "Call the dentist to schedule a routine cleaning appointment before the end of the month and also ask about the follow-up checkup for the filling done last time",
//     completed: false,
//     createdAt: "2026-09-17T15:30:51.987Z",
//   },
//   {
//     id: 1789659052456,
//     title:
//       "Read 'Atomic Habits' chapter 5 carefully, highlight the most important ideas, and write down at least three key takeaways that can be applied to the daily routine",
//     completed: true,
//     createdAt: "2026-09-17T15:30:52.456Z",
//   },
//   {
//     id: 1789659053123,
//     title:
//       "Go for a 30-minute run around the park, track the distance and pace with the fitness app, and stretch properly afterward to avoid muscle soreness tomorrow",
//     completed: false,
//     createdAt: "2026-09-17T15:30:53.123Z",
//   },
// ];

let filterValue = "all";
let editingTodoId = null;

const addTodoBtn = document.querySelector("#add-todo");
const textTodoInput = document.querySelector(".note-input");
const todosContainer = document.querySelector(".todo-list");
const todoEmpty = document.querySelector(".todo-notes-empty");
const todoFilters = document.querySelector(".todo-filters");

const modal = document.querySelectorAll(".modal");
const closeModalBtn = document.querySelectorAll(".modal-close");

const todoPercent = document.querySelector(".todo-percent");

closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));

const modalEditBtn = document.querySelector(".modal-edit-btn");

modalEditBtn.addEventListener("click", todoEditModal);

const numberTodosLable = document.querySelector(".todo-count-number");

const percentBarTodo = document.querySelector(".todo-bar");

const searchInputTodo = document.querySelector(".search-input");
searchInputTodo.addEventListener("input", searchInput);

function searchInput(e) {
  const todos = getAllTodos();
  const query = e.target.value.trim().toLowerCase();
  const searchedTodos = todos.filter((t) =>
    t.title.toLowerCase().includes(query),
  );

  filterTodoHandler(searchedTodos);
}

function closeModal(e) {
  modal.forEach((m) => m.classList.add("modal-hidden"));
}

function updateFilterUI() {
  const filterBtns = document.querySelectorAll("[data-filter]");

  filterBtns.forEach((btn) => {
    const isActive = btn.dataset.filter === filterValue;
    btn.classList.toggle("active-filter", isActive);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const todos = getAllTodos();
  numberTodosLable.textContent = numberOfTodos();
  todoPercent.textContent = percentOfCompleteTodos();
  updateStatsUI();
  loadTodos(todos);
});

todoFilters.addEventListener("click", (e) => {
  filterValue = e.target.dataset.filter;
  filterTodoHandler();
  updateFilterUI();
});

addTodoBtn.addEventListener("click", addTodoHandler);

function addTodoHandler(e) {
  e.preventDefault();

  if (textTodoInput.value.trim() === "") {
    console.log("Text input is Empty");
    return;
  }

  const newTodo = {
    id: Date.now(),
    title: textTodoInput.value,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  saveTodo(newTodo);
  filterTodoHandler();
  textTodoInput.value = "";
}

function loadTodos(todos) {
  let result = "";

  if (todos.length === 0) {
    todosContainer.innerHTML = "";
    todoEmpty.classList.remove("todos-empty");
    return;
  }

  todoEmpty.classList.add("todos-empty");

  todos.forEach((item, index) => {
    const isCompleted = item.completed;

    result += `
        <div class="todo-note ">
          <div class="todo-checked flex-row">
            <button data-todo-id=${item.id} class="todo-status ${isCompleted ? "checked" : ""}"></button>
            <span class="todo-number">
              ${String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <p class="todo-description ${isCompleted ? "line-throw" : ""}">
            ${item.title}
          </p>
          <div class="divider"></div>
          <div class="todo-actions flex-row">
            <button data-todo-id=${item.id} class="todo-view">VIEW</button>
            <div class="todo-edit-delete">
              <button data-todo-id=${item.id} class="todo-edite-btn action-btn">✎</button>
              <button data-todo-id=${item.id} class="todo-delete-btn action-btn">×</button>
            </div>
          </div>
        </div>
      `;
  });

  todosContainer.innerHTML = result;

  const todoCheckBtns = document.querySelectorAll(".todo-status");
  todoCheckBtns.forEach((btn) => btn.addEventListener("click", todoCheck));

  const todoDeleteBtns = document.querySelectorAll(".todo-delete-btn");
  todoDeleteBtns.forEach((btn) => btn.addEventListener("click", todoDelete));

  const todoModalEditShowBtn = document.querySelectorAll(".todo-edite-btn");
  todoModalEditShowBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      editTodoModalBtn(e);
      openEditModal();
    });
  });

  const todoModalViewShowBtn = document.querySelectorAll(".todo-view");
  todoModalViewShowBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      viewTodoModal(e);
      openViewModal();
    });
  });
}

function numberOfTodos() {
  let todos = getAllTodos();
  return todos.length;
}

function updateBarColor(percent) {
  let colors;

  if (percent < 20) {
    colors = ["#ef4444", "#dc2626"]; // red
  } else if (percent < 40) {
    colors = ["#facc15", "#eab308"]; // yellow
  } else if (percent < 60) {
    colors = ["#3b82f6", "#2563eb"]; // blue
  } else {
    colors = ["#22c55e", "#16a34a"]; // green
  }

  percentBarTodo.style.background = `linear-gradient(90deg, ${colors[0]} 0%, ${colors[1]} 100%)`;
}

function percentOfCompleteTodos() {
  const todos = getAllTodos();
  const total = todos.length;
  if (total === 0) return 0;
  const completed = todos.filter((t) => t.completed).length;
  return Math.round((completed / total) * 100);
}

function updateStatsUI() {
  const percent = percentOfCompleteTodos();

  numberTodosLable.textContent = numberOfTodos();
  todoPercent.textContent = `${percent}%`;
  percentBarTodo.style.width = `${percent}%`;

  updateBarColor(percent); // 👈 add this
}

function openViewModal() {
  const modalView = document.querySelector(".modal-view");
  modalView.classList.remove("modal-hidden");
}

function viewTodoModal(e) {
  const todoId = Number(e.target.dataset.todoId);
  const todos = getAllTodos();
  const todoTitleModal = document.querySelector(".todo-description-view");
  const todoDateModal = document.querySelector(".modal-todo-date");

  const todo = todos.find((t) => t.id === todoId);

  todoTitleModal.textContent = todo.title;
  todoDateModal.textContent = `${todo.completed ? "completed" : "In Progress"} ${formatDate(todo.createdAt)}`;
}

function formatDate(date) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return formattedDate;
}

function openEditModal() {
  const modalEdit = document.querySelector(".modal-edite");
  modalEdit.classList.remove("modal-hidden");
}

function editTodoModalBtn(e) {
  const textEditInput = document.querySelector(".edit-input");
  editingTodoId = Number(e.target.dataset.todoId);

  const todos = getAllTodos();
  const todo = todos.find((todo) => todo.id === editingTodoId);
  textEditInput.value = todo.title;
}

function todoCheck(e) {
  let allTodos = getAllTodos();
  const todoId = Number(e.target.dataset.todoId);
  const todo = allTodos.find((t) => t.id === todoId);
  todo.completed = !todo.completed;
  setAllTodos(allTodos);
  filterTodoHandler();
}

function todoEditModal() {
  const textEditInput = document.querySelector(".edit-input");
  const todos = getAllTodos();
  const todo = todos.find((todo) => todo.id === editingTodoId);

  if (!todo) return;

  todo.title = textEditInput.value.trim();

  setAllTodos(todos);
  filterTodoHandler();
  closeModal();
}

function todoDelete(e) {
  let allTodos = getAllTodos();
  const todoId = Number(e.target.dataset.todoId);
  const todos = allTodos.filter((todo) => todo.id !== todoId);
  setAllTodos(todos);
  filterTodoHandler();
}

function filterTodoHandler(todos = getAllTodos()) {
  numberTodosLable.textContent = numberOfTodos();
  updateStatsUI();
  switch (filterValue) {
    case "all":
      loadTodos(todos);
      break;

    case "complete":
      const completedTodos = todos.filter((todo) => todo.completed);
      loadTodos(completedTodos);
      break;

    case "uncomplete":
      const unCompletedTodos = todos.filter((todo) => !todo.completed);
      loadTodos(unCompletedTodos);
      break;

    default:
      loadTodos(todos);
      break;
  }
}

function saveTodo(todo) {
  const allTodos = getAllTodos();
  allTodos.push(todo);
  localStorage.setItem("todos", JSON.stringify(allTodos));
}

function getAllTodos() {
  const allTodos = JSON.parse(localStorage.getItem("todos")) || [];
  return allTodos;
}

function setAllTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
