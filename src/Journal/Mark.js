import React, {useEffect, useState, useRef} from 'react';
import classes from '../containers/UI/style.module.css';
import {getGroups, getStudents, getSubjects} from "../client/serviceClient";
import * as useToken from "../utility/useToken";
import axios from "../utility/axios-utility";


const Mark = (props) => {
    const [groupsList, setGroupsList] = useState([]);
    const [studentList, setStudentList] = useState([]);
    const [subjectsList, setSubjectsList] = useState([]);
    const [mark, setMark] = useState('');

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
        axios.post("/journal", data, headers)
            .then(response => {
                    console.log(response)
                }
            )
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <React.Fragment>
            <h1>Add mark</h1>
            <form className={classes.markForm} onSubmit={(event) => onSubmitHandler(event)}>
                <legend>Group name</legend>
                <div className="mui-select">
                    <select onChange={event => {
                        getStudents(event.target.value, setStudentList, headers)
                    }}>
                        {groupListView}
                    </select>
                </div>
                <legend>Student name</legend>
                <div className="mui-select">
                    <select ref={studentId} onChange={event => console.log(event.target.value)}>
                        {studentListView}
                    </select>
                </div>
                <legend>Subjects</legend>
                <div className="mui-select">
                    <select ref={subjectId} onChange={event => onSubmitHandler(event)}>
                        {subjectsListView}
                    </select>
                </div>
                <legend>Mark</legend>
                <div>
                    <input ref={markNumber} value={mark} onChange={(event) => {
                        setMark(event.target.value)
                    }}/>
                </div>
                <button type="submit" className="mui-btn mui-btn--raised">Submit</button>
            </form>

        </React.Fragment>
    );
};

export default Mark;