import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./counter.css";

const CounterHook = () => {
  const { state, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1>Counter with hook: {state}</h1>
      <hr />

      <button onClick={increment} className="btn btn-success">
        +1
      </button>
      <button onClick={reset} className="btn btn-warning">
        reset
      </button>
      <button onClick={decrement} className="btn btn-danger">
        -1
      </button>
    </div>
  );
};

export default CounterHook;
