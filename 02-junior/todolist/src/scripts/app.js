const todos = [
  {
    title: "Finish frontend challenge",
    isCompleted: false,
    createdAt: "2024-10-13"
  },
  {
    title: "Study React hooks",
    isCompleted: false,
    createdAt: "2024-12-13"
  },
  {
    title: "Workout - dumbbell routine",
    isCompleted: true,
    createdAt: "2024-03-13"
  },
  {
    title: "Review math notes",
    isCompleted: false,
    createdAt: "2024-05-13"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  fetchNotesList(todos);       // Show all at first
  addNote();              // Set up Add Note functionality
  filterNotes(todos);     // Enable dropdown filter
});

function filterNotes(todosObject) {
  const select = document.getElementById("filter");

  select.addEventListener("change", () => {
    const selectedOption = select.value;
    let filteredTodos = [];

    if (selectedOption === "all") {
      filteredTodos = todosObject;
    } else if (selectedOption === "completed") {
      filteredTodos = todosObject.filter(todo => todo.isCompleted === true);
    } else if (selectedOption === "active") {
      filteredTodos = todosObject.filter(todo => todo.isCompleted === false);
    }

    // Update the DOM with the filtered todos
    fetchNotesList(filteredTodos);
  });
}

function fetchNotesList(data = todos) {
  const todoitems = document.getElementById("todo-items");
  todoitems.innerHTML = "";

  data.forEach((note, index) => {
    const { id = index + 1, title, createdAt, isCompleted } = { ...note };
    const noteItem = document.createElement("div");

    // Fixed: Use proper conditional for completed class
    const completedClass = isCompleted ? "completed" : "";

    noteItem.innerHTML = `
          <div class="todo__item ${completedClass}" data-title="${title}">
            <div class="todo-item__contents">
              <div class="todo-item__numbertext">
                <div class="todo-item__number">${id}</div>
                <div class="todo-item__text">${title}</div>
              </div>
              <div class="todo-item__date">${createdAt}</div>
            </div>
            <div class="todo-item__actions">
              <button class="action btn todo-item__complete" type="button">✔</button>
              <button class="action btn todo-item__delete">🗑</button>
            </div>
          </div>
        `;

    todoitems.appendChild(noteItem);
  });

  // Re-attach event listeners after DOM update
  completedNote();
  deletedNote();
}

function completedNote() {
  const completeNoteBtns = document.querySelectorAll(".todo-item__complete");

  completeNoteBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const todoItem = e.target.closest(".todo__item");
      const title = todoItem.querySelector(".todo-item__text").textContent;

      // Find the corresponding todo in the array
      const todo = todos.find(note => note.title === title);
      if (todo) {
        // Toggle completion status in the array
        todo.isCompleted = !todo.isCompleted;
      }

      // Re-render the list to apply styles properly
      fetchNotesList(todos);
    });
  });
}

function deletedNote() {
  const deletedNoteBtns = document.querySelectorAll(".todo-item__delete");
  deletedNoteBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      // Get the DOM element first
      const todoElement = e.target.closest(".todo__item");
      // Get the title from the DOM element
      const todoTitle = todoElement.querySelector(".todo-item__text").textContent;

      // Remove from the todos array
      const index = todos.findIndex(note => note.title === todoTitle);
      if (index !== -1) {
        todos.splice(index, 1);
      }

      // Re-render the entire list to update numbering
      fetchNotesList(todos);
    });
  });
}

function addNote() {
  const addNoteBtn = document.getElementById("add-note-btn");
  const inputNote = document.querySelector(".todo__input-text");

  // Add click event listener
  addNoteBtn.addEventListener("click", () => {
    addNewTodo();
  });

  // Add Enter key event listener
  inputNote.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addNewTodo();
    }
  });

  function addNewTodo() {
    const title = inputNote.value.trim();

    // Don't add empty todos
    if (!title) return;

    const createdAt = new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD format
    const isCompleted = false;

    todos.push({ title, isCompleted, createdAt });
    fetchNotesList(todos);
    inputNote.value = "";
  }
}