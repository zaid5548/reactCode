/*import React from 'react';
import Department from './department';
import Salary from './salary';
import { Form,Button,Container } from 'react-bootstrap';
// import  'boostrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
class Employee extends React.Component{
 constructor(props){
   super(props);
   this.state={
    name:'Pradeep',
    workingDay:26,
    workingHours:8,
    chargePerHour:10,
    totalSalary:''
  }
 }
 changeNameHandler=(e)=>{
    const name=e.target.value;
    this.setState({name:name});
 }

 changeWorkDaysHandler=(e)=>{
    const workDays=e.target.value;
    this.setState({workingDay:workDays});
 }

  render(){
    return(
      <Container>
          <h2>Employee Details</h2>
     <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Employee Name</Form.Label>
    <Form.Control type="txt" value={this.state.name} placeholder="Enter Employee Name" onChange={this.changeNameHandler} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>WorkingDay</Form.Label>
    <Form.Control type="txt" value={this.state.workingDay} placeholder="Enter the WorkingDay" onChange={this.changeWorkDaysHandler} />
  </Form.Group>
  
  <Form.Group controlId="formBasicPassword">
    <Form.Label>WorkingHours</Form.Label>
    <Form.Control type="txt" placeholder="Enter the WorkingHours" />
  </Form.Group>
  
  <Form.Group controlId="formBasicPassword">
    <Form.Label>ChargePerHours</Form.Label>
    <Form.Control type="txt" placeholder="Enter the ChargePerHours" />
  </Form.Group>
  
  <Form.Group controlId="formBasicPassword">
    <Form.Label>TotalHours</Form.Label>
    <Form.Control type="txt" placeholder="TotalHours" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        <Department name={this.state.name} workingDay= {this.state.workingDay} workingHours={this.state.workingHours}/>
        <Salary name={this.state.name} workingDay= {this.state.workingDay} workingHours={this.state.workingHours} chargePerHour= {this.state.chargePerHour}/>
      </Container>
    );
  }
}

export default Employee;*/


/*
// Composition vs Inheritance

import React from 'react';

class Employee extends React.Component{
    render(){
        return(
            <>
            <h1>Employee Details</h1>
        <h2>Employee Name: {this.props.name}</h2>
            <h2>Employee ID: {this.props.empId}</h2>
            <h2>Employee Salry: {this.props.salary}</h2>
            </>
        )
    }
}

export default Employee;
*/




/*

// Context API in React

import React from 'react';
import Department from './department';
class Employee extends React.Component{
 
  render(){
      return(
          <>
       <h1>Employee Component</h1>
       <Department/>
          </>
      );
  }
}

export default Employee;
*/





/*
// Error Boundaries in ReactJS



import React from 'react';

class Employee extends React.Component{
 
  render(){
    
      return(
          <>
       <h1>Employee Details</h1>
      <h2>Name: Zaid Khan</h2>
        <h2>Profile: Web Developer</h2>
          </>
      )
  }
}

export default Employee;*/


// Strict Mode in ReactJS


import React from 'react';

class Employee extends React.Component{

  UNSAFE_componentWillMount(){
    console.log('Employee Component ')
  }
 
  render(){
    
      return(
          <>
       <h1>Employee Details</h1>
      <h2>Name: Zaid Khan</h2>
        <h2>Profile: Web Developer</h2>
          </>
      )
  }
}

export default Employee;