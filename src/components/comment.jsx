import React from 'react';

class Comment extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userName: "Melvin Lau",
      comment: "This is my first comment.",
      createdAt: "5 Nov 2019 5:05pm"
    }

  }

  render() {
    return (
      <div className="row mb-1 mt-3">
        <div className="col-12">
          <div className="comment-author px-2">
            {this.state.userName}
          </div>
          <div className="comment-message px-2 mb-2">
            {this.state.comment}
          </div>
          <div className="comment-meta px-2">
            {this.state.createdAt}
          </div>
        </div>
      </div>
    )
  }

}
export default Comment;
