import Counter from "./UseStateHook/Counter";
import MyComponent from "./UseStateHook/MyComponent";
import Button from "./Step1/Button/Button";
import Button2 from "./Step1/Button2/Button2";
import Card from "./Step1/Card/Card";
import Food from "./Step1/Food/Food";
import Footer from "./Step1/Footer/Footer";
import Header from "./Step1/Header/Header";
import List from "./Step1/List/List";
import Student from "./Step1/Student/Student";
import UserGreeting from "./Step1/UserGreeting/UserGreeting";
import OnChangeComp from "./OnChange/OnChangeComp";
import ColorPicker from "./ColorPicker/ColorPicker";
import MyObjComp from "./UpdateState/MyObjComp";
import MyAryComp from "./UpdateState/MyAryComp";
import MyAryOfObjectsComp from "./UpdateState/MyAryOfObjectsComp";

function App() {
  const hideStyle = {
    display: "none",
  };

  return (
    <>
      <div style={hideStyle}>
        <Header />
        <Food />
        <Card />
        <Card />
        <Card />
        <Card />
        <Button />
        <Student name="Sandy Jay" age={31} isStudent={true} />
        <Student name="Uppi Hew" age={31} isStudent={false} />
        <UserGreeting isLoggedIn={true} userName="Sandy" />
        <UserGreeting isLoggedIn={false} userName="Sandy" />
        <br />
        <List />
        <Button2 />
        <Footer />
      </div>

      <div style={hideStyle}>
        <MyComponent />
        <Counter />
        <OnChangeComp />
      </div>

      <div style={hideStyle}>
        <ColorPicker />
      </div>
      <MyObjComp />
      <MyAryComp/>
      <MyAryOfObjectsComp/>
    </>
  );
}

export default App;
