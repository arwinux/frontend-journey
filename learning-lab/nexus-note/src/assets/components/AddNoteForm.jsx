import React, { useState } from "react";
import SortNote from "./SortNote";
import { useNotesDispatch } from "../context/NotesContext";

function AddNoteForm({ sortBy, onSort }) {
  const dispatch = useNotesDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return null;

    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    dispatch({ type: "add", payload: newNote });
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="lg:w-1/3 w-full hover:scale-[103%] transition-all flex flex-col gap-7 text-zinc-300 p-8 bg-gray-800 ring-4 ring-gray-800 ring-offset-4 ring-offset-[#EBE3D5] rounded-2xl"
    >
      <h2 className="text-3xl font-bold text-center ">Add New Note</h2>

      <div>
        <label className="text-xl text-[#bbb295] font-bold" htmlFor="title">
          Title
        </label>

        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="w-full text-gray-800 focus:ring-0 border-2 border-[#B0A695] font-medium bg-[#EBE3D5] px-4 py-2 mt-2 rounded-lg outline-none "
          placeholder="Spark your idea here"
          type="text"
          name="title"
          id="title"
          autoComplete="off"
        />
      </div>

      <div>
        <label
          className="text-xl text-[#bbb295] font-bold"
          htmlFor="description"
        >
          Description
        </label>

        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="w-full text-gray-800 h-32 focus:ring-0 border-2 border-[#B0A695] font-medium bg-[#EBE3D5] px-4 py-2 mt-2 rounded-lg outline-none"
          placeholder="Let your ideas flow freely and in detail..."
          name="description"
          id="description"
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-4">
        <button
          className="w-full text-[17px] ring-0 hover:scale-105 transition-all text-[#3C3D37] font-bold tracking-tight cursor-pointer rounded-xl border-1 shadow-2xl border-[#3C3D37] py-2 bg-[#D2DE32]"
          type="submit"
        >
          Add New Note
        </button>

        <SortNote sortBy={sortBy} onSort={onSort} />
      </div>
    </form>
  );
}

export default AddNoteForm;
