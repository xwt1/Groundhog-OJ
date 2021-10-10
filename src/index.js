import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import LoginPage from "./components/login/login";
import RegisterPage from "./components/register/register";

ReactDOM.render(
    <Router>
        <div>
            <div> this is index page</div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/login">
                        <LoginPage/>
                    </Route>
                    <Route path="/register">
                        <RegisterPage />
                    </Route>
                </Switch>
        </div>
    </Router>, document.getElementById('root'));