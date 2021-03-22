import React, {useEffect, useState} from 'react';
import classes from '../containers/UI/style.module.css';
import {initGroups, onSelectGroup, getSubjectsList} from "../client/serviceClient";
import * as useToken from "../utility/useToken";


const Mark = (props) => {
    const [groupsList, setGroupsList] = useState([]);
    const [studentList, setStudentList] = useState([]);
    const [subjectsList, setSubjectsList] = useState([]);
    const [mark, setMark] = useState('');

    const headers = {
        headers: {'Authorization': "Bearer " + useToken.getToken()},
    };

    useEffect(() => {
        initGroups(setGroupsList, headers);
        getSubjectsList(setSubjectsList, headers);
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
        console.log(event.target.value);
    }

    return (
        <React.Fragment>
            <h1>Add mark</h1>
            <form className={classes.markForm} onSubmit={(event) => onSubmitHandler(event)}>
                <legend>Group name</legend>
                <div className="mui-select">
                    <select onChange={event => {
                        onSelectGroup(event.target.value, setStudentList, headers)
                    }}>
                        {groupListView}
                    </select>
                </div>
                <legend>Student name</legend>
                <div className="mui-select">
                    <select name="student_id" onChange={event => console.log(event.target.value)}>
                        {studentListView}
                    </select>
                </div>
                <legend>Subjects</legend>
                <div className="mui-select">
                    <select name="subject_id" onChange={event => onSubmitHandler(event)}>
                        {subjectsListView}
                    </select>
                </div>
                <legend>Mark</legend>
                <div>
                    <input name="mark" value={mark} onChange={(event) => {
                        setMark(event.target.value)
                    }}/>
                </div>
                <button type="submit" className="mui-btn mui-btn--raised">Submit</button>
            </form>

        </React.Fragment>
    );
};

export default Mark;