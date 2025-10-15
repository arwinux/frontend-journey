import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAsyncTodo } from "../features/todo/todoSlice";

function AddTodoForm() {
  const [value, setValue] = useState("");
  const { loading } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    dispatch(addAsyncTodo({ title: value }));
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3">
        <div className="flex w-100">
          <label
            className="bg-gray-400  text-white px-2 py-1 font-semibold"
            htmlFor="title"
          >
            Title
          </label>
          <input
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="Ente the Title"
            className="w-100 border-2 px-2 py-1 border-gray-400"
            type="text"
            name="title"
            id="title"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-sky-600 text-white font-bold py-2 rounded-lg cursor-pointer"
        >
          {!loading ? "Submit" : "Submiting..."}
        </button>
      </div>
    </form>
  );
}

export default AddTodoForm;
