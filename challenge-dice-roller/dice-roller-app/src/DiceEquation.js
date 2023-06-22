import React, { useState } from "react";

function DiceEquation(props) {
  const [numberOfDice, setNumberOfDice] = useState(1);
  const [result, setResult] = useState(null);

  function handleEnterNumber(num) {
    num > 0 && setNumberOfDice(num);
  }

  function rollDice() {
    let result = 0;
    for (let i = 1; i <= numberOfDice; i++) {
      result += Math.floor(Math.random() * props.diceFaces) + 1;
    }
    setResult(result);
    props.setLog(
      props.log + numberOfDice + "d" + props.diceFaces + "=" + result + "\n"
    );
  }

  return (
    <div className="equation-line">
      <h4>
        <input
          onChange={(e) => handleEnterNumber(e.target.value)}
          value={numberOfDice}
          type="number"
          min="1"
          max="40"
        />
        {props.diceFaces}d ={result}
      </h4>
      <button className="btn btn-primary" onClick={rollDice}>
        Roll
      </button>
    </div>
  );
}

export default DiceEquation;

//this exercise was solved in a buddy group of 3 students and mentor