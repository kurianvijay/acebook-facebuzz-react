import React from 'react';
import Post from './Post';
import PostForm from './PostForm'

class Posts extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      feed: []
    }
    this.getFeed = this.getFeed.bind(this)
  }

  getFeed() {
    fetch(
      // do the API call
      'https://jsonplaceholder.typicode.com/posts',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'GET',
      }
    )
    .then(
      response => { return response.json() }
    )
    .then(
      data => {
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
        <PostForm />
        {
          this.state.feed.map((post) => (
            <Post
              id={post.id}
              author={post.userId}
              body={post.body}
              timestamp='Fake time: 14 November 2019 11am'
              likes="0"
            />
          ))
        }
      </div>
    )
  }
}

export default Posts;
