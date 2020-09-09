/*import React from 'react';

class Salary extends React.Component{
 
  render(){
    return(
      <>
      <h3>Welcome To Salary </h3>
    <h3>Employee Name: {this.props.name}</h3>
    <h5>TotalHours:{this.props.workingDay * this.props.workingHours} </h5>
    <h5>ChargrPerHour: {this.props.chargePerHour}</h5>
    <h5>TotalSalary Rs: {this.props.workingDay * this.props.workingHours * this.props.chargePerHour}</h5>
      </>
    );
  }
}

export default Salary; */




/*

// Context API in React

import React from 'react';
import {Consumer} from './context';

class Salary extends React.Component{
 
  render(){
      return(
          <>
       <h1>Salary Component</h1>
       <Consumer>
       {({salary,clickChange})=><><h2>Salaery: {salary}</h2>
       <button onClick={clickChange} >Change Salary</button>
       </>}
       </Consumer>          
       </>
      )
  }
}

export default Salary;*/




/* ****************************** */
// contextType

// Context API in React

import React from 'react';
import {MyContext} from './context';

class Salary extends React.Component{
 
static contextType=MyContext;

componentDidMount(){
  console.log(this.context);
}
  render(){
    // console.log(this.context);
    const {xyz,clickChange}=this.context;
      return(
          <>
       <h1>Salary Component</h1>
     
       <h2>Name: {xyz.name}</h2>
       <h2>Salaery: {xyz.salary}</h2>
       <button onClick={clickChange} >Change Salary</button>
               
       </>
      )
  }
}

export default Salary;
