import {useState} from 'react';

function useCustomhook(){

    const[salary,setSalary]=useState(0);
    
    const increamentSalary=()=>{
        setSalary(salary+500);
    }
    const decrementSalary=()=>{
        setSalary(salary-500);
    }

    // return {salary,increamentSalary};
    // if you return thye valye in array
    return [salary,increamentSalary,decrementSalary];

}

export default useCustomhook;