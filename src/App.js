import React, { useState } from "react";
import "./App.css";
import WitchersInput from "./components/WitchersInput";

function App() {
  const [firstInputValue, setFirstInputValue] = useState("");

  return (
    <div className="App">
      <h1 className="counter">{firstInputValue}</h1>
      <WitchersInput
        label="Dinas Input"
        value={firstInputValue}
        setValue={setFirstInputValue}
      />
    </div>
  );
}

export default App;
