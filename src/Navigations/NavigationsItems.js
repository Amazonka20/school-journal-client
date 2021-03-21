import React from 'react';
import classes from '../containers/UI/style.module.css';
import {NavLink} from "react-router-dom";

const NavigationsItems = (props) => {
    return (
        <React.Fragment>
            <div className={classes.nav}>
            {props.isAuth ? <NavLink to="/logout"  className={classes.logout}>Logout</NavLink> : null}
            {props.isAuth ? <NavLink to="/students"  className={classes.logout}>Students</NavLink> : null}
            {props.isAuth ? <NavLink to="/journal"  className={classes.logout}>Journal</NavLink> : null}
            </div>
        </React.Fragment>
);
};

export default NavigationsItems;