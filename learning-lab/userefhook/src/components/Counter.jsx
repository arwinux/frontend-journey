import React, { useRef } from "react";

function Counter() {
  let ref = useRef(0);

  const handleFucosInput = () => {
    ref.current.focus();
    ref.current.value = "Arvin Jafary";
    console.log(ref.current);
  };

  // const handleClick = () => {
  //   ref.current = ref.current + 1;
  //   alert("You clicked " + ref.current + " times");
  // };

  return (
    <div className="p-5">
      <button
        onClick={handleFucosInput}
        className="bg-fuchsia-600 mb-4 px-2 py-1 rounded-md font-medium text-2xl cursor-pointer"
      >
        Click me
      </button>

      <div>
        <label htmlFor="name">Name : </label>
        <input
          id="name"
          ref={ref}
          className="bg-sky-300 h-10 rounded-md pl-3 font-medium text-lg"
          type="text"
        />
      </div>
    </div>
  );
}

export default Counter;
