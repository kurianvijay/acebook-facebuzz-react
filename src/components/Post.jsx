import React from 'react';

class Post extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id:'1',
      author: 'Alec Walker',
      body: 'This is a post',
      timestamp: '7 Oct 2019 7:14.pm',
    }
  }
render(){
  return (
    <div className="row mb-1 mt-3">
        <div className="col-12">
          <div className="post-author px-2">
            Written by: {this.state.author}
          </div>
          <div className="post-body px-2 mb-2">
            Content: {this.state.body}
          </div>
          <div className="post-timestamp px-2">
            Written at: {this.state.timestamp}
          </div>
          <button> Edit </button>
          <button> Delete </button>
        </div>
      </div>
  )
}
}

export default Post;
