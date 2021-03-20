import React from 'react';
import './App.css';
import Layout from "./containers/Layout/Layout";
import Objects from "./Journal/Objects";
import Login from "./Login/Login";
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Register from "./Login/Register";
import Logout from "./Login/Logout";

function App(props) {


    let routes = (
        <Switch>
            <Route path="/register" component={Register}/>
            <Route path="/" component={Login}/>
            <Redirect to="/"/>
        </Switch>
    );

    if (props.isAuth) {
        routes = (
            <Switch>
                <Route to="/logout" component={Logout}/>
                <Route to="/" component={Objects}/>
            </Switch>
        );
    }

    return (
        <div className="App">
            <Layout>
                {routes}
            </Layout>
        </div>

    );
}

export default withRouter(App);
