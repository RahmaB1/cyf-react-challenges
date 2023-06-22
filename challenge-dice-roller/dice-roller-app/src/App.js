import "./App.css";
import { useState } from "react";
import DiceEquation from "./DiceEquation";

function App() {
  const [log, setLog] = useState("");

  return (
    <div className="block">
      <h2>Dice Roller</h2>
      <div className="container">
        <div className="left">
          <DiceEquation diceFaces={4} setLog={setLog} log={log} />
          <DiceEquation diceFaces={6} setLog={setLog} log={log} />
          <DiceEquation diceFaces={8} setLog={setLog} log={log} />
          <DiceEquation diceFaces={10} setLog={setLog} log={log} />
          <DiceEquation diceFaces={100} setLog={setLog} log={log} />
          <DiceEquation diceFaces={12} setLog={setLog} log={log} />
          <DiceEquation diceFaces={20} setLog={setLog} log={log} />
        </div>
        <div>
          <textarea value={log} className="right">
            {" "}
          </textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
