import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState(0);
  const [selectedAction, setSelectedAction] = useState(null);

  function inputNum(e) {
    var input = e.target.value;

    if (num == 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear(e) {
    setNum(0);
    setSelectedAction(null);
  }

  function porcentage() {
    setNum(num / 100);
  }

  function changePosNeg() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function operationHandler(e) {
    var operatorInput = e.target.value;
    setSelectedAction(operatorInput);
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    setSelectedAction(null);
    if (operator === "/") {
      setNum(parseFloat(oldNum) / parseFloat(num));
    } else if (operator === "x") {
      setNum(parseFloat(oldNum) * parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldNum) + parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldNum) - parseFloat(num));
    }
  }

  return (
    <div className="container">
      <h1 className="result">{num}</h1>
      <button onClick={clear}>AC</button>
      <button onClick={changePosNeg}>+/-</button>
      <button onClick={porcentage}>%</button>
      <button
        className={`orange-button ${
          selectedAction === "/" ? "clicked-action" : ""
        }`}
        onClick={operationHandler}
        value={"/"}
      >
        /
      </button>
      <button className="gray-button" onClick={inputNum} value={7}>
        7
      </button>
      <button className="gray-button" onClick={inputNum} value={8}>
        8
      </button>
      <button className="gray-button" onClick={inputNum} value={9}>
        9
      </button>
      <button
        className={`orange-button ${
          selectedAction === "x" ? "clicked-action" : ""
        }`}
        onClick={operationHandler}
        value={"x"}
      >
        x
      </button>
      <button className="gray-button" onClick={inputNum} value={4}>
        4
      </button>
      <button className="gray-button" onClick={inputNum} value={5}>
        5
      </button>
      <button className="gray-button" onClick={inputNum} value={6}>
        6
      </button>
      <button
        className={`orange-button ${
          selectedAction === "-" ? "clicked-action" : ""
        }`}
        onClick={operationHandler}
        value={"-"}
      >
        -
      </button>
      <button className="gray-button" onClick={inputNum} value={1}>
        1
      </button>
      <button className="gray-button" onClick={inputNum} value={2}>
        2
      </button>
      <button className="gray-button" onClick={inputNum} value={3}>
        3
      </button>
      <button
        className={`orange-button ${
          selectedAction === "+" ? "clicked-action" : ""
        }`}
        onClick={operationHandler}
        value={"+"}
      >
        +
      </button>
      <button className="gray-button button-zero" onClick={inputNum} value={0}>
        0
      </button>
      <button className="gray-button" onClick={inputNum} value={"."}>
        .
      </button>
      <button className={"orange-button"} onClick={calculate}>
        =
      </button>
    </div>
  );
}
