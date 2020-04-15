// You will add code to this file
import React from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  // console.log(props);

  return (
    <div key={props.postId}>
      {/* map through the comments data and return the Comment component */}
      {props.comments.map((comment, index) => (
      	<Comment key={index} comment={comment} />
      ))}
      <CommentInput />
    </div>
  )
};

export default CommentSection;
