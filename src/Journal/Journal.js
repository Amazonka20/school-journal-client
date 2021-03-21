import React from 'react';
import classes from '../containers/UI/style.module.css';
import Card from "../containers/UI/Card";

const Journal = (props) => {

    return (
        <React.Fragment>
            <div className={classes.cardBox}>
               <Card
                   student="Student"
                   group="Group"
                   subject="Subject"
                   mark="Mark"
                   date="Date"
               />
                <Card
                    student="Ivan Ivanov"
                    group="1A"
                    subject="Math"
                    mark="10"
                    date="21.03.2021"
                />
                <Card
                    student="Sveta Ivanova"
                    group="2A"
                    subject="Math"
                    mark="5"
                    date="21.03.2021"
                />
            </div>
        </React.Fragment>
    );
};

export default Journal;