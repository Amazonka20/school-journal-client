import React, {useState} from 'react';
import './App.css';
import Layout from "./containers/Layout/Layout";
import Journal from "./Journal/Journal";
import Login from "./Login/Login";
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Register from "./Login/Register";
import Logout from "./Login/Logout";
import useToken from './utility/useToken';


function App(props) {

    const [token, setToken] = useState('');


    let routes = (
        <Switch>
            <Route path="/register" component={Register}/>
            <Route to="/" render={() => <Login setToken={setToken}/>}/>
        </Switch>
    );

    if (token) {
        routes = (
            <Switch>
                <Route to="/journal" component={Journal}/>
                <Route to="/logout" component={Logout}/>
                <Redirect to="/"/>
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
