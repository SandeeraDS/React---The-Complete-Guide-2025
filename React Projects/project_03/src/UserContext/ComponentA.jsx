import { createContext, useState } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

export default function ComponentA() {
  const [user, setUser] = useState("Sandeera");

  return (
    <>
      <div className="box">
        <h1>Component A</h1>
        <h3>{`Hello ${user}`}</h3>
        <UserContext.Provider value={user}>
          <ComponentB />
        </UserContext.Provider>
      </div>
    </>
  );
}
