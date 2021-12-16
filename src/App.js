import React from "react";
import { Counter } from "./Component/Counter";
import { AppContext } from "./Redux/AppContextProvider";
import "./styles.css";

export default function App() {
  const { getState } = React.useContext(AppContext);

  const { counter } = getState();
  return (
    <div className="App">
      <Counter />
      <div> {counter}</div>
    </div>
  );
}
