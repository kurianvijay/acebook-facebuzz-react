import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      userID: '1',
    }

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
        // title: 'Placeholder title',
        message: this.state.message,
        user_id: this.state.user_id
      }),
    })
      .then(response=>console.log(response))
      .then(this.props.getFeed)
      // .then(this.resetForm)
  }

  resetForm() {
    this.setState({ message: '' })
  }

  render() {
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
        <button className="btn btn-primary" onClick={this.sendPost} >Add Post</button>
      </form>
    )
  }
}
export default PostForm;
