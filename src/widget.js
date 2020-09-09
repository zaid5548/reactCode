// Error Boundaries in ReactJS



import React from 'react';


class WidGet extends React.Component{
 
  render(){
    
    if(this.props.profileImage===''){
        throw new Error('Image is not Found');
    }

      return(
          <>
       <h1>Profile Image</h1>
       <img src={this.props.profileImage} alt="Profile Image"/>
          </>
      )
  }
}

export default WidGet;