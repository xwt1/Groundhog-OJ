import React from 'react';
import ReactDOM from 'react-dom';
import store, {persistor} from "./redux/store";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Switch, Route,Redirect} from "react-router-dom";
import publicRoutes from "./routes/public";
import normalRoutes from "./routes/normal";
import AuthRoute from "./components/authroute/authroute";
import {PersistGate} from 'redux-persist/lib/integration/react';
import ParticlesBg from "particles-bg";
ReactDOM.render(
    <div>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
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
            </PersistGate>
        </Provider>
        <ParticlesBg type="circle" bg={true}/>
    </div>

    , document.getElementById('root'));
