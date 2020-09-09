/*import React from 'react';

class Department extends React.Component{
 
  render(){
    return(
      <>
      <h3>Welcome To Department </h3>
    <h5>Name: {this.props.name}</h5>
    <h5>WorkingDay: {this.props.workingDay}</h5>
    <h5>WorkingHour: {this.props.workingHours}</h5>
      </>
    );
  }
}

export default Department; */

// Context API in React

import React from 'react';
import Salary from './salary';
class Department extends React.Component{
 
  render(){
      return(
          <>
       <h1>Department Component</h1>
       <Salary/>
          </>
      );
  }
}

export default Department;
