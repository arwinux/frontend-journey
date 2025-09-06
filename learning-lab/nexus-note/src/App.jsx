import "./index.css";
import Header from "./assets/components/Header";
import AddNoteForm from "./assets/components/AddNoteForm";
import NoteList from "./assets/components/NoteList";
import React, { useReducer, useState } from "react";

function notesReducer(state, { type, payload }) {
  switch (type) {
    case "add": {
      return [...state, payload];
    }

    case "delete": {
      return state.filter((n) => n.id !== payload);
    }

    case "complete": {
      return state.map((note) =>
        note.id === payload ? { ...note, completed: !note.completed } : note
      );
    }

    default:
      return state;
  }
}

function App() {
  // const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("completed");

  const [notes, dispatch] = useReducer(notesReducer, []);

  const handleAddNote = (newNote) => {
    // setNotes((prevNotes) => [...prevNotes, newNote]);
    dispatch({ type: "add", payload: newNote });
  };

  const handleNoteDelete = (id) => {
    // setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
    dispatch({ type: "delete", payload: id });
  };

  const handleCompleteNote = (e) => {
    const noteId = Number(e.target.value);

    // setNotes((prevNotes) =>
    //   prevNotes.map((note) =>
    //     note.id === noteId ? { ...note, completed: !note.completed } : note
    //   )
    // );

    dispatch({ type: "complete", payload: noteId });
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col gap-10 lg:flex-row justify-center lg:gap-x-10 mx-auto grid-cols-2 mt-8 p-6 max-w-5xl">
        <AddNoteForm
          onAddNote={handleAddNote}
          sortBy={sortBy}
          onSort={(e) => setSortBy(e.target.value)}
        />
        <NoteList
          notes={notes}
          sortBy={sortBy}
          onDelete={handleNoteDelete}
          onComplete={handleCompleteNote}
        />
      </div>
    </div>
  );
}

export default App;
