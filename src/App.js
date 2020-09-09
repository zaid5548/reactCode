/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/


/*// Form Handling control Component

import React from 'react';
// import ReactDom from 'react-dom';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={name:'',email:'',phone:''}
  }
  changeHandler=(e)=>{
    const key=e.target.name;
    const val=e.target.value;
    this.setState({[key]:val});
  }

  changeSubmit=(e)=>{
    // console.log(this.state);
    e.preventDefault(
      this.props.onSubmit(this.state),
      this.setState({name:'',email:'',phone:''})
    );
  }
  render(){
  return (
    <>
     <center><h1>React Form</h1>
      <form onSubmit={this.changeSubmit}>
        <label>
          Name:
    <input type="text" name="name" value={this.state.name} onChange={this.changeHandler}/>
        </label><br/><br/>
        <label>
          Email:
    <input type="text" name="email" value={this.state.email} onChange={this.changeHandler}/>
        </label><br/><br/>
        <label>
          Phone No:
    <input type="text" name="phone" value={this.state.phone} onChange={this.changeHandler}/>
        </label><br/><br/>
        <input type="submit" value="Submit" />
      </form>
      </center> 
    </>
  );
}
}

export default App;*/


/*
// Form Handling control Component

import React from 'react';
// import ReactDom from 'react-dom';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      email:'',
      phone:''
    }
    this.inputTextField=React.createRef();
  }
 

  changeSubmit=(e)=>{
    // console.log(this.state);
    e.preventDefault();
    const key=this.inputTextField.current.name;
    const val=this.inputTextField.current.value;
    this.setState({
      [key]:val
    });
  }
  render(){
  return (
    <>
     <center><h1>React Form</h1>
  <h3>Name: {this.state.name}</h3>
  <h3>Email: {this.state.email}</h3>
  <h3>Phone: {this.state.phone}</h3>
      <form onSubmit={this.changeSubmit}>
        <label>
          Name:
    <input type="text" name="name" />
        </label><br/><br/>
        <label>
          Email:
    <input type="text" name="email" ref={this.inputTextField}/>
        </label><br/><br/>
        <label>
          Phone No:
    <input type="text" name="phone" />
        </label><br/><br/>
        <input type="submit" value="Submit" />
      </form>
      </center> 
    </>
  );
}
}

export default App;*/

/*
// Composition vs Inheritance

import React from 'react';
import Emplyee from './Employee';

class App extends React.Component{
    render(){
        return(
            <>
          <Emplyee name={'Zaid Khan'} empId={1232} salary={45000} />
          <Emplyee name={'Zaid Khan'} empId={1232} salary={45000} />
          <Emplyee name={'Zaid Khan'} empId={1232} salary={45000} />
          {this.props.data}
          {this.props.children}
            </>
        )
    }
}

export default App;*/


/*

// Context API in React

import React from 'react';
import Employee from './Employee';
import {Provider} from './context';
class App extends React.Component{
  state={
    name:"Pradeep",
    department:'Development',
    salary:5000
  }


 changehandler=()=>{
  this.setState({salary:this.state.salary+500});
 }

  render(){
    const data={
      xyz:this.state,
      clickChange:this.changehandler
    }
      return(
          <>
       <h1>App Component</h1>
       <Provider value={data}>
       <Employee/>
       </Provider>
          </>
      )
  }
}

export default App;

*/



/*
// Higher Order Component (HOC) -- VotingPoll



import React from 'react';
import './App.css';
import BJP from './bjp';
import AAP from './aap';
class App extends React.Component{
 
  render(){
    
      return(
          <>
       <h1>Higher Order Component</h1>
       <BJP candidate="Manoj Twari"/>
       <AAP candidate="Arvind Kejriwal"/>
          </>
      )
  }
}

export default App;*/



/*
// Error Boundaries in ReactJS



import React from 'react';
import Employee from './Employee';
import WidGet from './widget';
import logo from './babyDoll.jpg';
import ErrorBoundary from './ErrorBoundary';
class App extends React.Component{
 
  render(){
    
      return(
          <>
       <h1>App Componenet</h1>
       <ErrorBoundary>
        <Employee/>
        </ErrorBoundary>
        
        <ErrorBoundary>
        <WidGet profileImage=""/>
        </ErrorBoundary>
          </>
      )
  }
}

export default App;*/



/*
// Strict Mode In ReactJS



import React from 'react';
import Employee from './Employee';
class App extends React.Component{
 
  render(){
    
      return(
          <React.StrictMode>
       <h1>App Componenet</h1>
       <Employee/>
          </React.StrictMode>
      )
  }
}

export default App;*/




// Router (Routing ) in ReactJS




/*
// Strict Mode In ReactJS



import React from 'react';

class App extends React.Component{
 
  render(){
    
      return(
          <>
       <h1>App Componenet</h1>
          </>
      )
  }
}

export default App;*/




/*
// Router in ReactJS



import React from 'react';
import RouterDemo from './RouterDemo';
class App extends React.Component{
 
  render(){
    
      return(
          <>
        <RouterDemo/>
          </>
      )
  }
}

export default App;*/


// Nested Router in ReactJS


import React from 'react';
import RouterDemo from './RouterDemo';
class App extends React.Component{
 
  render(){
    
      return(
          <>
        <RouterDemo/>
          </>
      )
  }
}

export default App;