import React from 'react';
import classes from '../containers/UI/style.module.css';
import {NavLink} from "react-router-dom";

const NavigationsItems = (props) => {
    return (
        <React.Fragment>
            {props.isAuth && <div id="sidebar" className={classes.sidebar}>
                <div className="mui--text-white mui--text-display1 mui--align-vertical">School Journal</div>
                <NavLink to="/logout" className={classes.logout}>Logout</NavLink>
                <NavLink to="/journal">Journal</NavLink>
                <NavLink to="/students">Students</NavLink>
            </div>}

        </React.Fragment>
    );
};

export default NavigationsItems;