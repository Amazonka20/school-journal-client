import React, {useEffect} from 'react';
import {logout} from '../store/action';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const Logout = (props) => {

    useEffect(() => {
        props.onLogout();
    }, [props]);

    return (
        <Redirect to='/'/>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);