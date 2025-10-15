import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncTodos } from "../features/todo/todoSlice";

function TodoList() {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncTodos());
  }, []);

  if (loading) return <span className="loader"></span>;
  if (error) return <p className="font-bold">{error} !!!</p>;

  return (
    <div className="flex gap-4 flex-col justify-center items-start">
      <h2 className="font-bold text-xl w-100">Todo List</h2>
      {loading ? (
        <span className="loader"></span>
      ) : error ? (
        <p className="font-bold">{error} !!!</p>
      ) : (
        <div className="flex flex-col gap-2">
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TodoList;
