
import React from 'react';
import CM from './votingPoll';

class BJP extends React.Component{  
   

    render(){
    
      return(
          <>
       <h1>BJP {this.props.voteFor} Condidate: {this.props.candidate}</h1>
      <h2 onMouseOver={this.props.hocVoteHandler}>Total Vote: {this.props.hocVoteCount}</h2>
          </>
      );
  }
}

export default CM(BJP,10);