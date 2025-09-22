import React, { useReducer, useState } from "react";

const INITIAL_STATE = 10;

function countReducer(state, { type, payload }) {
  switch (type) {
    case "inc":
      return state + payload;

    case "dec":
      return state - payload;

    case "res":
      return INITIAL_STATE;

    default:
      return state; // always return the current state if action type is unknown
  }
}

function Counter() {
  // const [counter, setCounter] = useState(0);
  const [count, dispatch] = useReducer(countReducer, INITIAL_STATE);

  const handleInc = () => {
    dispatch({ type: "inc", payload: 5 }); // what action to trigger
  };

  const handleRes = () => {
    dispatch({ type: "res" });
  };

  const handleDec = () => {
    dispatch({ type: "dec", payload: 3 });
  };

  //? useReducer :
  //~ 1. call useReducer
  //~ 2. move logic to reducer function
  //~ 3. dispatch action inside eventHandlers =>  what action happend
  //~ 4. write logic inside reducer function based on each action
  //~ 5. return new data state inside action as new state

  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl text-center font-semibold bg-slate-800 text-white px-2 py-1 rounded-md">
        {count}
      </p>

      <div className="flex gap-2">
        <button
          onClick={handleDec}
          className="text-2xl font-semibold bg-rose-500 hover:bg-rose-400 duration-300 w-12 rounded-md cursor-pointer"
        >
          -
        </button>

        <button
          onClick={handleRes}
          className="text-lg font-semibold bg-sky-400 hover:bg-sky-300 duration-300 px-2 rounded-md cursor-pointer"
        >
          Reset
        </button>

        <button
          onClick={handleInc}
          className="text-2xl font-semibold bg-lime-500 hover:bg-lime-400 duration-300 w-12 rounded-md cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
