import { useEffect, useRef } from "react";

export default function MyRefCompA() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("Component Rendered!");
  });

  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleClick2() {
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef1.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleClick3() {
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor = "yellow";
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
  }

  return (
    <div>
      <div>
        <button onClick={handleClick1}>Click Me1!</button>
        <input ref={inputRef1} />
      </div>
      <div>
        <button onClick={handleClick2}>Click Me2!</button>
        <input ref={inputRef2} />
      </div>
      <div>
        <button onClick={handleClick3}>Click Me3!</button>
        <input ref={inputRef3} />
      </div>
    </div>
  );
}
