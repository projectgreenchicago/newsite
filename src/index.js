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
import ProjectGreen from "./views/project-green/project-green.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
    <HashRouter history={hist}>
        <Switch>
            <Route path="/" component={ProjectGreen} />
        </Switch>
    </HashRouter>,
    document.getElementById("root")
);
