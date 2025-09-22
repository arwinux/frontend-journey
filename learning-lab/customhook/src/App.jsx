import React from "react";
import StatusBar from "./components/StatusBau";
import SaveButton from "./components/SaveButton";

function App() {
  return (
    <div className="h-screen flex flex-col gap-2 justify-center items-center">
      <StatusBar />
      <SaveButton />
    </div>
  );
}

export default App;
