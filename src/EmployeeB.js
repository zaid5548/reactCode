import React, { useState, useEffect } from 'react';



function EmployeeB() {

    const [plants, setPlants] = useState({});
    const [hasError, setError] = useState(false);

    useEffect(() => {
        console.log('data fetched');
        async function fetchData() {
            const res = await fetch("https://swapi.cp/api/plants/");
            res
                .json()
                .then(res => setPlants(res))
                .catch(err => setError(err));
        }
        fetchData();
    },[plants]);

    return (
        <div>
            <span>{JSON.stringify(plants)}</span>
            <hr></hr>   
            <span>Has error: {JSON.stringify(hasError)}</span>
            {/* <h1>Employee From Function Component</h1> */}
        </div>
    )
}

export default EmployeeB;