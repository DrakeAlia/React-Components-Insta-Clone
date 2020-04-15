// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, { useState }from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'

const LikeSection = props => {
  const likePost = (id) => {
    if (!props.liked.includes(id)) {
      props.addLike(id, props.likes + 1, false);
      props.setLiked(props.liked.concat(id));
    } else {
      props.addLike(id, props.likes -1, true);
      props.setLiked(props.liked.filter((likeId) => likeId !== id))
    }
  }

  return (
    <div>
      <div
        className="like-section"
        key="likes-icons"
      >
        <div className="like-section-wrapper">
        onClick={() => likePost(props.id)}
        {props.liked.includes(props.id) ? <i className="fas fa-heart" style={{ color: 'red '}} /> : <i className="far fa-heart" />}
        </div>

        <div className="like-section-wrapper">
          <i className="far fa-comment" />
        </div>
      </div>
      
      <p className="like-number">

      {props.likes} likes</p>
      </div>
  )
};

export default LikeSection;
