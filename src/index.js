import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import Routes from "./routes";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./redux/store";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
