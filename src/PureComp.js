import React from 'react';

class PureComponent extends React.PureComponent{
   /* shouldComponentUpdate(newProps,newState){
        if(newProps.name!==this.props.name){
            return true;
        }else{
            return false;
        }
    }*/
    render(){
        console.log('PureComponent component render');
        return(
            <>
            <h1>Hello! PureComponent: {this.props.name}</h1>
            </>
        )
    }
}

export default PureComponent;