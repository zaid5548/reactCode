import React from 'react';

function MemoComp({name}){

    console.log('Memo is Invoked');
    return(
        <>
        <h1>{name}</h1>
        </>
    )
}

export default React.memo(MemoComp);