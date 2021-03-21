import React from 'react';
import classes from './style.module.css';

const Card = (props) => {
    return (
        <div className={classes.card}>
            {props.student && <span>{props.student}</span>}
            {props.lastName && <span>{props.lastName}</span>}
            {props.birth_year && <span>{props.birth_year}</span>}
            {props.group && <span>{props.group}</span>}
            {props.subject && <span>{props.subject}</span>}
            {props.mark && <span>{props.mark}</span>}
            {props.date &&  <span>{props.date}</span>}
        </div>
    );
};

export default Card;