// import React from 'react';
// import ReactDOM from 'react-dom';
// import Header from './header';
// import Footer from './footer';
// import Form from './form';
// Prop Validation importing
// import PropTypes from 'prop-types';
// Mounting Life Cyle
// import Employee2 from './Employee2';

// Pure Component in ReactJs
// import RegularComponent from './regularComp';
// import PureComponent from './PureComp';

// Memo Component
// import MemoComp from './memo';

/*ReactDOM.render(
  <div>
    <header>What is Your Name</header>
    <h1>Hello, Sir! My Name is Zaid Khan</h1>
  <footer>Copyright@KhanClasses</footer>
  </div>,
  document.getElementById('root')
);*/


//functional component
/*function Header(){
  return <h1>This is functional Header</h1>;
} */


// Class component
/*class Header extends React.Component{
  render(){
    return <h1>This is class Component</h1>;
  }
}*/


/*ReactDOM.render(<Header/>,
  document.getElementById('root')
  );
*/

// if use separate-2 file so ...

// function Content(){
//   return(
//     <div>
//       <Header/>
//         <Footer/>
//         <Form/>
//     </div>
//   );
// }

// ReactDOM.render(<Content/>,
//   document.getElementById('root')
//   );

// Props concept

// function component
/*function Employee(props){
return(<div> 
  <h1>Hello Employee</h1>
  <h1>Your Name: {props.name}</h1>
  <h1>Your EmpId: {props.empId}</h1>
  <h1>Your Profile Position: {props.position}</h1>
<h1>Your RollNumber: {props.rollNum}</h1>
 </div>)
}*/




//class component
/*class Employee extends React.Component{
  render(){
    return(<div>
      <h1>Hello Employee</h1>
  <h1>Your Name: {this.props.name}</h1>
  <h1>Your EmpId: {this.props.empId}</h1>
  <h1>Your Profile Position: {this.props.position}</h1>
<h1>Your RollNumber: {this.props.rollNum}</h1>
    </div>)
  }
}  

ReactDOM.render(<Employee name="Zaid Khan" empId='1002' rollNum='23' position='Web Developer(MERN Stack)'/>,
  document.getElementById('root'));*/

// passing information from Parent component to child component


/*// Parent Component
class Parent extends React.Component{
  render(){
    return(
      <div>
        <h2>You are inside Parent component</h2>
        <h3>Your Name:{this.props.pname}</h3>
        <h3>You EMployee Id: {this.props.pempId}</h3>
        <Child name="Zaid Khan" empId='1001'/>
      </div>
    );
  }
}

// Child Component
class Child extends React.Component{
  render(){
    return (
      <div>
        <h2>You are Inside Child component</h2>
    <h3>Your Name: {this.props.name}</h3>
    <h3>Your Employee Id: {this.props.empId}</h3>
      </div>
    );
  }
}

Parent.defaultProps={
  pname:"Rohit Singh",
  pempId:'23002'
}

ReactDOM.render(<Parent pname="Deepak" />,
  document.getElementById('root'));*/

/* // Prop Validation 

 class Employee extends React.Component{
   render(){
     return(
       <div>
         <h2>Your Name is: {this.props.name}</h2>
         <h2>Your EMployee Id is: {this.props.empId}</h2>
       </div>
     )
   }
 }

Employee.propsTypes={
  name:PropTypes.string.isRequired,
  empId:PropTypes.number.isRequired,
}

 ReactDOM.render(<Employee name='zaid Khan' empId={3214}/>,
   document.getElementById('root')
 );*/


/*// Fragments in ReactJS

class Employee extends React.Component{
  render(){
    return(
      <React.Fragment>
        <h2>Your Name: {this.props.name}</h2>
        <h2>Your EmpId: {this.props.empId}</h2>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Employee name="Zaid khan" empId='1703310249'/>,
document.getElementById('root'));*/

/*// State in Reacr Component

class Employee extends React.Component{
  render(){
    return(
      <>
        <h2>Your name: {this.props.name}</h2>
      </>
    ); 
  }
}

ReactDOM.render(<Employee name="Zaid Khan"/>,
document.getElementById('root'));*/


/*// State Directly Inside Class in React Component

class Employee extends React.Component{
  // state class use
  state={
    name:'Zaid1 Khan',
    empId:this.props.empId
  }
  render(){
    return(
      <>
        <h2>Your Name: {this.state.name}</h2>
        <h2>Your Id: {this.props.empId}</h2>
      </>
    );
  }
}

ReactDOM.render(<Employee empId='1003'/>,
document.getElementById('root'));*/


/*// State Inside the Consructor

class Employee extends React.Component{
  constructor(props){
    super(props);
      this.state={
        name:this.props.name,
        count:this.props.count,
      }
      this.clickme=this.clickme.bind(this);
      this.clickmeToDec=this.clickmeToDec.bind(this);
      this.resetCount=this.resetCount.bind(this);
  }

  clickme(){
    let  count=this.state.count;
    let  name=this.state.name;
    if(count===1){
      name="Pradeep Khanna";
    }
    if(count===2){
      name="Deepak";
    }
    if(count===3){
      name="Raju ban gaya gental man";
    }
    if(count===4){
      name="Mohan Sharma";
    }
    if(count>=5){
      name="Name is Not Change After Increases count 5";
    }

    this.setState({count:++count});
    this.setState({name:name});
  }
  clickmeToDec(){
    this.count=this.state.count;
    this.setState({count:--this.count});
  }
  resetCount(){
    this.count=this.state.count;
    this.setState({count:0});
  }
  render(){
    return(
      <>
        <h2>Your Name: {this.state.name}</h2>
        <h1>Total Click: {this.state.count}</h1>
        <button onClick={this.clickme}>Click Me</button>
        <button onClick={this.clickmeToDec}>Click Me to count Decrease</button>
        <button onClick={this.resetCount}>Click Me To reset All Count</button>
      </>
    );
  }
}

ReactDOM.render(<Employee name='Zaid Khan' count='0'/>,
document.getElementById('root'));*/


// Event Handling in React

/*// Using Function Component
function Employee(){
  return(
    <>
    <h1>Hello! Employee</h1>
    <button onClick={clickMe}>Click Me</button>
    </>
  );
}

function clickMe(){
  alert("Welcome To Zaid Khan");
}

ReactDOM.render(<Employee/>,
  document.getElementById("root"));*/


/*  // Using class Component

  class Employee extends React.Component{
    constructor(props){
       super(props);
       this.state={
         count:this.props.count,
         name:this.props.name,
       }
       this.clickMe=this.clickMe.bind(this);
       this.decCount=this.decCount.bind(this);
       this.resetCount=this.resetCount.bind(this);
    }
    clickMe(){
      let count=this.state.count;
      let name=this.state.name;
      if(count===2){
        name="Predeep Kumar";
      }
      if(count===3){
        name="deepak Kumar";
      }
      if(count===4){
        name="Ali Mohammed";
      }
      if(count>=5){
        name="Name is not Change After Count Increase limit";
      }
      this.setState({count:++count});
      this.setState({name:name});
    }
    decCount(){
      let count=this.state.count;

      this.setState({count:--count});
    }
    resetCount(){
      this.count=this.state.count;
      this.setState({count:0});
    }
    render(){
      return(
        <>
        <h1>Hello Employee Khan </h1>
      <h1>Count: {this.state.count}</h1>
      <h2>Name: {this.state.name}</h2>
        <button onClick={this.clickMe}>Click Me</button>
        <button onClick={this.decCount}>decreaseCount</button>
        <button onClick={this.resetCount}>Reset All Count</button>
        </>
      );
    }
  }


  ReactDOM.render(<Employee name="Zaid Khan" count='0'/>,
    document.getElementById("root"));*/



/*//Passing Arguments to Event handlers
 
class Employee extends React.Component{
  state={
    name:'Zaid Khan',
    id:1002,
  }

  // Event Handler Using Arrow Function
  clickMe=(id,j,e)=>{
    console.log(id);
    console.log(j);
    console.log(e);
  }

  // clickArgu=(e)=>{
  //   this.clickMe(this.state.id,e)
  // }
  render(){
    return(
      <>
      <h1>Hello Employee</h1>
    <h2>Employee Name: {this.state.name}</h2>
    {/* <button onClick={(e)=>{this.clickMe(this.state.id,e)}}>Click Me</button> }
    <button onClick={(e)=>{this.clickMe(this.state.id,"khan786",e)}}>Delete Arrow Function</button>
    <button onClick={this.clickMe.bind(this,this.state.id,'zaid249')}>Delete Bind Function</button>
      </>
    )
  }
}

ReactDOM.render(<Employee/>,
  document.getElementById('root'));*/


/*// Update State Details Using setState Method

class Employee extends React.Component{
  constructor(props){
    super(props);

    this.state={
      name:this.props.name,
      empId:this.props.empId,
      salary:this.props.salary,
    }

  }
  updateEmpInfo=()=>{
    let name=this.state.name;
    // let empId=this.state.empId;

    this.setState({
      name:name,
      empId:'3001',
      salary:'50000'
    });
  }
  render(){
    return(
    <>
    <h1>Hello Employee</h1>
    {/* <h2>Employee Name: {this.state.name}</h2>
    <h2>Employee Id: {this.state.empId}</h2>
    <h2>Employee NSalaryame: {this.state.salary}</h2> }
    <h2>Employee Name: {this.state.name} and Employee Id: {this.state.empId} and Emplyee Salary:{this.state.salary} </h2>
    <button onClick={this.updateEmpInfo}>update Employee Info</button>
    </>
    );
  }
}

ReactDOM.render(<Employee name='Zaid Khan' empId='1002' salary='30000' />,
  document.getElementById('root'));*/




/*// Children in JSX


class Employee extends React.Component{
  render(){
    return(
      <>
      <h1>Hello Employee</h1>
    <h2>Employee Name: {this.props.name}</h2>
    <p>Children JSX: {this.props.children}</p>
      </>
    ) 
  }
}

ReactDOM.render(<Employee name='Zaid Khan'>{34+45*90}   Hello I am Children teg in React JSX</Employee>,
  document.getElementById('root'));*/



/*//Rndring an Array of Data with map() 

class Employee extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:0,
      users:['Zaid','khan','Predeep','Rohit','Deepak','Rohan','Sohan'],
    }
  }
  inreamentCount=()=>{
     // this.state.count
     this.setState({
       count:this.state.count+1,
     })
  }
  render(){
    return(
      <>
      <h1>Hello EMployee</h1>
    <h2>Count: {this.state.count}</h2>
    <button onClick={this.inreamentCount}>Increament Count</button>
     <ul>
       {this.state.users.map((user,index)=>(
         <li key={index}>{user}</li>
       ))}
     </ul>
    </>
    )
  }
}

ReactDOM.render(<Employee count='0'></Employee>,document.getElementById('root'));*/



//  Mounting Life Cycle

/*class Employee1 extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:"zaid Khan",
    }
    console.log('Employee1 Constructor is call');
  }

  componentDidMount(){
    console.log('Employee1 compnentDidMount is Called');
  }

    static getDerivedStateFromProps(prop,state){
      console.log('Employee1 GetDerivedState Function is Called');
      return null;
    }

  render(){
    console.log('Employee1 Render Is Called');
    return(
      <>
      <h1>Hello Employee1</h1>
      <Employee2/>
      </>
    );
    
  }
}

ReactDOM.render(<Employee1/>,document.getElementById('root'));*/


// Updating LifeCycle

/*class Employee1 extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:"zaid Khan",
      empId:1003,
    }
    console.log('Employee1 Constructor is call');
  }


    static getDerivedStateFromProps(prop,state){
      console.log('Employee1 GetDerivedState Function is Called');
      return null;
    }

    updateEmpId=()=>{
      let emp_Id=this.state.empId;

      this.setState({
        empId:emp_Id+1,
      })
    }
  render(){
    console.log('Employee1 Render Is Called');
    return(
      <>
      <h1>Hello Employee1</h1>
    <h2>Your Employee Id: {this.state.empId}</h2>
      <Employee2 empbId={this.state.empId}/>
      <button onClick={this.updateEmpId}>Update empId</button>
      </>
    );
    
  }
}

ReactDOM.render(<Employee1/>,document.getElementById('root'));*/



/*// UnMounting LifeCycle

class Employee1 extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:"zaid Khan",
      empId:1003,
    }
    console.log('Employee1 Constructor is call');
  }

  UNSAFE_componentWillMount(){
    console.log('Employee1 componenetWillMount Calling');
  }
  componentWillUnmount(){
    console.log('Employee1 componentWillUnmount calling');
  }
  render(){
    console.log('Employee1 Render Is Called');
    return(
      <>
      <h1>Hello Employee1</h1>
    <h2>Your Employee Id: {this.state.empId}</h2>
      </>
    );
    
  }
}

ReactDOM.render(<Employee1/>,document.getElementById('root'));
ReactDOM.render(<Employee2/>,document.getElementById('rootB'));
ReactDOM.unmountComponentAtNode(document.getElementById('root'));*/



/*// Pure Component in ReactJs

class ParentComponent extends React.Component{

  constructor(props){
    super(props);
    this.state={
      name:'Zaid Khan',
    }
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({
        name:'Deepak',
      });
    },2000);
  }

  render(){
    console.log('Parent component render');
    return(      
      <>
      <h1>Employee Name: {this.state.name}</h1>
      <RegularComponent name={this.state.name}/>
      <PureComponent name={this.state.name}/>
      </>
    );
  }

}

ReactDOM.render(<ParentComponent/>,document.getElementById('root'));*/


/*// React.memo() function component


class ParentComponent extends React.Component{

  constructor(props){
    super(props);
    this.state={
      name:'Zaid Khan',
    }
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({
        name:'Deepak',
      });
    },2000);
  }

  render(){
    console.log('Parent component render');
    return(      
      <>
      <h1>Employee Name: {this.state.name}</h1>
      <MemoComp name={this.state.name}/>
      </>
    );
  }

}

ReactDOM.render(<ParentComponent/>,document.getElementById('root'));*/



/*// Hooks In React JS
import React,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
function Employee() {
  const [name,setName]=useState('Zaid Khan');
  const [empId,setEmpId]=useState(1003);
  const [salary,setSalary]=useState(2200);
  const [name2,setName2]=useState('Pradeep Kumar');
  const [empId2,setEmpId2]=useState(1001);
  const [salary2,setSalary2]=useState(5000);

  const clickIncreent=()=>{
    setSalary(salary+1);
  }

  const clickDecrement=()=>{
    setSalary2(salary2-1);
  }

useEffect(()=>{console.log("UseEffect Rendering")},[salary2]);

  return(
    <>
    <h1>Hello Employee</h1>
  <h2>Employee Details</h2>
  <h2>Your <i>Name</i> is {name} Your <i>EMployeeId</i> is {empId} and Your <i>Salary</i> is {salary}</h2>
  <button type="button" onClick={clickIncreent}>Click Me</button>
  <h2>Your Name is {name2} Your EMployeeId is {empId2} and Your Salary is {salary2}</h2>
  <button type="button" onClick={clickDecrement}>Click Me</button>
    </>
  );
}

ReactDOM.render(<Employee/>,document.getElementById('root'));*/



// Custom Hook in ReactJS

/*
import reactDom from 'react-dom';
import useCustomhook from './custom';

function Employee() {
  
    // const data=useCustomhook();
    // if you return thye valye in array
    const [salary,increamentSalary]=useCustomhook();
    const [salary2,increamentSalary2]=useCustomhook();
    return(
      <>
      <h1>User Detail's</h1>
      //{ <h2>Hi, User Your Salary is: {data.salary}</h2> }
      //{ <button onClick={data.increamentSalary}>Increament Salary</button> }
     // { if you return thye valye in array }
      <h2>Hi, User Your Salary is: {salary}</h2>
      <button onClick={increamentSalary}>Increament Salary</button>
      <h2>Hi, User Your Salary2 is: {salary2}</h2>
      <button onClick={increamentSalary2}>Increament Salary</button>
      </>
    )

}

reactDom.render(<Employee/>,document.getElementById('root'));*/



/*// Fetch Data From An API with ReactHooks


import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeB from './EmployeeB';

class Employee extends React.Component{
  constructor(){
    super();
    this.state={
      hasError:false,
      plants:{}
    };
  }

  componentDidMount(){
    fetch("https://swapi.cp/api/plants/")
    .then(res=>res.json())
    .then(res=>this.setState({plants:res}))
    .catch(()=>this.setState({hasError:true}));
  }

  render(){
    return(
      <>  
      <h1>Employee From Class Component</h1>
      <h3>Results:</h3>
    <div>{JSON.stringify(this.state.plants)}</div>
      </>
    );
  }
}

ReactDOM.render(<Employee/>,document.getElementById('root'));*/



/*// If-Else Conditional rendring in ReactJS


import React from 'react';
import ReactDOM from 'react-dom';
import Guest from './guestEmployee';
import WelcomeEmployee from './welcomeEmployee';

class Employee extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLogged:this.props.isLogged
    }
  }

  loginHandler=()=>{
    this.setState({isLogged: true});
  }
  
  logoutHandler=()=>{
    this.setState({isLogged: false});

  }

  render() {
    const isLogged = this.state.isLogged;
    let data;
    if (isLogged) {
      data= <WelcomeEmployee logoutHandler={this.logoutHandler}/>
    }else{
      data= <Guest loginHandler={this.loginHandler}/>
    }
    return(
      <>
      {data} 
      </>
    );
  }

}

ReactDOM.render(<Employee isLogged={false}/>,document.getElementById('root'));*/




/*// Inline if with Logical && Operator 


import React from 'react';
import ReactDOM from 'react-dom';
import Guest from './guestEmployee';
import WelcomeEmployee from './welcomeEmployee';

class Employee extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLogged:this.props.isLogged
    }
  }

  loginHandler=()=>{
    this.setState({isLogged: true});
  }
  
  logoutHandler=()=>{
    this.setState({isLogged: false});

  }

  render() {
    const isLogged = this.state.isLogged;
    // let data;
    // if (isLogged) {
    //   data= <WelcomeEmployee logoutHandler={this.logoutHandler}/>
    // }else{
    //   data= <Guest loginHandler={this.loginHandler}/>
    // }
    return(
      <>
      {isLogged ? <WelcomeEmployee logoutHandler={this.logoutHandler}/> : <Guest loginHandler={this.loginHandler}/>}
      </>
    );
  }

}

ReactDOM.render(<Employee isLogged={false}/>,document.getElementById('root'));*/



/*// Lists in ReactJS

import React from 'react';
import ReactDOM from 'react-dom';

class Employee extends React.Component{
constructor(props){
  super(props);
  this.state={
    users:props.users,
    isLogged:true
  }
}
render(){
  const userArr=this.state.users;
  const newArr=userArr.map((val,index)=>{
  return <li key={val.id}>{index}-{val.name}</li>;
  })
  // console.log(userArr);
  return(
  <>
    <h1>Hello Employee</h1>
    <ul>{newArr}</ul>
  </>
  );
}

}
const users=[{id:1,name:'Paredeep'},{id:2,name:'Abhi'},{id:3,name:'Zaid Khan'}];
ReactDOM.render(<Employee users={users}/>,document.getElementById('root'));*/



/*// Styleing component Inline CSS in ReactJS


import React from 'react';
import ReactDOM from 'react-dom';

class Employee extends React.Component {
  render() {

    // const txtStyle = {
    //   color: '#fff',
    //   backGround: '#000',
    //   textAlign: "center"
    // }

    return (
      <>
        <h1 style={{...{fontSize:'50px'}}}>Hello Employee</h1>
      </>
    );
  }
}

ReactDOM.render(<Employee/>, document.getElementById('root'));*/



/*// Styleing component External CSS in ReactJS


import React from 'react';
import ReactDOM from 'react-dom';
import Employee2 from './Employee2';
import './style.css';

class Employee extends React.Component {
  state={
    change:true
  }
  changeStyle=()=>{
    this.setState({
      change:false
    });
  }
  render() {

    return (
      <>
        <h1 className={this.state.change ? 'title' : 'copyright'}>Hello Employee</h1>
        <Employee2 copyright="copyright"/>
        <button onClick={this.changeStyle}>Change CSS</button>
      </>
    );
  }
}

ReactDOM.render(<Employee />, document.getElementById('root'));*/


/*// CSS module

import React from 'react';
import ReactDOM from 'react-dom';
import Employee2 from './Employee2';
import Style from './style.module.css';

class Employee extends React.Component {
  state={
    change:true
  }
  changeStyle=()=>{
    this.setState({
      change:false
    });
  }
  render() {

    return (
      <>
      <h1 className={Style.title}>Hello Employee</h1>
      <Employee2/>
      </>
    );
  }
}

ReactDOM.render(<Employee />, document.getElementById('root'));*/


/*// How to use import Image inReactJS

import React from 'react';
import ReactDOM from 'react-dom';
import logo from './babyDoll.jpg';

class Employee extends React.Component {
  state={
    change:true
  }
  changeStyle=()=>{
    this.setState({
      change:false
    });
  }
  render() {

    return (
      <>
      <h1>Inside Public Folder</h1>
      <img src={process.env.PUBLIC_URL+"babyDoll.jpg"} alt="myPic"></img>
      <h1>Inside SRC Folder</h1>
      <img src={logo} alt='muPic'/>
      </>
    );
  }
}

ReactDOM.render(<Employee />, document.getElementById('root'));*/

/*
// Form handling


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class Employee extends React.Component{
 
  render(){
    return(
      <>
      <App />

      </>
    );
  }
}

ReactDOM.render(<Employee/>,document.getElementById('root'));*/

/*
// Integrate Bootstrap with ReactJS


import React from 'react';
import ReactDOM from 'react-dom';
import BootForm from './form';
import 'bootstrap/dist/css/bootstrap.min.css';

class Employee extends React.Component{
 
  render(){
    return(
      <>
      <div className='container'>
      <h1>Welcome To Zaid Khan Shop</h1>
      <BootForm />
      </div>
      </>
    );
  }
}

ReactDOM.render(<Employee/>,document.getElementById('root'));*/


/*
// Lifting State Up in ReactJS

import React from 'react';
import ReactDOM from 'react-dom';
// import Department from './department';
// import Salary from './salary';
import Employee from './Employee';

ReactDOM.render(<Employee/>,document.getElementById('root'));*/



/*
// Composition vs Inheritance

import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

function Sidebar(){
  return(
    <h1> Sidebar from index page as props</h1>
    )
  }
  

  ReactDom.render(<App data={<Sidebar/>}>Hello Sidebar</App>,document.getElementById('root'));
  */
 
 /*
 // Context API in React
 
 
 import React from 'react';
 import ReactDom from 'react-dom';
 import App from './App';


 ReactDom.render(<App/>,document.getElementById('root'));*/




//  Router in ReactJS



import React from 'react';
import ReactDom from 'react-dom';
import App from './App';


ReactDom.render(<App/>,document.getElementById('root'));