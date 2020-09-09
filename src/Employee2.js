// import React from 'react';
// import ReactDOM from 'react-dom';


// Mounting LifeCycle
/*class Employee2 extends React.Component{
    constructor(props){
      super(props);
      this.state={
        name:"zaid Khan",
      }
      console.log('Employee2 Constructor is call');
    }
  
    componentDidMount(){
      console.log('Employee2 compnentDidMount is Called');
    }
  
      static getDerivedStateFromProps(prop,state){
        console.log('Employee2 GetDerivedState Function is Called');
        return null;
      }
  
    render(){
      console.log('Employee2 Render Is Called');
      return(
        <>
        <h1>Hello Employee2</h1>
        </>
      );
      
    }
  }
  
  export default Employee2;*/


//   Updating LifeCycle

/*class Employee2 extends React.Component{
    constructor(props){
      super(props);
      this.state={
        name:"zaid Khan",
        empBId:this.props.empbId,
      }
      console.log('Employee2 Constructor is call');
    }

      static getDerivedStateFromProps(prop,state){
        console.log('Employee2 GetDerivedState Function is Called');
        console.log(prop,state);
        if(prop.empbId!==state.empBId){
          return {empBId:prop.empbId}
        }
        return null;
      }
  
shouldComponentUpdate(nextProp,nextState){
  console.log('Employee2 shouldComponentUpdate calling');
  console.log(nextProp,nextState);
  return true;
}

getSnapshotBeforeUpdate(prevProps,prevState){

  console.log('Employee2 getSnapshotBeforeUpdate calling');
  console.log(prevProps,prevState);
  return 3;
}

 componentDidUpdate(prevProps,prevState,snapshot){
    console.log('Employee componentDidUpdate invoked');
    console.log(prevProps,prevState,snapshot);
  }
    render(){
      console.log('Employee2 Render Is Called');
      return(
        <>
        <h1>Hello Employee2</h1>
      <h2>Your Employee Id: {this.state.empBId}</h2>
        </>
      );
      
    }
  }
  
  export default Employee2;*/


/*  class Employee2 extends React.Component{
    constructor(props){
      super(props);
      this.state={
        name:" Khan",
        empId:1004,
      }
      console.log('Employee2 Constructor is call');
    }
    UNSAFE_componentWillMount(){
      console.log('Employee2 componenetWillMount Calling');
    }

    componentWillUnmount(){
      console.log('Employee1 componentWillUnmount calling');
    }
    render(){
      console.log('Employee2 Render Is Called');
      return(
        <>
        <h1>Hello Employee2</h1>       
        </>
      );
      
    }
  }

  export default Employee2;*/
/*// Extenal CSS
  import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Employee2 extends React.Component {

  render() {

    return (
      <>
        <h1 className={this.props.copyright}>Hello Employee2</h1>
      </>
    );
  }
}

export default Employee2; */


// Use css module

import React from 'react';
import Style1 from './apps.module.css';

class Employee2 extends React.Component {

  render() {

    return (
      <>
        <h1 className={Style1.title}>Hello Employee2</h1>
      </>
    );
  }
}

export default Employee2; 