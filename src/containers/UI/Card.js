import React from 'react';
import classes from './style.module.css';

const Card = (props) => {
    return (
        <div className={classes.card}>
            <span>{props.student}</span>
            <span>{props.group}</span>
            <span>{props.subject}</span>
            <span>{props.mark}</span>
            <span>{props.date}</span>
        </div>
    );
};

export default Card;