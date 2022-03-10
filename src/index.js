import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import {
    Route,
    Switch,
    HashRouter
} from "react-router-dom";

import './assets/scss/style.scss';

// pages for this product
import ProjectGreen from "./views/project-green/projectgreen.jsx";
import SignInComponent from "./components/sign-in.component/sign-in.component";

//app
import App from './app'

var hist = createBrowserHistory();

ReactDOM.render(
    <HashRouter history={hist}>
        <App />
    </HashRouter>,
    document.getElementById("root")
);
