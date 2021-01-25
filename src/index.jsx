import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Album from './components/Album'
import { configureStore } from "./store";
import "./styles.css";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Album />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
