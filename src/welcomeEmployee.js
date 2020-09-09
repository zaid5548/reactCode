import React from 'react';

function WelcomeEmployee(props) {
    return(
        <>
        <h1>Hello Employee Employee</h1>
        <h2>Welcome Back</h2>
        <button onClick={props.logoutHandler}>Log Out</button>
        </>
    );
}

export default WelcomeEmployee;