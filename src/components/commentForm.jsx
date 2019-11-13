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
            <br />
            <div className="text-right m-1">
              <button className="btn btn-primary"> Add Comment</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

}
export default CommentForm;
