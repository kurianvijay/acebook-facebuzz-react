import React from 'react';
import Post from './Post';
import PostForm from './PostForm'

class Posts extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      feed: []
    }
    this.getFeed = this.getFeed.bind(this)
  }

  getFeed() {
    const url = 'https://acebook-facebuzz-api.herokuapp.com/api/posts';
    fetch(
      url,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'GET',
      }
    )
      .then(
        response => {
          console.log(response)
          return response.json()
        }
      )
      .then(
        data => {
          console.log(data)
          this.setState({
            feed: data
          })
        }
      )
  }

  componentDidMount() {
    this.getFeed()
  }

  render() {
    return (
      <div className="Posts">
        <PostForm getFeed={this.getFeed} />
        {
          this.state.feed.map((post) => (
            <Post
              id={post.id}
              author={post.user_id}
              body={post.message}
              timestamp='14 November 2019 11am'
              likes='0'
            />
          ))
        }
      </div>
    )
  }
}

export default Posts;
