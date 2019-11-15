import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: this.props.body,
      userID: '1',
      // editMode: false,
    }

    this.sendEditPost = this.sendEditPost.bind(this)
    this.sendPost = this.sendPost.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.resetForm = this.resetForm.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleClick(event) {
    event.preventDefault()
    this.sendPost()
  }

  sendPost() {
    fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        message: this.state.message,
        user_id: this.state.user_id,
        id: 100
      }),
    })
      .then(response=>console.log(response))
      .then(this.props.getFeed)
      // .then(this.resetForm)
  }

  sendEditPost() {
    fetch("/api/posts/"+this.props.postId, 
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        message: this.state.message,
        user_id: this.state.user_id
      }),
    })
      .then(response=>console.log(response))
      .then(this.props.getFeed)
  }

  resetForm() {
    this.setState({ message: '' })
  }

  render() {
    let formType
    if (this.props.editMode){
    formType = (<button className="btn btn-primary" onClick={this.sendEditPost} >Edit Post</button>)
    } else {
      formType = (<button className="btn btn-primary" onClick={this.sendPost} >Add Post</button>)
    }

    return (
      <form>
        <textarea
          name='message'
          value={this.state.message}
          onChange={this.handleChange}
          placeholder='What are you up to?'
          rows='6'
          required
        >
        </textarea>
        <br />
        {formType}
      </form>
    )
  }
}
export default PostForm;
