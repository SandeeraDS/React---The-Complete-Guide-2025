import { useEffect, useState } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const addCount = () => {
    setCount((c) => c + 1);
  };

  const subtract = () => {
    setCount((c) => c - 1);
  };

  const changeColor = () => {
    setColor((c) => (c === "green" ? "red" : "green"));
  };

  useEffect(() => {
    document.title = `Count : ${count} ${color}`;
  }, [count, color]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("--Event Listener Added--");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("--Event Listener Removed--");
    };
  }, []);

  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={changeColor}>Change Color</button>
      <br />
      <br />
      <br />
      <p>Window Width : {width}</p>
      <p>Window Height : {height}</p>
    </>
  );
}
