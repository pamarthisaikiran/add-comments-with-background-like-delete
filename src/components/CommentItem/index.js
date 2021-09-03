// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsLikedId, deleteComment} = props
  const {
    id,
    username,
    comment,
    isLiked,
    initialClassName,
    date,
  } = commentDetails
  const initial = username ? username[0].toUpperCase() : ''

  const like = () => {
    toggleIsLikedId(id)
  }

  const onDeleteComment = () => {
    deleteComment(id)
  }

  const likedColor = isLiked ? 'active' : 'button1'

  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const postedtime = formatDistanceToNow(date)

  return (
    <li className="li">
      <div>
        <div className="container1">
          <div className={`initi-bg ${initialClassName}`}>
            <p className="initial">{initial}</p>
          </div>
          <div>
            <div className="name-time">
              <p className="username">{username}</p>
              <p className="time">{postedtime} ago </p>
            </div>
            <p className="comment">{comment}</p>
          </div>
        </div>
      </div>
      <div className="like-delete">
        <div className="like-button">
          <img alt="like" src={likeImageUrl} />
          <button type="button" className={likedColor} onClick={like}>
            Like
          </button>
        </div>
        <button
          testid="delete"
          type="button"
          className="button1"
          onClick={onDeleteComment}
        >
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
