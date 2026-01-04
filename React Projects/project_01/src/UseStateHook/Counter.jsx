import { useState } from "react";
import moduleStyle from "./Hook.module.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className={moduleStyle.counterContainer}>
        <p className={moduleStyle.countDisplay}>{count}</p>
        <button className={moduleStyle.counterButton} onClick={decrement}>
          Decrement
        </button>
        <button className={moduleStyle.counterButton} onClick={reset}>
          Reset
        </button>
        <button className={moduleStyle.counterButton} onClick={increment}>
          Increment
        </button>
      </div>
    </>
  );
}
