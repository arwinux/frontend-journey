import React, { memo, useState } from "react";

const Greeting = memo(({ name }) => {
  console.log("Greeting was rendered at", new Date().toLocaleString());
  return <p className="text-2xl font-bold text-lime-400">Hello, {name}</p>;
});

function UseCarts() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((c) => c + 1);

  return (
    <div>
      <div className="w-100 h-50 flex flex-col gap-3 justify-center p-10 bg-blue-950 rounded-2xl">
        <div className="flex gap-2">
          <label className="text-white text-2xl font-medium" htmlFor="">
            Name :
          </label>
          {/* ----- */}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white pl-2 font-medium"
            type="text"
            name="name"
            id="name"
          />
        </div>
        {/* ----------------------------------- */}
        <div className="flex gap-2">
          <label className="text-white text-2xl font-medium" htmlFor="">
            Address :
          </label>
          {/* ----- */}
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="bg-white pl-2 font-medium"
            type="text"
            name="name"
            id="name"
          />
        </div>
        {/* ----------------------------------- */}

        <div className="flex gap-4">
          <p className="flex justify-center items-center w-6 rounded-2xl font-black text-blue-950 bg-lime-400 ">
            {counter}
          </p>
          <button
            onClick={() => increment(counter, setCounter)}
            className="bg-sky-400 cursor-pointer px-4 font-medium rounded-2xl"
          >
            Counter Plus +1
          </button>
        </div>

        <Greeting name={name} />
      </div>
    </div>
  );
}

export default UseCarts;
