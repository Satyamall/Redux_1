import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { store } from "./Redux/store";
import App from "./App";
import { AppContextProvider } from "./Redux/AppContextProvider";

console.log(store.getState());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AppContextProvider store={store}>
      <App />
    </AppContextProvider>
  </StrictMode>,
  rootElement
);
