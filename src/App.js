import React, {useEffect} from 'react';
import './App.css';
import Layout from "./containers/Layout/Layout";
import Journal from "./Journal/Journal";
import Login from "./Login/Login";
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Register from "./Login/Register";
import Logout from "./Login/Logout";
import {connect} from 'react-redux';
import {authCheckState} from "./store/action";

function App(props) {

    const {onTryAutoSignup} = props;

    useEffect(() => {
        onTryAutoSignup();
    }, [onTryAutoSignup])

    let routes = (
        <Switch>
            <Route path="/register" component={Register}/>
            <Route to="/" component={Login}/>
            <Redirect to="/"/>
        </Switch>
    );

    if (props.isAuth) {
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

const mapStateToProps = (state) => {
    return {
        isAuth: state.login.token != null,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(authCheckState())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
