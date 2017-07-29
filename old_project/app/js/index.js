import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Favorites from "./components/Favorites/Favorites";
import Todos from "./components/Todos/Todos";
import Layout from "./components/Layout/Layout";
import Settings from "./components/Settings/Settings";

const app = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Todos} />
            <Route path="favorites(/:id)" name="favorites" component={Favorites} />
            <Route path="settings" name="settings" component={Settings} />
        </Route>
    </Router>,
    app);