import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { HashRouter } from "react-router-dom";

import "./assets/scss/style.scss";

//app
import App from "./App";

var hist = createBrowserHistory();

ReactDOM.render(
  <HashRouter history={hist}>
    <App />
  </HashRouter>,
  document.getElementById("root"),
);
