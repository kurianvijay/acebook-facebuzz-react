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
    const Url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(Url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: 'Placeholder title',
        body: this.state.message,
        userId: this.state.userID
      }),
    })
      .then(this.props.getFeed)
      .then(this.resetForm)
  }

  resetForm() {
    this.setState({ message: '' })
  }

  render() {
    return (
      <form className='post-form'>
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
        <button className="btn btn-primary" onClick={this.handleClick} >Add Post</button>
      </form>
    )
  }
}
export default PostForm;
