import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import App from "./pages/App";



//should import bootstrap but using from cdn...

const app = document.getElementById('app');
ReactDOM.render(
    <Router>
        <App />
    </Router>, app);