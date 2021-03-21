import React from 'react';
import NavigationsItems from "../../Navigations/NavigationsItems";
import {connect} from 'react-redux';

const Layout = (props) => {

    return (
        <React.Fragment>
        <NavigationsItems isAuth={props.isAuthenticated}/>
        <main> {props.children}</main>
        </React.Fragment>

    );
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.login.token != null,
    }
}

export default connect(mapStateToProps)(Layout);