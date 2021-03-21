import React from 'react';
import Card from "../containers/UI/Card";

const Journal = (props) => {
    return (
        <div>
            <ul>
                <li>List of objects</li>
                <Card card ="Student 1"/>
                <Card card ="Student 2"/>
            </ul>
        </div>
    );
};

export default Journal;