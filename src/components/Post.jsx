import React from 'react';

class Post extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
    this.postDelete = this.postDelete.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    this.postDelete()
  }

  postDelete() {
      fetch("/api/posts/"+this.props.id, 
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        })
        .then (response => console.log(response))
        .then(this.props.getFeed)
  }
  
  render() {
    return (
      <div className="row mb-1 mt-3">
          <div className="col-12">
            <div className="post-author px-2">
              Written by: {this.props.author}
            </div>
            <div className="post-body px-2 mb-2">
              Content: {this.props.body}
            </div>
            <div className="post-timestamp px-2">
              Written at: {this.props.timestamp}
            </div>
            <button> Edit </button>
            <button onClick={this.handleClick}> Delete </button>
          </div>
        </div>
    )
  }
}

export default Post;
