import React from 'react';
import Post from './Post';
import PostForm from './PostForm'

class Posts extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      feed: [<Post/>]
    }
  }

  render(){
    return (
      <div className="Posts">
        {this.state.feed}
        <PostForm/>
       </div>
    )
  }
}

export default Posts;
