import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/store";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Switch, Route,Redirect} from "react-router-dom";
import publicRoutes from "./routes/public";
import normalRoutes from "./routes/normal";
import AuthRoute from "./components/authroute/authroute";


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                {
                    publicRoutes.map((routes,index)=>
                        <Route key={index}  {...routes}/>)
                }
                {

                    normalRoutes.map((routes,index)=>
                        <AuthRoute key={index} {...routes} />)

                }
                <Redirect to={'/notfound'}/>
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));
