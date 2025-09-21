import React, { use, useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCount((c) => c + 1), 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  //? clean up function

  //? what ?
  //& prevents memory leaks
  //& removes unnecessary and unwanted behaviors

  //? why to use ?
  //& The useEffect cleanup function helps developers
  //& clean effects that prevent unwanted behaviors,
  //& thereby optimizing application performance.

  //? when run ?
  //& 1.unmount component
  //& 2. before the next re-render (between re-renders)

  //? where to use ?
  //& effect => after unmount
  //& while re-rendering

  //? example
  //^ fetch API (abort signal)
  //^ timer
  //^ eventListener

  return (
    <div>
      <p className="text-lime-500 bg-lime-900 text-2xl font-bold">
        Iran Will be free until the next week {count}
      </p>
    </div>
  );
}

export default App;
