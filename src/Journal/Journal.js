import React, {useEffect, useState} from 'react';
import classes from '../containers/UI/style.module.css';
import Card from "../containers/UI/Card";
import {getJournal} from "../client/serviceClient";
import {NavLink} from "react-router-dom";
import * as useToken from "../utility/useToken";

const Journal = (props) => {

    const [journalFrom, setJournalForm] = useState([]);

    const headers = {
        headers: {'Authorization': "Bearer " + useToken.getToken()},
    };

    useEffect(() => {
        getJournal(setJournalForm, headers);
    }, [])

    let journalList = (
        journalFrom.map(element => (
            <Card
                key={element.journal_id}
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
                <div className={classes.mark}>
                    <NavLink to="/mark">Add mark to journal</NavLink>
                </div>
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