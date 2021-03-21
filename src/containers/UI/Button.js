import React from 'react';
import classes from "./style.module.css";

const Button = (props) => {
    return (
        <button className={classes.btn} disabled={props.disabled} onClick={props.click}>{props.children}</button>
    );
};

export default Button;