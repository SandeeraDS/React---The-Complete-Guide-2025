export default function Button2() {
  const clickEvent = () => console.log("Clicked");
  const clickEvent2 = (name) => console.log(`${name} stop clicking me`);
  const clickEvent3 = (e) => e.target.textContent = "Checked";

  return (
    <>
      <button onClick={clickEvent}>Click me 1</button>
      <button onClick={() => clickEvent2("Sandy")}>Click me 2</button>
      <button onClick={(e) => clickEvent3(e)}>Checking Event</button>
    </>
  );
}
