import React from 'react';
import classes from '../containers/UI/style.module.css';
import Button from "../containers/UI/Button";
import {NavLink} from "react-router-dom";

const NavigationsItems = (props) => {
    return (
        <React.Fragment>
            {props.isAuth ? <NavLink to="/logout"  className={classes.logout}><Button>Logout</Button></NavLink> : null}
        </React.Fragment>
);
};

export default NavigationsItems;