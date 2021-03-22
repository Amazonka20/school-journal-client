import React, {useEffect, useState} from 'react';
import classes from '../containers/UI/style.module.css';
import Card from "../containers/UI/Card";
import {getSubjects} from "../client/serviceClient";
import {NavLink} from "react-router-dom";
import * as useToken from "../utility/useToken";

const Subjects = (props) => {

    const [subjectsFrom, setSubjectsFrom] = useState([]);

    const headers = {
        headers: {'Authorization': "Bearer " + useToken.getToken()},
    };

    useEffect(() => {
        getSubjects(setSubjectsFrom, headers);
    }, [])

    let subjectList = (
        subjectsFrom.map(element => (
            <Card
                key={element.id}
                subject={element.name}
                classroomNumber={element.room_number}
                floor={element.floor}
            />
        ))
    );

    return (
        <React.Fragment>
            <h1>Subjects</h1>
            <div className={classes.cardBox}>
                <Card
                    subject="Subject"
                    classroomNumber="Classroom number"
                    floor="Floor number"
                />
                {subjectList}
            </div>
        </React.Fragment>
    );
};

export default Subjects;