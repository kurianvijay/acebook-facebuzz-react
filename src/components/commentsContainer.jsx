import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm'

class CommentsContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render(){
    return (
      <div className="CommentsContainer" >
        <Comment/>
        <CommentForm/>
      </div>
    )

  }

}
export default CommentsContainer;
