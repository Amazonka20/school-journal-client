import React from 'react';
import classes from './style.module.css';

const Card = (props) => {
    return (
        <div className={classes.card}>
            {props.card}
        </div>
    );
};

export default Card;