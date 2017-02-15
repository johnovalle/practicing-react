import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Archives from "./components/Archives/Archives";
import Featured from "./components/Featured/Featured";
import Layout from "./components/Layout/Layout";
import Settings from "./components/Settings/Settings";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Featured} />
            <Route path="archives(/:article)" name="archives" component={Archives} />
            <Route path="settings" name="settings" component={Settings} />
        </Route>
    </Router>,
    app);