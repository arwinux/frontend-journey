import React from "react";
import Message from "./Message";
import { useNotes } from "../context/NotesContext";

function NoteStatus() {
  const notes = useNotes();
  const allnotes = notes.length;

  let completedNotes = notes.filter((note) => note.completed).length;
  let pendingNote = notes.filter((note) => !note.completed).length;

  if (!allnotes)
    return (
      <Message>
        <span>
          There are <strong>no</strong> valuable <strong>Notes</strong> now
        </span>
      </Message>
    );

  return (
    <ul className="flex flex-col sm:flex-row gap-y-2 sm:gap-0 justify-between items-start sm:items-center sm:w-full mx-auto">
      <li className="font-semibold text-[14px] flex justify-center items-center gap-2">
        All
        <span className="bg-gray-300 flex text-slate-700 font-bold px-1.5 py-1 rounded-full">
          {allnotes}
        </span>
      </li>
      <li className="font-semibold text-[14px] flex justify-center items-center gap-2">
        Completed
        <span className="bg-gray-300 flex text-slate-700 font-bold px-1.5 py-1 rounded-full">
          {completedNotes}
        </span>
      </li>
      <li className="font-semibold text-[14px] flex justify-center items-center gap-2">
        Pending
        <span className="bg-gray-300 flex text-slate-700 font-bold px-1.5 py-1 rounded-full">
          {pendingNote}
        </span>
      </li>
    </ul>
  );
}

export default NoteStatus;
