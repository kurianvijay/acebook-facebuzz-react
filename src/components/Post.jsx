import React from 'react';

class Post extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  // editPost() {
  //
  //   fetch('/api/posts', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       // title: 'Placeholder title',
  //       message: this.state.message,
  //       user_id: this.state.user_id
  //     }),
  //   })
  //   .then(response => console.log(response))
  //   .then(this.props.getFeed)
  //   .then(this.resetForm)
  //
  // }

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
            <button > Edit </button>
            <button> Delete </button>
          </div>
        </div>
    )
  }
}

export default Post;
