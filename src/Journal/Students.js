import React, {useState, useEffect} from 'react';
import classes from '../containers/UI/style.module.css';
import Card from "../containers/UI/Card";
import axios from "../utility/axios-utility";

const Students = (props) => {

    const [studentsForm, setStudentsForm] = useState([]);

    useEffect(() => {
        initStudents();
    }, [])

    const initStudents = () => {
        axios.get("/students")
            .then(response => {
                setStudentsForm(response.data)
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    let journalList = (
        studentsForm.map(element => (
            <Card
                key={element.id}
                student={element.first_name}
                lastName={element.last_name}
                birth_year={element.birth_year}
                group={element.group_id}
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