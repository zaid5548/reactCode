
import React from 'react';
import CM from './votingPoll';


class AAP extends React.Component{
 
   

    render(){
    
      return(
          <>
       <h1>AAP {this.props.voteFor} Candidate: {this.props.candidate}</h1>
      <h2 onMouseOver={this.props.hocVoteHandler}>Total Vote: {this.props.hocVoteCount}</h2>
          </>
      )
  }
}

export default CM(AAP,5);