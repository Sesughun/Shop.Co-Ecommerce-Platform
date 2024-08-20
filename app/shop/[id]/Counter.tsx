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
    <div
      style={{
        border: "solid gray",
        backgroundColor: "grey",
        borderRadius: "12px",
        padding: "1.25rem",
        justifyContent: "center",
        alignContent: "center",
      }}
      className="flex gap-3"
    >
      <button onClick={handleDecrement}>-</button>
      <div>{count}</div>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
