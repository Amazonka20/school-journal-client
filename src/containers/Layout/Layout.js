import React from 'react';
import NavigationsItems from "../../Navigations/NavigationsItems";

const Layout = (props) => {

    const isAuthenticated = false;
    return (
        <React.Fragment>
        <NavigationsItems isAuth={isAuthenticated}/>
        <main> {props.children}</main>
        </React.Fragment>

    );
};

export default Layout;