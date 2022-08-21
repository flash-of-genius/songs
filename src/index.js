import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStoreHook } from "react-redux";
import App from "./components/App";
import reducers from "./reducers";

ReactDOM.render(
  <Provider store={createStoreHook(reducers)}>
    <App />
  </Provider>,

  document.querySelector("#root"),
);
