import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import "./index.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
