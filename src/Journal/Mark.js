import React, {useEffect, useState} from 'react';
import classes from '../containers/UI/style.module.css';
import {initGroups, onSelectGroup} from "../serviceRequest/clientService";
import * as useToken from "../utility/useToken";


const Mark = (props) => {
    const [groupsList, setGroupsList] = useState([]);
    const [studentList, setStudentList] = useState([]);

    const headers = {
        headers: {'Authorization': "Bearer " + useToken.getToken()},
    };

    useEffect(() => {
        initGroups(setGroupsList, headers);
    }, []);


    let groupListView = (
        groupsList.map(element => (
            <option key={element.id} value={element.id}>{element.name}</option>
        ))
    );


    return (
        <React.Fragment>
            <h1>Add mark</h1>
            <form className={classes.markForm}>
                <legend>Group name</legend>
                <div className="mui-select">
                    <select onChange={event => {
                        console.log(event)
                    }}>
                        {groupListView}
                    </select>
                </div>
                <div className="mui-select">
                    <select onChange={event => console.log(event.target.value)}>
                        {studentList}
                    </select>
                </div>
                <button type="submit" className="mui-btn mui-btn--raised">Submit</button>
            </form>

        </React.Fragment>
    );
};

export default Mark;