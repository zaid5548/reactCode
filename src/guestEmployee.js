import React from 'react';

function Guest(props) {

    return(
        <>
        <h1>Hello Guest Employee</h1>
        <h2>Please Login</h2>
        <button onClick={props.loginHandler}>Login</button>
        </>
    );
}

export default Guest;