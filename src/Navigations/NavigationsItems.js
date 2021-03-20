import React from 'react';

const NavigationsItems = (props) => {
    return (
        <React.Fragment>
            {props.isAuth && <nav> <h1>Navigation</h1></nav>}
        </React.Fragment>
);
};

export default NavigationsItems;