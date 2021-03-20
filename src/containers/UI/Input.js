import React from 'react';
import classes from './style.module.css';

const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={classes.inputField}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />;
            break;
        case('select'):
            inputElement = <select
                className={classes.inputField}
                onChange={props.changed}
                value={props.value}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>;
            break;
        default:
            inputElement = <input
                className={classes.inputField}
                value={props.value}
                {...props.elementConfig}
                onChange={props.changed}/>;
    }

    return (
        <React.Fragment>
        <div className={classes.inputContainer}>
            {inputElement}
        </div>
        </React.Fragment>
    );
};

export default input;
