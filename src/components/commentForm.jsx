import React from 'react';

class CommentForm extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <form>
            <input name="message" type="text"/>
            <button> Add Comment</button>
          </form>
        </div>
      </div>
    )
  }

}
export default CommentForm;
