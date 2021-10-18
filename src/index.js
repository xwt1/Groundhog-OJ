import React from 'react';
import ReactDOM from 'react-dom';
import {Layout, Menu, Breadcrumb} from 'antd';

import {BrowserRouter as Router, Switch, Route,Redirect} from "react-router-dom";
import LoginPage from "./pages/login/login";
import RegisterPage from "./pages/register/register";
import NotFound from "./pages/error/error";
import UserPage from "./pages/app/main";
import ProblemList from "./components/problemlist/problemList";
import App from "./pages/app/main";
import * as path from "path";
const {Header, Content, Footer} = Layout;



ReactDOM.render(

        <Router>
            <Switch>
                {/*<Route path="/index" component={}/>*/}
                <Route path="/login" component={LoginPage}/>
                <Route path="/notfound" component={NotFound}/>
                <Route path="/home" component={App}/>
            </Switch>
        </Router>

    , document.getElementById('root'));
