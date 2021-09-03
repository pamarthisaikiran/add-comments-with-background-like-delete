import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    username: '',
    comment: '',
    commentList: [],
  }

  deleteComment = eachItemId => {
    const {commentList} = this.state
    this.setState({
      commentList: commentList.filter(Item => Item.id !== eachItemId),
    })
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  renderCommentList = () => {
    const {commentList} = this.state
    return commentList.map(eachItem => (
      <CommentItem
        toggleIsLikedId={this.toggleIsLiked}
        deleteComment={this.deleteComment}
        commentDetails={eachItem}
        key={eachItem.id}
      />
    ))
  }

  onAddComment = event => {
    event.preventDefault()
    const {username, comment} = this.state

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const NewComment = {
      id: uuidv4(),
      username,
      comment,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, NewComment],
      username: '',
      comment: '',
    }))
  }

  changeName = event => {
    this.setState({username: event.target.value})
  }

  changeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {username, comment, commentList} = this.state

    return (
      <div className="bg-container">
        <div className="container1">
          <div>
            <h1>Comments</h1>
            <p>Say Something about 4.0 Technologies</p>
            <form className="container" onSubmit={this.onAddComment}>
              <input
                onChange={this.changeName}
                className="input"
                placeholder="Your Name"
                value={username}
              />
              <textarea
                onChange={this.changeComment}
                className="textA"
                rows="6"
                placeholder="Your Comment"
                value={comment}
              />
              <button className="button">Add Comment</button>
            </form>
          </div>
          <img
            alt="comments"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          />
        </div>
        <hr />
        <p>
          <span className="span">{commentList.length}</span>Comments
        </p>

        <ul>{this.renderCommentList()}</ul>
      </div>
    )
  }
}

export default Comments
