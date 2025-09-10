import "./index.css";
import Header from "./assets/components/Header";
import AddNoteForm from "./assets/components/AddNoteForm";
import NoteList from "./assets/components/NoteList";
import React, { useState } from "react";
import { NotesProvider } from "./assets/context/NotesContext";

function App() {
  const [sortBy, setSortBy] = useState("completed");

  return (
    <div>
      <NotesProvider>
        <Header />
        <div className="flex flex-col gap-10 lg:flex-row justify-center lg:gap-x-10 mx-auto grid-cols-2 mt-8 p-6 max-w-5xl">
          <AddNoteForm
            sortBy={sortBy}
            onSort={(e) => setSortBy(e.target.value)}
          />
          <NoteList sortBy={sortBy} />
        </div>
      </NotesProvider>
    </div>
  );
}

export default App;
