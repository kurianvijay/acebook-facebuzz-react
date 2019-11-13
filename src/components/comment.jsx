import React from 'react';

class Comment extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="row mb-1 mt-3">
        <div className="col-12">
          <div className="comment-author px-2">
            Melvin Lau
          </div>
          <div className="comment-message px-2 mb-2">
            This is my first comment.
          </div>
          <div className="comment-meta px-2">
            5 Nov 2019 5:05pm
          </div>

        </div>
      </div>
    )
  }

}
export default Comment;
