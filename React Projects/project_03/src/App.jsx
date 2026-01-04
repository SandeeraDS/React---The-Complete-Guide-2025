import "./App.css";
import ComponentA from "./UserContext/ComponentA";
import ComponentC from "./UserContext/ComponentC";
import ComponentB from "./UserContext/ComponentB";
import MyRefCompA from "./UserRef/MyRefCompA";

function App() {
  return (
    <>
      <ComponentA />
      <br/>
      <br/>
      <br/>
      <br/>
      <MyRefCompA/>
    </>
  );
}

export default App;
