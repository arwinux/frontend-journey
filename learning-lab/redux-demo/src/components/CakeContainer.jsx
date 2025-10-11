import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function CakeContainer() {
  //? 1. accepts a function as its parameter : selector function
  //? 2. useSelector hooks return whatever returns by selector functon

  const state = useSelector((state) => state.cake);

  //? returns a reference to the dispatch function in redux store
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  return (
    <div>
      <h2 className="text-2xl font-bold bg-lime-500 px-2 rounded-2xl mb-2">
        Cake Number : {state.numOfCakes}{" "}
      </h2>

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border-2 rounded-2xl mr-2 px-2 font-semibold text-blue-500"
        type="number"
        name="number"
        id="number"
      />

      <button
        onClick={() => dispatch(buyCake(value))}
        className="px-2 bg-blue-500 transition-all hover:bg-blue-600 cursor-pointer text-white font-bold rounded-2xl"
      >
        Buy Cake
      </button>
    </div>
  );
}

export default CakeContainer;

//? 1. How to dispatch actions
//? 2. How to access redux store
