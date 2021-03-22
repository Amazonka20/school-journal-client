import React, {useEffect, useRef, useState} from 'react';
import classes from '../containers/UI/style.module.css';
import Input from '@material-ui/core/Input';
import {getGroups, getStudents, getSubjects} from "../client/serviceClient";
import * as useToken from "../utility/useToken";
import axios from "../utility/axios-utility";


const Mark = (props) => {
    const [groupsList, setGroupsList] = useState([]);
    const [studentList, setStudentList] = useState([]);
    const [subjectsList, setSubjectsList] = useState([]);
    const [mark, setMark] = useState('');
    const [validationMessage, setValidationMessage] = useState('');

    const subjectId = useRef(null);
    const studentId = useRef(null);
    const markNumber = useRef(null);

    const headers = {
        headers: {'Authorization': "Bearer " + useToken.getToken()},
    };

    useEffect(() => {
        getGroups(setGroupsList, headers);
        getSubjects(setSubjectsList, headers);
    }, []);


    let groupListView = (
        groupsList.map(element => (
            <option key={element.id} value={element.id}>{element.name}</option>
        ))
    );

    let studentListView = (
        studentList.map(element => (
            <option key={element.id} value={element.id}>{`${element.first_name}  ${element.last_name}`}</option>
        ))
    );

    let subjectsListView = (
        subjectsList.map(element => (
            <option key={element.id} value={element.id}>{element.name}</option>
        ))
    );

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const data = {
            subject_id: subjectId.current.value,
            student_id: studentId.current.value,
            mark: markNumber.current.value,
        }

        if (!data.mark || !data.subject_id || !data.student_id) {
            setValidationMessage("All fields are mandatory");
            return;
        }

        if (!Number.isInteger(Number.parseInt(data.mark)) || data.mark < 1 || data.mark > 10) {
            setValidationMessage("Mark value must be a number from 1 to 10");
            return;
        }

        axios.post("/journal", data, headers)
            .then(response => {
                }
            )
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <React.Fragment>
            <h1>Add mark</h1>
            <h3 style={{color: 'red'}}>{validationMessage}</h3>
            <form className={classes.markForm} onSubmit={(event) => onSubmitHandler(event)}>
                <legend>Group name</legend>
                <div className="mui-select">
                    <select onChange={event => {
                        getStudents(event.target.value, setStudentList, headers)
                    }}>
                        <option value=""></option>
                        {groupListView}
                    </select>
                </div>
                <legend>Student name</legend>
                <div className="mui-select">
                    <select ref={studentId}>
                        {studentListView}
                    </select>
                </div>
                <legend>Subjects</legend>
                <div className="mui-select">
                    <select ref={subjectId}>
                        {subjectsListView}
                    </select>
                </div>
                <legend>Mark</legend>
                <div className={classes.input}>
                    <input className="MuiInput-input" ref={markNumber} value={mark} onChange={(event) => {
                        setMark(event.target.value)
                    }}/>
                </div>
                <button type="submit" className="mui-btn mui-btn--raised">Submit</button>
            </form>

        </React.Fragment>
    );
};

export default Mark;