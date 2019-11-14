import React from 'react';
import PostForm from './PostForm'

class Post extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      editMode: false,
    }
    this.postDelete = this.postDelete.bind(this)
    this.postEdit = this.postEdit.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.handleEditClick = this.handleEditClick.bind(this)
    this.postHTMLDisplay = this.postHTMLDisplay.bind(this)
  }

  postHTMLDisplay() {
    return (
      <div className="row mb-1 mt-3">
          <div className="col-12">
            <div className="post-author px-2">
              Written by: {this.props.author}
            </div>
            <div className="post-body px-2 mb-2">
              Content: {this.props.body}
            </div>
            <div className="post-timestamp px-2">
              Written at: {this.props.timestamp}
            </div>
            <button type="submit" onClick={this.handleEditClick}> Edit </button>
            <button onClick={this.handleDeleteClick}> Delete </button>
          </div>
        </div>
    )
  }

  handleDeleteClick(event) {
    event.preventDefault()
    this.postDelete()
  }

  handleEditClick(event) {
    event.preventDefault()
    this.postEdit()
  }

  postDelete() {
      fetch("/api/posts/"+this.props.id, 
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        })
        .then(response => console.log(response))
        .then(this.props.getFeed)
  }

  postEdit() {
    this.setState({editMode:true})
  }


  render() {
    let postDisplay;
    if (this.state.editMode) {
      postDisplay = <PostForm body={this.props.body} postId={this.props.id}/>
    } else {
      postDisplay = this.postHTMLDisplay()
    }

    return (
      <div>{postDisplay}</div>
    )
  }
}

export default Post;
