import React from 'react';

class RegularComponent extends React.Component{

/*    shouldComponentUpdate(newProps,newState){
        if(newProps.name!==this.props.name){
            return true;
        }else{
            return false;
        }
    }*/
    render(){
        console.log('regular component render');
        return(
            <>
            <h1>Hello! RegularComponent: {this.props.name}</h1>
            </>
        )
    }
}

export default RegularComponent;