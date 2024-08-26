import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div className="flex space-3">
      <button onClick={handleDecrement}>-</button>
      <div>{count}</div>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
