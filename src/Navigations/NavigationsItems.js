import React from 'react';
import classes from '../containers/UI/style.module.css';
import {NavLink} from "react-router-dom";

const NavigationsItems = (props) => {
    const activeStyle = {
        backgroundColor: "rgba(165,66,66,0.74)",
    };

    return (
        <React.Fragment>
            {props.isAuth && <div id="sidebar" className={classes.sidebar}>
                <div className="mui--text-white mui--text-display1 mui--align-vertical">School Journal</div>
                <NavLink to="/logout" className={classes.logout}>Logout</NavLink>
                <NavLink to="/journal" activeStyle={activeStyle}>Journal</NavLink>
                <NavLink to="/subjects" activeStyle={activeStyle}>Subjects</NavLink>
                <NavLink to="/students" activeStyle={activeStyle}>Students</NavLink>
            </div>}

        </React.Fragment>
    );
};

export default NavigationsItems;