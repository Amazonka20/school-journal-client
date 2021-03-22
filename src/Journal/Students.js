import React, {useEffect, useState} from 'react';
import classes from '../containers/UI/style.module.css';
import Card from "../containers/UI/Card";
import {initStudents} from '../client/serviceClient';

const Students = (props) => {

    const [studentsForm, setStudentsForm] = useState([]);

    useEffect(() => {
        initStudents(setStudentsForm);
    }, [])

    let journalList = (
        studentsForm.map(element => (
            <Card
                key={element.id}
                student={element.first_name}
                lastName={element.last_name}
                birth_year={element.birth_year}
                group={element.group_name}
            />
        ))
    );

    return (
        <React.Fragment>
            <h1>List of Students</h1>
            <div className={classes.cardBox}>
                <Card
                    student="First Name"
                    lastName="Last Name"
                    birth_year="Birth Year"
                    group="Group"
                />
                {journalList}
            </div>
        </React.Fragment>
    );
};

export default Students;