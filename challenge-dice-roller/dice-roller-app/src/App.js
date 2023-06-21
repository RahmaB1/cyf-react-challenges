import "./App.css";
// import { useState } from "react";
import DiceEquation from "./DiceEquation";

function App() {
  return (
    <div className="App">
      <DiceEquation diceFaces={4} />
      <DiceEquation diceFaces={6} />
      <DiceEquation diceFaces={8} />
      <DiceEquation diceFaces={10} />
      <DiceEquation diceFaces={100} />
      <DiceEquation diceFaces={12} />
      <DiceEquation diceFaces={20} />
    </div>
  );
}

export default App;
