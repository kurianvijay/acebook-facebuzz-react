import React from 'react';

class Post extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      author: null,
      body: null,
      timestamp: null,
    }
  }
render(){
  return (
    <div className="row mb-1 mt-3">
        <div className="col-12">
          <div className="post-author px-2">
            Written by: Alec Walker
          </div>
          <div className="post-body px-2 mb-2">
            Content: This is a post
          </div>
          <div className="post-timestamp px-2">
            Written at: 7 Oct 2019 7:14pm
          </div>

        </div>
      </div>
  )
}
}

export default Post;
