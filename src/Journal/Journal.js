import React, {useEffect, useState} from 'react';
import classes from '../containers/UI/style.module.css';
import Card from "../containers/UI/Card";
import {initJournal} from "../serviceRequest/clientService";

const Journal = (props) => {

    const [journalFrom, setJournalForm] = useState([]);

    useEffect(() => {
        initJournal(setJournalForm);
    }, [])

    let journalList = (
            journalFrom.map(element => (
                <Card
                    key={element.student}
                    student={element.student}
                    group={element.group}
                    subject={element.subject}
                    mark={element.mark}
                    date={element.date.substring(0, 10)}
                />
            ))
    );

    return (
        <React.Fragment>
            <h1>Journal</h1>
            <div className={classes.cardBox}>
                <Card
                    student="Student"
                    group="Group"
                    subject="Subject"
                    mark="Mark"
                    date="Date"
                />
                {journalList}
            </div>
        </React.Fragment>
    );
};

export default Journal;