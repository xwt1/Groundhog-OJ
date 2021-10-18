import React from 'react';
import ReactDOM from 'react-dom';
import {Layout, Menu, Breadcrumb} from 'antd';
import {BrowserRouter as Router, Switch, Route,Redirect} from "react-router-dom";
import NotFound from "./pages/error/error";
import App from "./pages/app/main";
import AuthPage from "./pages/auth/authpage";
const {Header, Content, Footer} = Layout;



ReactDOM.render(

        <Router>
            <Switch>
                {/*<Route path="/index" component={}/>*/}
                <Route path="/auth" component={AuthPage}/>
                <Route path="/notfound" component={NotFound}/>
                <Route path="/home" component={App}/>
            </Switch>
        </Router>

    , document.getElementById('root'));
