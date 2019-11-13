import React from 'react';
import Post from './Post';
import PostForm from './PostForm'

class Posts extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      feed: []
    }
  }

  render(){
    return (
      <div className="Posts">
        <Post/>
        <PostForm/>
       </div>
    )
  }
}

export default Posts;
