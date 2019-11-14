import React from 'react';

class PostForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return(
      <form>
        <input name='message' type='text' />
        <br />
        <button className="btn btn-primary">Add Post</button>
      </form>
    )
  }
}
export default PostForm;
