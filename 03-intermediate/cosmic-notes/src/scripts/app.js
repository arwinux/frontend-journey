// Global variables
let notes = [
  {
    title: "The Genesis Protocol",
    content:
      "Welcome to the cosmic note-taking experience. This is where ideas transcend dimensions and thoughts become reality.",
    date: new Date().toLocaleDateString(),
    color: "pink",
    tag: "Work",
    completed: false,
  },
  {
    title: "Quantum Entanglement Studies",
    content:
      "Research notes on quantum mechanics and the mysterious connections that bind particles across vast distances.",
    date: new Date().toLocaleDateString(),
    color: "cyan",
    tag: "WISHLIST",
    completed: false,
  },
  {
    title: "Stellar Recipe Collection",
    content:
      "Fusion cuisine from across the galaxy. Perfect recipes for interstellar dinner parties.",
    date: new Date().toLocaleDateString(),
    color: "purple",
    tag: "PROJECTS",
    completed: false,
  },
  {
    title: "Interdimensional Meeting Log",
    content:
      "Council of Realities convened to discuss the multiverse expansion project and timeline synchronization.",
    date: new Date().toLocaleDateString(),
    color: "orange",
    tag: "ASSIGNMENT",
    completed: false,
  },
];

let editingIndex = -1; // Track which note is being edited

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
  generateStarField();
  renderNotes(notes);
  startParticleEffects();
  initColorPicker();
  handleNoteCreation();
  bindModalEvents();
  bindSearch();
});

// ⭐ Star background generator
function generateStarField() {
  const starField = document.getElementById("stars");
  if (!starField) return;

  Array.from({ length: 100 }).forEach(() => {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    starField.appendChild(star);
  });
}

// ✨ Particle effect
function startParticleEffects() {
  setInterval(() => {
    if (Math.random() < 0.1) createParticle();
  }, 200);
}

function createParticle() {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.background = `hsl(${Math.random() * 360}, 70%, 70%)`;
  document.body.appendChild(particle);
  setTimeout(() => particle.remove(), 4000);
}

// 🎨 Color picker logic
function initColorPicker() {
  const colorPickText = document.querySelector(".colorpictext");

  document.querySelectorAll(".option").forEach((option) => {
    option.addEventListener("click", () => {
      document
        .querySelectorAll(".option")
        .forEach((el) => el.classList.remove("active"));
      option.classList.add("active");

      if (colorPickText) {
        colorPickText.value = option.classList[1];
      }
    });
  });
}

// 🧼 Form reset
function clearForm() {
  document.querySelector("#form__name").value = "";
  document.querySelector("#form__textarea").value = "";
  document.querySelector("#note-tag").value = "";
  document.querySelector(".colorpictext").value = "default";
  document
    .querySelectorAll(".option")
    .forEach((el) => el.classList.remove("active"));

  // Reset form title and button
  const formTitle = document.querySelector(".form__header__title");
  const addBtn = document.querySelector(".actio-btn__add");
  const updateBtn = document.querySelector(".actio-btn__update");
  const deleteBtn = document.querySelector(".actio-btn__delete-modal");

  formTitle.textContent = "Add Note";
  addBtn.style.display = "inline-block";
  updateBtn.style.display = "none";
  deleteBtn.style.display = "none";

  editingIndex = -1;
}

// 🚪 Modal open/close
function bindModalEvents() {
  const createBtn = document.querySelector(".btn--create");
  const closeBtn = document.querySelector(".form__close-btn");
  const modal = document.querySelector(".modal");

  if (createBtn && modal) {
    createBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
      clearForm();
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
      clearForm();
    });
  }

  // Close modal when clicking outside
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      clearForm();
    }
  });
}

// 📌 Note creation and modification
function handleNoteCreation() {
  const addNoteBtn = document.querySelector(".actio-btn__add");
  const updateNoteBtn = document.querySelector(".actio-btn__update");

  // Add new note
  if (addNoteBtn) {
    addNoteBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const title = document.querySelector("#form__name").value.trim();
      const content = document.querySelector("#form__textarea").value.trim();
      const color = document.querySelector(".colorpictext").value || "blue";
      const tag = document.querySelector("#note-tag").value.trim() || "General";

      if (!title || !content) {
        alert(
          "🌟 Please fill out both title and content to create your cosmic note!"
        );
        return;
      }

      // Adding new note
      const newNote = {
        title,
        content,
        date: new Date().toLocaleDateString(),
        color,
        tag,
        completed: false,
      };
      notes.push(newNote);
      console.log("✨ Note added:", newNote);

      clearForm();
      renderNotes(notes);
      document.querySelector(".modal").classList.add("hidden");
    });
  }

  // Handle update button
  if (updateNoteBtn) {
    updateNoteBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const title = document.querySelector("#form__name").value.trim();
      const content = document.querySelector("#form__textarea").value.trim();
      const color = document.querySelector(".colorpictext").value || "blue";
      const tag = document.querySelector("#note-tag").value.trim() || "General";

      if (!title || !content) {
        alert(
          "🌟 Please fill out both title and content to update your cosmic note!"
        );
        return;
      }

      if (editingIndex !== -1) {
        // Updating existing note
        notes[editingIndex] = {
          ...notes[editingIndex],
          title,
          content,
          color,
          tag,
          date: new Date().toLocaleDateString(), // Update date when modified
        };
        console.log("🔄 Note updated:", notes[editingIndex]);

        clearForm();
        renderNotes(notes);
        document.querySelector(".modal").classList.add("hidden");
      }
    });
  }
}

// 📝 Render notes
function renderNotes(notesList) {
  const container = document.getElementById("notes-collections");
  if (!container) return;

  container.innerHTML =
    notesList
      .map(
        (note, index) => `
        <article class="note ${note.color} ${
          note.completed ? "completed" : ""
        }">
          <div class="note__header">
            <h1 class="note__title">${note.title}</h1>
            <p class="note__date">Start date: ${note.date}</p>
            <div class="note__tag"># ${note.tag}</div>
          </div>
          <div class="note__caption">${note.content}</div>
          <div class="note__footer">
            <div class="note__actions">
              <button class="actio-btn action-btn__modify" data-index="${index}">Modify</button>
              <button class="actio-btn action-btn__update" data-index="${index}">${
          note.completed ? "Undo" : "Done"
        }</button>
            </div>
          </div>
        </article>
      `
      )
      .join("") +
    `
        <article class="note add-note" id="add-note">
          <div class="add-note__icon">🌟</div>
          <p class="add-note__text">Open Portal to New Dimension</p>
        </article>`;

  attachNoteActions();
}

// 🎯 Modify & Done handlers + Add New Note
function attachNoteActions() {
  // Add new note functionality
  document.querySelector("#add-note")?.addEventListener("click", () => {
    document.querySelector(".modal").classList.remove("hidden");
    clearForm();
  });

  // Handle Done/Undo button
  document.querySelectorAll(".action-btn__update").forEach((btn) =>
    btn.addEventListener("click", () => {
      const index = parseInt(btn.dataset.index);
      notes[index].completed = !notes[index].completed;
      renderNotes(notes);

      // Show completion notification
      const notification = document.createElement("div");
      notification.textContent = notes[index].completed
        ? "✨ Note marked as completed!"
        : "🔄 Note marked as incomplete!";
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #4ecdc4, #44a08d);
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        z-index: 1001;
        font-weight: bold;
        animation: slideIn 0.3s ease-out;
      `;

      document.body.appendChild(notification);
      setTimeout(() => {
        notification.remove();
      }, 3000);
    })
  );

  // Modify note functionality
  document.querySelectorAll(".action-btn__modify").forEach((btn) =>
    btn.addEventListener("click", () => {
      const index = parseInt(btn.dataset.index);
      const note = notes[index];

      if (note) {
        // Populate form with existing note data
        document.querySelector("#form__name").value = note.title;
        document.querySelector("#form__textarea").value = note.content;
        document.querySelector("#note-tag").value = note.tag;
        document.querySelector(".colorpictext").value = note.color;

        // Set active color option
        document.querySelectorAll(".option").forEach((option) => {
          option.classList.remove("active");
          if (option.classList.contains(note.color)) {
            option.classList.add("active");
          }
        });

        // Update modal for editing
        const formTitle = document.querySelector(".form__header__title");
        const addBtn = document.querySelector(".actio-btn__add");
        const updateBtn = document.querySelector(".actio-btn__update");
        const deleteBtn = document.querySelector(".actio-btn__delete-modal");

        formTitle.textContent = "Modify Note";
        addBtn.style.display = "none";
        updateBtn.style.display = "inline-block";
        deleteBtn.style.display = "inline-block";

        editingIndex = index;

        // Show modal
        document.querySelector(".modal").classList.remove("hidden");

        console.log("🔄 Modifying note at index:", index);
      }
    })
  );

  // Delete (Done) note functionality in main list
  document.querySelectorAll(".action-btn__delete").forEach((btn) =>
    btn.addEventListener("click", () => {
      const index = parseInt(btn.dataset.index);

      if (
        confirm(
          "🌟 Are you sure you want to send this note to the cosmic void? This action cannot be undone!"
        )
      ) {
        const deletedNote = notes.splice(index, 1)[0];
        renderNotes(notes);
        console.log("🗑️ Note deleted:", deletedNote);

        // Show a brief confirmation
        const notification = document.createElement("div");
        notification.textContent = "✨ Note sent to the cosmic archives!";
        notification.style.cssText = `
              position: fixed;
              top: 20px;
              right: 20px;
              background: linear-gradient(45deg, #4ecdc4, #44a08d);
              color: white;
              padding: 15px 25px;
              border-radius: 25px;
              box-shadow: 0 8px 25px rgba(0,0,0,0.3);
              z-index: 1001;
              font-weight: bold;
              animation: slideIn 0.3s ease-out;
            `;

        document.body.appendChild(notification);
        setTimeout(() => {
          notification.remove();
        }, 3000);
      }
    })
  );

  // Delete note functionality in modal
  const modalDeleteBtn = document.querySelector(".actio-btn__delete-modal");
  if (modalDeleteBtn) {
    modalDeleteBtn.onclick = function () {
      if (editingIndex !== -1) {
        if (
          confirm(
            "🌟 Are you sure you want to send this note to the cosmic void? This action cannot be undone!"
          )
        ) {
          const deletedNote = notes.splice(editingIndex, 1)[0];
          renderNotes(notes);
          document.querySelector(".modal").classList.add("hidden");
          clearForm();
          console.log("🗑️ Note deleted via modal:", deletedNote);

          // Show a brief confirmation
          const notification = document.createElement("div");
          notification.textContent = "✨ Note sent to the cosmic archives!";
          notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(45deg, #4ecdc4, #44a08d);
                color: white;
                padding: 15px 25px;
                border-radius: 25px;
                box-shadow: 0 8px 25px rgba(0,0,0,0.3);
                z-index: 1001;
                font-weight: bold;
                animation: slideIn 0.3s ease-out;
              `;

          document.body.appendChild(notification);
          setTimeout(() => {
            notification.remove();
          }, 3000);
        }
      }
    };
  }
}

// 🔍 Live search
function bindSearch() {
  const input = document.querySelector(".input__search");
  if (!input) return;

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase().trim();

    if (query === "") {
      renderNotes(notes);
    } else {
      const filtered = notes.filter(
        (note) =>
          note.title.toLowerCase().includes(query) ||
          note.content.toLowerCase().includes(query) ||
          note.tag.toLowerCase().includes(query)
      );
      renderNotes(filtered);
    }
  });
}

// Add some CSS animations
const style = document.createElement("style");
style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `;
document.head.appendChild(style);
