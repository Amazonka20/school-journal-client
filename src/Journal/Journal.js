import React, {useState, useEffect} from 'react';
import classes from '../containers/UI/style.module.css';
import Card from "../containers/UI/Card";
import axios from "../utility/axios-utility";

const Journal = (props) => {

    const [journalFrom, setJournalForm] = useState([]);

    useEffect(() => {
        initJournal();
    }, [])

    const initJournal = () => {
        axios.get("/journal")
            .then(response => {
                setJournalForm(response.data)
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    let journalList = (
            journalFrom.map(element => (
                <Card
                    key={element.student}
                    student={element.student}
                    group={element.group}
                    subject={element.subject}
                    mark={element.mark}
                    date={element.date}
                />
            ))
    );

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
                {journalList}
            </div>
        </React.Fragment>
    );
};

export default Journal;