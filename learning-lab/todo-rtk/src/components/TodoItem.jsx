import { useDispatch } from "react-redux";
import { deleteAsyncTodo, toggleAsyncTodo } from "../features/todo/todoSlice";

function TodoItem({ id, title, completed }) {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(toggleAsyncTodo({ id, completed: !completed }))}
      className={`${
        completed ? "bg-lime-300" : ""
      } bg-gray-100 border-1 border-slate-600 rounded-lg px-5 py-3 flex justify-between w-100 items-center cursor-pointer`}
    >
      <div className="flex gap-2">
        <input
          onChange={() =>
            dispatch(toggleAsyncTodo({ id, completed: !completed }))
          }
          checked={completed}
          className="w-4"
          type="checkbox"
          name="completed"
          id="completed"
        />
        <p
          className={`font-semibold text-break ${
            completed ? "line-through" : null
          }`}
        >
          {title}
        </p>
      </div>
      <button
        onClick={() => dispatch(deleteAsyncTodo({ id }))}
        className="bg-red-600 hover:bg-red-700 cursor-pointer transition-colors duration-200 text-white font-bold px-3 py-2 rounded-lg"
        type="button"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
